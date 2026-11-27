import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import simbolo from '../../brand/logo-simbolo.svg';

/** Espaço de foto enquanto as imagens reais do portfólio estão em tratamento. Rotulado como exemplo. */
export function FotoExemplo({titulo, detalhe}: {titulo: string; detalhe?: string}) {
  return (
    <VStack as="figure" gap={3} className="m-0">
      <Card padding={0}>
        <AspectRatio ratio={4 / 5} fit="cover">
          <VStack hAlign="center" vAlign="center" gap={3} className="h-full w-full bg-muted">
            <img src={simbolo.src} alt="" width={40} height={60} className="opacity-60" />
            <Text type="supporting" color="secondary">
              Foto de exemplo
            </Text>
          </VStack>
        </AspectRatio>
      </Card>
      <VStack as="figcaption" gap={0.5}>
        <Text weight="medium">{titulo}</Text>
        {detalhe && (
          <Text type="supporting" color="secondary">
            {detalhe}
          </Text>
        )}
      </VStack>
    </VStack>
  );
}
