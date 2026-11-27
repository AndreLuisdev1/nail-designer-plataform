import {Banner} from '@astryxdesign/core/Banner';
import {VStack} from '@astryxdesign/core/Layout';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Faixa} from '@/components/layout/Faixa';

export type Secao = {titulo: string; paragrafos: string[]};

/** Página de texto legal em rascunho: largura de leitura e aviso de revisão. */
export function TextoLegal({
  titulo,
  secoes,
  atualizado,
}: {
  titulo: string;
  secoes: Secao[];
  atualizado: string;
}) {
  return (
    <Faixa label="legal-titulo">
      <VStack gap={8} maxWidth="40rem">
        <VStack gap={3}>
          <Heading level={1} id="legal-titulo">
            {titulo}
          </Heading>
          <Text as="p" color="secondary">
            Última atualização: {atualizado}
          </Text>
        </VStack>
        <Banner
          status="warning"
          title="Rascunho"
          description="Texto provisório para a demonstração. Precisa ser revisado por um profissional antes de o site receber dados reais."
          collapsible={false}
        />
        {secoes.map((s) => (
          <VStack key={s.titulo} gap={3} as="section">
            <Heading level={2}>{s.titulo}</Heading>
            {s.paragrafos.map((p) => (
              <Text key={p} as="p" textWrap="pretty">
                {p}
              </Text>
            ))}
          </VStack>
        ))}
      </VStack>
    </Faixa>
  );
}
