// Agenda de EXEMPLO: expediente, reservas e cupons fictícios, sem backend.
import type {Cupom, Expediente, Reserva} from '@/features/agendamento/lib/agenda';

export const expediente: Expediente = {
  2: [
    {inicio: '09:00', fim: '12:00'},
    {inicio: '13:00', fim: '19:00'},
  ],
  3: [
    {inicio: '09:00', fim: '12:00'},
    {inicio: '13:00', fim: '19:00'},
  ],
  4: [
    {inicio: '09:00', fim: '12:00'},
    {inicio: '13:00', fim: '19:00'},
  ],
  5: [
    {inicio: '09:00', fim: '12:00'},
    {inicio: '13:00', fim: '19:00'},
  ],
  6: [{inicio: '08:00', fim: '14:00'}],
};

export const regras = {intervaloMin: 15, passoMin: 30, antecedenciaMin: 120, diasAbertos: 30};

/** Reservas fictícias, sempre as mesmas para a mesma data, para a agenda não parecer vazia. */
export function reservasDeExemplo(datas: string[]): Reserva[] {
  return datas.flatMap((data) => {
    const dia = Number(data.slice(8, 10));
    const r: Reserva[] = [];
    if (dia % 2 === 0) r.push({data, inicio: '09:00', duracaoMin: 150});
    if (dia % 3 === 0) r.push({data, inicio: '14:00', duracaoMin: 90});
    if (dia % 5 === 0) r.push({data, inicio: '16:30', duracaoMin: 120});
    return r;
  });
}

export const cupons: Cupom[] = [
  {codigo: 'BEMVINDA10', percentual: 10, servicos: ['gel', 'fibra', 'esmaltacao'], validoAte: '2027-12-31'},
];
