import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/Layout';
import {Link} from '@astryxdesign/core/Link';
import {Text} from '@astryxdesign/core/Text';
import {marca} from '@/data/marca';

const links = [
  {href: '/servicos', label: 'Serviços'},
  {href: '/portfolio', label: 'Portfólio'},
  {href: '/agendar', label: 'Agendar horário'},
  {href: '/sobre', label: 'Sobre'},
  {href: '/contato', label: 'Contato'},
];
const legais = [
  {href: '/privacidade', label: 'Política de privacidade'},
  {href: '/termos', label: 'Termos de uso'},
];

export function SiteFooter() {
  return (
    <VStack as="footer" className="w-full bg-inverted text-on-dark">
      <VStack gap={8} className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <Grid columns={{minWidth: 220, max: 3}} gap={8} align="start">
          <VStack gap={2}>
            <Text as="p" color="inherit" type="large" weight="medium">
              {marca.nome}
            </Text>
            <Text as="p" color="inherit" type="supporting">
              {marca.descricao}
            </Text>
          </VStack>
          <VStack as="nav" aria-label="Rodapé" gap={2}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} color="inherit" hasUnderline>
                {l.label}
              </Link>
            ))}
          </VStack>
          <VStack gap={2}>
            <Link href="/contato" color="inherit" hasUnderline>
              Fale com a {marca.profissional}
            </Link>
            {legais.map((l) => (
              <Link key={l.href} href={l.href} color="inherit" hasUnderline>
                {l.label}
              </Link>
            ))}
          </VStack>
        </Grid>
        <Text as="p" color="inherit" type="supporting">
          Nome e logo provisórios. Serviços, valores, horários e contatos deste site são exemplos: nada do que
          você preenche é enviado ou guardado.
        </Text>
      </VStack>
    </VStack>
  );
}
