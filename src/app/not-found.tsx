import {Button} from '@astryxdesign/core/Button';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Faixa} from '@/components/Faixa';

export default function NaoEncontrada() {
  return (
    <Faixa label="nao-encontrada">
      <VStack gap={4} maxWidth="40rem">
        <Heading level={1} id="nao-encontrada">
          Página não encontrada
        </Heading>
        <Text as="p" color="secondary">
          O endereço pode ter mudado ou estar digitado errado. Que tal ver os horários livres?
        </Text>
        <HStack gap={3} wrap="wrap">
          <Button label="Agendar horário" variant="primary" size="lg" href="/agendar" />
          <Button label="Ir para o início" variant="secondary" size="lg" href="/" />
        </HStack>
      </VStack>
    </Faixa>
  );
}
