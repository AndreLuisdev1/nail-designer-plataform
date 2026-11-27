import type {Metadata} from 'next';
import {TextoLegal} from '@/components/TextoLegal';
import {marca} from '@/content/marca';

export const metadata: Metadata = {title: 'Política de privacidade'};

// Rascunho com os elementos do art. 9º da LGPD (Lei 13.709/2018). Revisar antes de coletar dados reais.
export default function Privacidade() {
  return (
    <TextoLegal
      titulo="Política de privacidade"
      atualizado="26/11/2026"
      secoes={[
        {
          titulo: 'Quem cuida dos seus dados',
          paragrafos: [
            `A controladora dos dados é a ${marca.profissional}, responsável pelo ${marca.nome}. Para qualquer pedido sobre seus dados, escreva para ${marca.email.endereco} (endereço de exemplo, a definir).`,
          ],
        },
        {
          titulo: 'Quais dados coletamos',
          paragrafos: [
            'Só nome, e-mail e celular, informados por você ao agendar, além do histórico dos seus agendamentos. Não pedimos CPF, endereço nem dados de saúde.',
          ],
        },
        {
          titulo: 'Para que usamos',
          paragrafos: [
            'Para marcar, confirmar, lembrar, remarcar e cancelar seus horários, e para falar com você sobre eles. A base legal é a execução do serviço que você contratou (LGPD, art. 7º, V).',
            'Promoções por e-mail só com o seu consentimento, pedido à parte e desmarcado por padrão (art. 7º, I). Você pode retirar esse consentimento a qualquer momento, sem custo, na área "Meus dados" ou pelo e-mail acima.',
          ],
        },
        {
          titulo: 'Com quem compartilhamos',
          paragrafos: [
            'Não vendemos nem cedemos seus dados. Eles ficam com os serviços que fazem o site funcionar: hospedagem e envio de e-mail (fornecedores a definir). Se algum deles guardar dados fora do Brasil, esta política vai dizer onde e com qual garantia (art. 33).',
            'Seu celular nunca aparece em páginas públicas. Em avaliações publicadas, só o seu primeiro nome.',
          ],
        },
        {
          titulo: 'Por quanto tempo guardamos',
          paragrafos: [
            'Enquanto você tiver conta e pelo tempo necessário para cumprir obrigações legais. O prazo exato para contas inativas ainda será definido e publicado aqui.',
          ],
        },
        {
          titulo: 'Seus direitos',
          paragrafos: [
            'Você pode confirmar se tratamos seus dados, acessá-los, corrigi-los, pedir a portabilidade, a eliminação dos dados tratados com consentimento, saber com quem foram compartilhados e revogar o consentimento (art. 18). Responderemos em até 15 dias.',
            'Também é possível reclamar à Autoridade Nacional de Proteção de Dados (ANPD).',
          ],
        },
        {
          titulo: 'Segurança e cookies',
          paragrafos: [
            'O site usa conexão segura (HTTPS), não carrega scripts de terceiros e não usa cookies de publicidade ou de análise. Nenhum dado pessoal fica guardado no seu navegador além da sessão de login.',
          ],
        },
        {
          titulo: 'Menores de idade',
          paragrafos: ['Agendamentos para menores de 18 anos devem ser feitos por um responsável.'],
        },
      ]}
    />
  );
}
