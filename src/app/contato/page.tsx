import type {Metadata} from 'next';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Item} from '@astryxdesign/core/Item';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {List} from '@astryxdesign/core/List';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Exemplo} from '@/components/Exemplo';
import {Faixa} from '@/components/Faixa';
import {marca} from '@/content/marca';
import {expediente} from '@/content/agenda-exemplo';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Endereço, horários de atendimento e como falar com a Rachel.',
};

const nomesDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const horarios = nomesDias.map((nome, i) => ({
  nome,
  faixas: (expediente[i] ?? []).map((j) => `${j.inicio} às ${j.fim}`).join(' e ') || 'Fechado',
}));

export default function Contato() {
  const {endereco} = marca;
  return (
    <Faixa label="contato-titulo">
      <VStack gap={4}>
        <HStack gap={3} vAlign="center" wrap="wrap">
          <Heading level={1} id="contato-titulo">
            Contato
          </Heading>
          <Exemplo label="Dados de exemplo" />
        </HStack>
        <Text as="p" type="large" color="secondary" textWrap="pretty">
          Para marcar, o jeito mais rápido é o agendamento online. Para dúvidas, fale com a{' '}
          {marca.profissional}.
        </Text>
      </VStack>

      <Grid columns={{minWidth: 280, max: 2}} gap={6} align="start">
        <Card padding={6}>
          <VStack gap={4}>
            <Heading level={2}>Endereço</Heading>
            <VStack as="address" gap={2} className="not-italic">
              <Text as="p">
                {endereco.linha1}
                <br />
                {endereco.linha2}
                <br />
                CEP {endereco.cep}
              </Text>
              <Text as="p" color="secondary" type="supporting">
                {endereco.referencia} Atendimento só com hora marcada.
              </Text>
            </VStack>
            <Heading level={2}>Fale com a {marca.profissional}</Heading>
            <List density="compact" edge="flush">
              <Item
                as="li"
                layout="inline"
                label="WhatsApp"
                endContent={<Text color="secondary">número a definir</Text>}
              />
              <Item
                as="li"
                layout="inline"
                label="Instagram"
                endContent={<Text>{marca.instagram.usuario}</Text>}
              />
              <Item as="li" layout="inline" label="E-mail" endContent={<Text>{marca.email.endereco}</Text>} />
            </List>
          </VStack>
        </Card>

        <Card padding={6}>
          <VStack gap={4}>
            <Heading level={2}>Horários de atendimento</Heading>
            <List hasDividers density="compact" edge="flush">
              {horarios.map((h) => (
                <Item
                  key={h.nome}
                  as="li"
                  layout="inline"
                  label={h.nome}
                  endContent={
                    <Text hasTabularNumbers color={h.faixas === 'Fechado' ? 'secondary' : 'primary'}>
                      {h.faixas}
                    </Text>
                  }
                />
              ))}
            </List>
            <HStack>
              <Button label="Ver horários livres" variant="primary" size="lg" href="/agendar" />
            </HStack>
          </VStack>
        </Card>
      </Grid>
    </Faixa>
  );
}
