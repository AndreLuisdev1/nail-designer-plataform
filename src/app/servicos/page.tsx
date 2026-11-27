import type {Metadata} from 'next';
import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Item} from '@astryxdesign/core/Item';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {List} from '@astryxdesign/core/List';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Exemplo} from '@/components/Exemplo';
import {Faixa} from '@/components/Faixa';
import {PrecoDuracao} from '@/components/PrecoDuracao';
import {marca} from '@/content/marca';
import {servicos, type Servico} from '@/content/servicos';

export const metadata: Metadata = {
  title: 'Serviços e valores',
  description: 'Alongamento, manutenção, esmaltação em gel e cuidados, com duração e valor de cada serviço.',
};

const categorias: Servico['categoria'][] = ['Alongamento', 'Esmaltação', 'Cuidados'];

export default function Servicos() {
  return (
    <Faixa label="servicos-titulo">
      <VStack gap={4}>
        <HStack gap={3} vAlign="center" wrap="wrap">
          <Heading level={1} id="servicos-titulo">
            Serviços e valores
          </Heading>
          <Exemplo />
        </HStack>
        <Text as="p" type="large" color="secondary" textWrap="pretty">
          Duração e valor de cada atendimento. Escolha um serviço para ver os horários livres.
        </Text>
      </VStack>

      {categorias.map((cat) => (
        <VStack key={cat} gap={3} as="section" aria-labelledby={`cat-${cat}`}>
          <Heading level={2} id={`cat-${cat}`}>
            {cat}
          </Heading>
          <Card padding={2}>
            <List hasDividers density="spacious">
              {servicos
                .filter((s) => s.categoria === cat)
                .map((s) => (
                  <Item
                    key={s.id}
                    as="li"
                    align="start"
                    label={<Text weight="semibold">{s.nome}</Text>}
                    description={
                      <VStack gap={3} hAlign="start" className="pt-1">
                        <Text color="secondary">{s.descricao}</Text>
                        <Button
                          label="Ver horários"
                          variant="secondary"
                          href={`/agendar?servico=${s.id}`}
                          aria-label={`Ver horários para ${s.nome}`}
                        />
                      </VStack>
                    }
                    endContent={<PrecoDuracao preco={s.preco} duracaoMin={s.duracaoMin} />}
                  />
                ))}
            </List>
          </Card>
        </VStack>
      ))}

      <Banner
        status="info"
        title={`Cancelamento e reagendamento até ${marca.prazoCancelamentoHoras} h antes`}
        description="Depois desse prazo, fale direto com a Rachel. Valores e durações podem mudar conforme o comprimento e o desenho escolhidos."
        collapsible={false}
      />
    </Faixa>
  );
}
