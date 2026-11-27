import type {Metadata} from 'next';
import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';
import {Grid} from '@astryxdesign/core/Grid';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Faixa} from '@/components/layout/Faixa';
import {FotoExemplo} from '@/components/ui/FotoExemplo';
import {trabalhos} from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Trabalhos de alongamento, esmaltação em gel e nail art.',
};

export default function Portfolio() {
  return (
    <Faixa label="portfolio-titulo">
      <VStack gap={4}>
        <Heading level={1} id="portfolio-titulo">
          Portfólio
        </Heading>
        <Text as="p" type="large" color="secondary" textWrap="pretty">
          Alongamentos, esmaltações e nail art feitos pela Rachel.
        </Text>
      </VStack>
      <Banner
        status="warning"
        title="Fotos em tratamento"
        description="Enquanto as fotos reais não chegam, os espaços abaixo mostram como a galeria vai ficar. Títulos e categorias são exemplos."
        collapsible={false}
      />
      <Grid columns={{minWidth: 160, max: 3}} gap={6}>
        {trabalhos.map((t) => (
          <FotoExemplo
            key={t.id}
            titulo={t.titulo}
            detalhe={[t.categoria, t.formato].filter(Boolean).join(' · ')}
          />
        ))}
      </Grid>
      <HStack gap={3} wrap="wrap">
        <Button label="Agendar horário" variant="primary" size="lg" href="/agendar" />
        <Button label="Serviços e valores" variant="secondary" size="lg" href="/servicos" />
      </HStack>
    </Faixa>
  );
}
