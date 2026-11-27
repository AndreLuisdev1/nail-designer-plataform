'use client';

import {useMemo, useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Link} from '@astryxdesign/core/Link';
import {RadioList, RadioListItem} from '@astryxdesign/core/RadioList';
import {Skeleton} from '@astryxdesign/core/Skeleton';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Exemplo} from '@/components/ui/Exemplo';
import {useAgora} from '@/features/agendamento/lib/useAgora';
import {
  formatarData,
  formatarDuracao,
  formatarPreco,
  horariosLivres,
  proximosDias,
} from '@/features/agendamento/lib/agenda';
import {expediente, regras, reservasDeExemplo} from '@/data/agenda-exemplo';
import {buscarServico, servicoPrincipal, servicos} from '@/data/servicos';

const POR_DIA = 4;

/** Os próximos dias com horários livres: tocar num horário já começa o agendamento. */
export function ProximosHorarios() {
  const [servicoId, setServicoId] = useState(servicoPrincipal.id);
  // A data depende do relógio de quem visita, então só é calculada no navegador.
  const agora = useAgora();

  const servico = buscarServico(servicoId) ?? servicoPrincipal;
  const dias = useMemo(() => {
    if (!agora) return [];
    const datas = proximosDias(agora.data, 12, expediente, true);
    const reservas = reservasDeExemplo(datas);
    return datas
      .map((data) => ({
        data,
        horas: horariosLivres({...regras, data, duracaoMin: servico.duracaoMin, expediente, reservas, agora}),
      }))
      .filter((d) => d.horas.length > 0)
      .slice(0, 4);
  }, [agora, servico.duracaoMin]);

  return (
    <Card padding={6} elevation="low">
      <VStack gap={5}>
        <VStack gap={2}>
          <HStack gap={2} vAlign="center" wrap="wrap">
            <Heading level={2} id="horarios-titulo">
              Horários livres
            </Heading>
            <Exemplo />
          </HStack>
          <RadioList label="Serviço" value={servicoId} onChange={setServicoId} orientation="horizontal">
            {servicos.slice(0, 3).map((s) => (
              <RadioListItem key={s.id} value={s.id} label={s.nomeCurto} aria-label={s.nome} />
            ))}
          </RadioList>
          <Text as="p" color="secondary" hasTabularNumbers>
            {formatarDuracao(servico.duracaoMin)} · {formatarPreco(servico.preco)}
          </Text>
        </VStack>

        <Grid columns={{minWidth: 150}} gap={5} aria-live="polite">
          {!agora && Array.from({length: 4}, (_, i) => <Skeleton key={i} height={96} />)}
          {dias.map(({data, horas}) => (
            <VStack key={data} gap={2} as="section" aria-label={formatarData(data)}>
              <Text as="h3" weight="semibold" hasTabularNumbers>
                {formatarData(data)}
              </Text>
              <HStack gap={2} wrap="wrap">
                {horas.slice(0, POR_DIA).map((h) => (
                  <Button
                    key={h}
                    label={h}
                    variant="secondary"
                    size="lg"
                    href={`/agendar?servico=${servico.id}&data=${data}&hora=${h}`}
                    aria-label={`Agendar ${servico.nome} em ${formatarData(data)}, às ${h}`}
                  />
                ))}
                {horas.length > POR_DIA && (
                  <Link href={`/agendar?servico=${servico.id}&data=${data}`} type="supporting" hasUnderline>
                    mais {horas.length - POR_DIA}
                  </Link>
                )}
              </HStack>
            </VStack>
          ))}
        </Grid>
      </VStack>
    </Card>
  );
}
