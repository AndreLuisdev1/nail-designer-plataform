import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Item} from '@astryxdesign/core/Item';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {List} from '@astryxdesign/core/List';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Exemplo} from '@/components/Exemplo';
import {Faixa} from '@/components/Faixa';
import {FotoExemplo} from '@/components/FotoExemplo';
import {ProximosHorarios} from '@/components/ProximosHorarios';
import {PrecoDuracao} from '@/components/PrecoDuracao';
import {marca} from '@/content/marca';
import {servicos} from '@/content/servicos';
import {trabalhos} from '@/content/portfolio';

const passos = [
  ['Escolha o serviço e um horário livre', 'Você vê a duração e o valor antes de decidir.'],
  ['Informe nome, e-mail e celular', 'Só o necessário para confirmar o horário.'],
  ['Pronto, horário marcado', 'A confirmação aparece na hora, com dia, horário e endereço.'],
] as const;

export default function Inicio() {
  return (
    <>
      <Faixa label="inicio-titulo" compacta>
        <Grid columns={{minWidth: 300, max: 2}} gap={10} align="start">
          <VStack gap={5} className="lg:pt-8">
            <Heading level={1} type="display-1" id="inicio-titulo" textWrap="balance">
              Unhas alongadas, <em className="text-accent">com hora marcada</em>
            </Heading>
            <Text as="p" type="large" color="secondary" textWrap="pretty">
              Atendimento em casa, com a {marca.profissional}. Escolha um horário livre e confirme em poucos
              toques, sem esperar resposta no WhatsApp.
            </Text>
            <HStack gap={3} wrap="wrap">
              <Button label="Ver todos os horários" variant="primary" size="lg" href="/agendar" />
              <Button label="Serviços e valores" variant="secondary" size="lg" href="/servicos" />
            </HStack>
          </VStack>
          <VStack>
            <ProximosHorarios />
          </VStack>
        </Grid>
      </Faixa>

      <Faixa fundo="marca" label="servicos-titulo">
        <HStack gap={3} vAlign="center" wrap="wrap">
          <Heading level={2} id="servicos-titulo">
            Serviços e valores
          </Heading>
          <Exemplo />
        </HStack>
        <Card padding={2}>
          <List hasDividers density="spacious">
            {servicos.slice(0, 4).map((s) => (
              <Item
                key={s.id}
                as="li"
                label={s.nome}
                description={s.descricao}
                descriptionLines={2}
                href={`/agendar?servico=${s.id}`}
                endContent={<PrecoDuracao preco={s.preco} duracaoMin={s.duracaoMin} />}
              />
            ))}
          </List>
        </Card>
        <HStack>
          <Button label="Ver todos os serviços" variant="secondary" size="lg" href="/servicos" />
        </HStack>
      </Faixa>

      <Faixa label="como-titulo">
        <Grid columns={{minWidth: 300, max: 2}} gap={10} align="start">
          <VStack gap={4}>
            <Heading level={2} id="como-titulo">
              Como funciona
            </Heading>
            <VStack as="ol" gap={5}>
              {passos.map(([titulo, texto], i) => (
                <HStack as="li" key={titulo} gap={4} vAlign="start">
                  <Text type="display-3" color="accent" hasTabularNumbers aria-hidden>
                    {i + 1}
                  </Text>
                  <VStack gap={1}>
                    <Text weight="semibold">{titulo}</Text>
                    <Text color="secondary">{texto}</Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </VStack>
          <VStack gap={4}>
            <Heading level={2}>Onde</Heading>
            <Text as="p">
              Atendimento na casa da {marca.profissional}, em {marca.endereco.linha2}. O endereço completo
              está na página de contato.
            </Text>
            <Banner
              status="info"
              title={`Cancelamento até ${marca.prazoCancelamentoHoras} h antes`}
              description="Depois disso, fale direto com a Rachel para combinar."
              collapsible={false}
            />
            <HStack>
              <Button label="Endereço e contato" variant="secondary" href="/contato" />
            </HStack>
          </VStack>
        </Grid>
      </Faixa>

      <Faixa fundo="marca" label="portfolio-titulo">
        <HStack gap={3} vAlign="center" wrap="wrap">
          <Heading level={2} id="portfolio-titulo">
            Trabalhos recentes
          </Heading>
          <Exemplo label="Fotos em breve" />
        </HStack>
        <Grid columns={{minWidth: 160, max: 3}} gap={4}>
          {trabalhos.slice(0, 3).map((t) => (
            <FotoExemplo key={t.id} titulo={t.titulo} />
          ))}
        </Grid>
        <HStack>
          <Button label="Ver portfólio" variant="secondary" size="lg" href="/portfolio" />
        </HStack>
      </Faixa>
    </>
  );
}
