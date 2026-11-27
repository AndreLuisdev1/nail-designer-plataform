import {VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {formatarDuracao, formatarPreco} from '@/features/agendamento/lib/agenda';

/** Valor e duração sempre juntos e na mesma posição (DESIGN.md: cartão de serviço). */
export function PrecoDuracao({preco, duracaoMin}: {preco: number; duracaoMin: number}) {
  return (
    <VStack gap={0.5} hAlign="end">
      <Text hasTabularNumbers weight="semibold" color="accent">
        {formatarPreco(preco)}
      </Text>
      <Text hasTabularNumbers type="supporting" color="secondary">
        {formatarDuracao(duracaoMin)}
      </Text>
    </VStack>
  );
}
