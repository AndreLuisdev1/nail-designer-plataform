import {horariosLivres, proximosDias, type Agora} from './agenda';
import {expediente, regras, reservasDeExemplo} from '@/content/agenda-exemplo';
import {buscarServico} from '@/content/servicos';

export type Inicial = {passo: number; servicoId: string; data: string | null; hora: string};

/** Parâmetros da URL vêm de fora: só valem se o serviço existe e o horário está mesmo livre. */
export function lerParametros(params: {get(nome: string): string | null}, agora: Agora): Inicial {
  const vazio = {passo: 0, servicoId: '', data: null, hora: ''};
  const s = buscarServico(params.get('servico'));
  if (!s) return vazio;
  const d = params.get('data');
  const dias = proximosDias(agora.data, regras.diasAbertos, expediente, true);
  if (!d || !dias.includes(d)) return {...vazio, passo: 1, servicoId: s.id};
  const reservas = reservasDeExemplo(dias);
  const horas = horariosLivres({...regras, data: d, duracaoMin: s.duracaoMin, expediente, reservas, agora});
  if (!horas.length) return {...vazio, passo: 1, servicoId: s.id};
  const h = params.get('hora');
  return h && horas.includes(h)
    ? {passo: 2, servicoId: s.id, data: d, hora: h}
    : {...vazio, passo: 1, servicoId: s.id, data: d};
}
