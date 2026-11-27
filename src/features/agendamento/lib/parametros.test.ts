import {describe, expect, it} from 'vitest';
import {lerParametros} from './parametros';

// 2026-11-27 (sexta) às 08:00; o próximo dia com expediente e horário livre para "gel" é a própria sexta.
const agora = {data: '2026-11-27', minutos: 8 * 60};
const p = (q: string) => new URLSearchParams(q);

describe('lerParametros (dados vindos da URL)', () => {
  it('ignora serviço inexistente', () => {
    expect(lerParametros(p('servico=<script>&data=2026-11-27&hora=13:00'), agora)).toMatchObject({
      passo: 0,
      servicoId: '',
    });
  });
  it('vai para a escolha de horário quando a data não é válida', () => {
    expect(lerParametros(p('servico=gel&data=2099-01-01'), agora)).toMatchObject({
      passo: 1,
      servicoId: 'gel',
      data: null,
    });
  });
  it('ignora hora que não está livre', () => {
    expect(lerParametros(p('servico=gel&data=2026-11-27&hora=03:00'), agora)).toMatchObject({
      passo: 1,
      data: '2026-11-27',
      hora: '',
    });
  });
  it('pula para os dados quando serviço, dia e hora são válidos', () => {
    expect(lerParametros(p('servico=gel&data=2026-11-27&hora=16:00'), agora)).toEqual({
      passo: 2,
      servicoId: 'gel',
      data: '2026-11-27',
      hora: '16:00',
    });
  });
});
