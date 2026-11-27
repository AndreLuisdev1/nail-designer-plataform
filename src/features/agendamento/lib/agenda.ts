// Regras de agenda (RF-12) e cupons (RF-24). Datas em 'AAAA-MM-DD' e horas em 'HH:MM', sempre no fuso de São Paulo.

export type Janela = {inicio: string; fim: string};
/** Dia da semana (0 = domingo) -> janelas de atendimento. */
export type Expediente = Partial<Record<number, Janela[]>>;
export type Reserva = {data: string; inicio: string; duracaoMin: number};
export type Agora = {data: string; minutos: number};
export type Cupom = {codigo: string; percentual: number; servicos: string[]; validoAte: string};

const FUSO = 'America/Sao_Paulo';
const DIAS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

export const paraMinutos = (hora: string) => {
  const [h, m] = hora.split(':').map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
};
export const paraHora = (min: number) =>
  `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;

const diaDaSemana = (data: string) => new Date(`${data}T12:00:00Z`).getUTCDay();

function somarDias(data: string, dias: number) {
  const d = new Date(`${data}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + dias);
  return d.toISOString().slice(0, 10);
}

export function agoraEmSaoPaulo(agora = new Date()): Agora {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-CA', {
      timeZone: FUSO,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(agora)
      .map((x) => [x.type, x.value]),
  );
  return {data: `${p.year}-${p.month}-${p.day}`, minutos: Number(p.hour) * 60 + Number(p.minute)};
}

/** Horários em que o serviço cabe inteiro numa janela, sem encostar em outra reserva (respeitando o intervalo). */
export function horariosLivres(o: {
  data: string;
  duracaoMin: number;
  expediente: Expediente;
  reservas: Reserva[];
  intervaloMin: number;
  passoMin: number;
  agora?: Agora;
  antecedenciaMin?: number;
}): string[] {
  const ocupados = o.reservas
    .filter((r) => r.data === o.data)
    .map((r) => [paraMinutos(r.inicio), paraMinutos(r.inicio) + r.duracaoMin] as const);
  const minimo = o.agora?.data === o.data ? o.agora.minutos + (o.antecedenciaMin ?? 0) : -1;
  const livres: string[] = [];
  for (const j of o.expediente[diaDaSemana(o.data)] ?? []) {
    const fim = paraMinutos(j.fim);
    for (let s = paraMinutos(j.inicio); s + o.duracaoMin <= fim; s += o.passoMin) {
      if (s < minimo) continue;
      const e = s + o.duracaoMin;
      const colide = ocupados.some(([ri, rf]) => s < rf + o.intervaloMin && e + o.intervaloMin > ri);
      if (!colide) livres.push(paraHora(s));
    }
  }
  return livres;
}

/** Próximos `n` dias com expediente, a partir do dia seguinte a `hoje`. */
export function proximosDias(hoje: string, n: number, expediente: Expediente, incluirHoje = false): string[] {
  const dias: string[] = [];
  for (let i = incluirHoje ? 0 : 1; dias.length < n && i < 120; i++) {
    const d = somarDias(hoje, i);
    if (expediente[diaDaSemana(d)]?.length) dias.push(d);
  }
  return dias;
}

export function formatarPreco(centavos: number) {
  const reais = Math.floor(centavos / 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const cent = centavos % 100;
  return cent ? `R$ ${reais},${String(cent).padStart(2, '0')}` : `R$ ${reais}`;
}

export function formatarDuracao(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (!h) return `${m} min`;
  return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`;
}

export function formatarData(data: string) {
  const [, mes, dia] = data.split('-');
  return `${DIAS[diaDaSemana(data)]}, ${dia}/${mes}`;
}

export function formatarDataLonga(data: string) {
  const nomes = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const [, mes, dia] = data.split('-');
  return `${nomes[diaDaSemana(data)]}, ${dia}/${mes}`;
}

export function aplicarCupom(o: {
  codigo: string;
  servicoId: string;
  preco: number;
  cupons: Cupom[];
  hoje: string;
}) {
  const codigo = o.codigo.trim().toUpperCase();
  const cupom = o.cupons.find((c) => c.codigo === codigo);
  const recusa = (mensagem: string) => ({ok: false as const, valorFinal: o.preco, mensagem});
  if (!cupom)
    return recusa('Não encontramos esse cupom. Confira se o código está igual ao que você recebeu.');
  if (cupom.validoAte < o.hoje) {
    const [, mes, dia] = cupom.validoAte.split('-');
    return recusa(`Este cupom venceu em ${dia}/${mes}.`);
  }
  if (!cupom.servicos.includes(o.servicoId)) return recusa('Este cupom não vale para este serviço.');
  return {
    ok: true as const,
    valorFinal: Math.round((o.preco * (100 - cupom.percentual)) / 100),
    mensagem: `Cupom ${cupom.codigo} aplicado: ${cupom.percentual}% de desconto.`,
  };
}
