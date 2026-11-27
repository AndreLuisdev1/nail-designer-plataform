import type {Metadata} from 'next';
import {Suspense} from 'react';
import {Skeleton} from '@astryxdesign/core/Skeleton';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Exemplo} from '@/components/Exemplo';
import {Faixa} from '@/components/Faixa';
import {Agendamento} from './Agendamento';

export const metadata: Metadata = {
  title: 'Agendar horário',
  description: 'Escolha o serviço, o dia e o horário livre, e confirme.',
};

export default function Agendar() {
  return (
    <Faixa label="agendar-titulo" compacta>
      <VStack gap={3}>
        <HStack gap={3} vAlign="center" wrap="wrap">
          <Heading level={1} id="agendar-titulo">
            Agendar horário
          </Heading>
          <Exemplo label="Demonstração" />
        </HStack>
        <Text as="p" color="secondary" textWrap="pretty">
          Quatro passos curtos. Nesta demonstração, nada é enviado nem guardado.
        </Text>
      </VStack>
      <Suspense fallback={<Skeleton height={420} />}>
        <Agendamento />
      </Suspense>
    </Faixa>
  );
}
