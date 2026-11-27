import type {Metadata} from 'next';
import {TextoLegal} from '@/components/TextoLegal';
import {marca} from '@/content/marca';

export const metadata: Metadata = {title: 'Termos de uso'};

export default function Termos() {
  return (
    <TextoLegal
      titulo="Termos de uso"
      atualizado="26/11/2026"
      secoes={[
        {
          titulo: 'O serviço',
          paragrafos: [
            `Este site permite agendar atendimentos com a ${marca.profissional}. Valores e durações são os da página de serviços no momento do agendamento.`,
          ],
        },
        {
          titulo: 'Cancelamento e reagendamento',
          paragrafos: [
            `Você pode pedir cancelamento ou reagendamento pelo site até ${marca.prazoCancelamentoHoras} horas antes do horário. O pedido fica aguardando a aprovação da Rachel. Depois desse prazo, fale direto com ela.`,
          ],
        },
        {
          titulo: 'Atrasos e faltas',
          paragrafos: ['Regras para atrasos e faltas ainda serão definidas pela Rachel e publicadas aqui.'],
        },
        {
          titulo: 'Cupons e promoções',
          paragrafos: [
            'Cada cupom tem validade, serviços e limite de uso próprios, informados ao aplicar. Cupom vencido, esgotado ou de outro serviço não é aceito.',
          ],
        },
        {
          titulo: 'Avaliações',
          paragrafos: [
            'Ao enviar uma avaliação, você escolhe se ela e as fotos podem ser publicadas. Publicamos só o seu primeiro nome, e a Rachel pode ocultar avaliações que violem estes termos.',
          ],
        },
      ]}
    />
  );
}
