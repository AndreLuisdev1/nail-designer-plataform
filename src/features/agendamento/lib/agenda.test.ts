import {describe, expect, it} from 'vitest';
import {
  aplicarCupom,
  formatarData,
  formatarDuracao,
  formatarPreco,
  horariosLivres,
  agoraEmSaoPaulo,
  proximosDias,
  type Expediente,
} from './agenda';

// Terça a sábado; manhã e tarde com pausa para o almoço.
const expediente: Expediente = {
  2: [
    {inicio: '09:00', fim: '12:00'},
    {inicio: '13:00', fim: '18:00'},
  ],
  3: [
    {inicio: '09:00', fim: '12:00'},
    {inicio: '13:00', fim: '18:00'},
  ],
  6: [{inicio: '09:00', fim: '13:00'}],
};
const base = {expediente, intervaloMin: 15, passoMin: 30};

describe('horariosLivres (RF-12)', () => {
  it('só oferece horários em que a duração cabe inteira na janela', () => {
    // 2026-12-01 é terça. Serviço de 2 h 30: manhã 09:00–12:00 só comporta 09:00 e 09:30.
    const h = horariosLivres({...base, data: '2026-12-01', duracaoMin: 150, reservas: []});
    expect(h).toEqual(['09:00', '09:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30']);
  });

  it('respeita reservas e o intervalo entre atendimentos', () => {
    const reservas = [{data: '2026-12-01', inicio: '10:00', duracaoMin: 60}];
    const h = horariosLivres({...base, data: '2026-12-01', duracaoMin: 30, reservas});
    // 09:30 terminaria 10:00 sem intervalo; 11:00 começa colado no fim (11:00) sem os 15 min.
    expect(h.slice(0, 3)).toEqual(['09:00', '11:30', '13:00']);
  });

  it('ignora reservas de outros dias', () => {
    const reservas = [{data: '2026-12-02', inicio: '09:00', duracaoMin: 300}];
    expect(horariosLivres({...base, data: '2026-12-01', duracaoMin: 60, reservas})[0]).toBe('09:00');
  });

  it('não oferece nada em dia sem expediente', () => {
    expect(horariosLivres({...base, data: '2026-11-30', duracaoMin: 30, reservas: []})).toEqual([]);
  });

  it('no dia de hoje, só horários depois da antecedência mínima', () => {
    const agora = {data: '2026-12-01', minutos: 10 * 60 + 5};
    const h = horariosLivres({
      ...base,
      data: '2026-12-01',
      duracaoMin: 60,
      reservas: [],
      agora,
      antecedenciaMin: 60,
    });
    expect(h[0]).toBe('13:00');
  });
});

describe('proximosDias', () => {
  it('lista só os próximos dias com expediente, a partir de amanhã', () => {
    expect(proximosDias('2026-11-28', 3, expediente)).toEqual(['2026-12-01', '2026-12-02', '2026-12-05']);
  });
});

describe('agoraEmSaoPaulo', () => {
  it('converte para o fuso de São Paulo (UTC-3)', () => {
    expect(agoraEmSaoPaulo(new Date('2026-12-01T02:30:00Z'))).toEqual({
      data: '2026-11-30',
      minutos: 23 * 60 + 30,
    });
  });
});

describe('formatação', () => {
  it('preço sem centavos e com centavos', () => {
    expect(formatarPreco(18000)).toBe('R$ 180');
    expect(formatarPreco(16250)).toBe('R$ 162,50');
    expect(formatarPreco(123456)).toBe('R$ 1.234,56');
  });
  it('duração', () => {
    expect(formatarDuracao(150)).toBe('2 h 30');
    expect(formatarDuracao(60)).toBe('1 h');
    expect(formatarDuracao(45)).toBe('45 min');
  });
  it('data curta', () => {
    expect(formatarData('2026-12-01')).toBe('ter, 01/12');
  });
});

describe('aplicarCupom (RF-24)', () => {
  const cupons = [
    {codigo: 'BEMVINDA10', percentual: 10, servicos: ['gel', 'manutencao'], validoAte: '2026-12-31'},
    {codigo: 'VENCIDO', percentual: 20, servicos: ['gel'], validoAte: '2026-01-31'},
  ];
  const hoje = '2026-12-01';

  it('aplica o desconto e devolve o valor final', () => {
    expect(aplicarCupom({codigo: ' bemvinda10 ', servicoId: 'gel', preco: 18000, cupons, hoje})).toEqual({
      ok: true,
      valorFinal: 16200,
      mensagem: 'Cupom BEMVINDA10 aplicado: 10% de desconto.',
    });
  });
  it('recusa cupom de outro serviço, vencido ou inexistente com mensagem clara', () => {
    expect(
      aplicarCupom({codigo: 'BEMVINDA10', servicoId: 'remocao', preco: 5000, cupons, hoje}).mensagem,
    ).toMatch(/não vale para este serviço/);
    expect(aplicarCupom({codigo: 'VENCIDO', servicoId: 'gel', preco: 18000, cupons, hoje}).mensagem).toMatch(
      /venceu/,
    );
    expect(aplicarCupom({codigo: 'XYZ', servicoId: 'gel', preco: 18000, cupons, hoje})).toMatchObject({
      ok: false,
      valorFinal: 18000,
    });
  });
});
