import type {Metadata} from 'next';
import {Button} from '@astryxdesign/core/Button';
import {Grid} from '@astryxdesign/core/Grid';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Exemplo} from '@/components/Exemplo';
import {Faixa} from '@/components/Faixa';
import {FotoExemplo} from '@/components/FotoExemplo';
import {marca} from '@/content/marca';

export const metadata: Metadata = {
  title: 'Sobre',
  description: `Conheça a ${marca.profissional} e como é o atendimento.`,
};

// Texto de EXEMPLO: a Rachel vai escrever a própria apresentação. Nada aqui afirma anos de experiência ou cursos.
const perguntas = [
  [
    'Quanto tempo dura o alongamento?',
    'Com manutenção a cada três ou quatro semanas, o alongamento se mantém bonito e firme. O tempo exato depende do seu crescimento e da sua rotina.',
  ],
  [
    'O alongamento estraga a unha natural?',
    'Quando a aplicação e a remoção são bem feitas, a unha natural é preservada. Por isso a remoção também é um serviço, nunca feita no improviso.',
  ],
  [
    'Posso escolher o formato e a cor na hora?',
    'Pode. Se tiver uma referência, traga uma foto. A duração do atendimento pode mudar conforme o desenho.',
  ],
  [
    'E se eu me atrasar?',
    'Avise assim que puder pelo contato da página. Atrasos longos podem exigir remarcar, para não atrasar a próxima cliente.',
  ],
] as const;

export default function Sobre() {
  return (
    <>
      <Faixa label="sobre-titulo">
        <Grid columns={{minWidth: 280, max: 2}} gap={10} align="start">
          <VStack gap={5}>
            <HStack gap={3} vAlign="center" wrap="wrap">
              <Heading level={1} id="sobre-titulo">
                Prazer, eu sou a {marca.profissional}
              </Heading>
              <Exemplo label="Texto de exemplo" />
            </HStack>
            <Text as="p" type="large" textWrap="pretty">
              Atendo em casa, com hora marcada, para que cada cliente tenha o tempo e a atenção que o
              alongamento pede.
            </Text>
            <Text as="p" color="secondary" textWrap="pretty">
              Meu trabalho é deixar a unha do jeito que você imaginou e firme até a próxima manutenção. Gosto
              de ouvir antes de começar: formato, comprimento, cor e a sua rotina mudam o resultado.
            </Text>
            <Text as="p" color="secondary" textWrap="pretty">
              Este texto é um exemplo. A apresentação definitiva vai ser escrita pela {marca.profissional}.
            </Text>
            <HStack gap={3} wrap="wrap">
              <Button label="Agendar horário" variant="primary" size="lg" href="/agendar" />
              <Button label="Ver portfólio" variant="secondary" size="lg" href="/portfolio" />
            </HStack>
          </VStack>
          <FotoExemplo titulo={`Retrato da ${marca.profissional}`} detalhe="Foto em breve" />
        </Grid>
      </Faixa>

      <Faixa fundo="marca" label="perguntas-titulo">
        <HStack gap={3} vAlign="center" wrap="wrap">
          <Heading level={2} id="perguntas-titulo">
            Perguntas frequentes
          </Heading>
          <Exemplo label="Respostas de exemplo" />
        </HStack>
        <Grid columns={{minWidth: 280, max: 2}} gap={8}>
          {perguntas.map(([p, r]) => (
            <VStack key={p} gap={2}>
              <Heading level={3}>{p}</Heading>
              <Text as="p" color="secondary" textWrap="pretty">
                {r}
              </Text>
            </VStack>
          ))}
        </Grid>
      </Faixa>
    </>
  );
}
