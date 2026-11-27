'use client';

import {useEffect, useMemo, useRef, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';
import {Calendar, type ISODateString} from '@astryxdesign/core/Calendar';
import {Card} from '@astryxdesign/core/Card';
import {CheckboxInput} from '@astryxdesign/core/CheckboxInput';
import {Item} from '@astryxdesign/core/Item';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Link} from '@astryxdesign/core/Link';
import {List} from '@astryxdesign/core/List';
import {RadioList, RadioListItem} from '@astryxdesign/core/RadioList';
import {Skeleton} from '@astryxdesign/core/Skeleton';
import {Step, Stepper} from '@astryxdesign/core/Stepper';
import {Heading, Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Exemplo} from '@/components/ui/Exemplo';
import {PrecoDuracao} from '@/components/ui/PrecoDuracao';
import {
  aplicarCupom,
  formatarDataLonga,
  formatarDuracao,
  formatarPreco,
  horariosLivres,
  proximosDias,
  type Agora,
} from '@/features/agendamento/lib/agenda';
import {useAgora} from '@/features/agendamento/lib/useAgora';
import {lerParametros, type Inicial} from '@/features/agendamento/lib/parametros';
import {validarDados, type Dados} from '@/features/agendamento/lib/validacao';
import {cupons, expediente, regras, reservasDeExemplo} from '@/data/agenda-exemplo';
import {marca} from '@/data/marca';
import {buscarServico, servicos} from '@/data/servicos';

const PASSOS = ['Serviço', 'Dia e horário', 'Seus dados', 'Revisão'] as const;

const isoLocal = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function Agendamento() {
  const agora = useAgora();
  const params = useSearchParams();
  if (!agora) return <Skeleton height={420} />;
  return <Fluxo agora={agora} inicial={lerParametros(params, agora)} />;
}

function Fluxo({agora, inicial}: {agora: Agora; inicial: Inicial}) {
  const [passo, setPasso] = useState(inicial.passo);
  const [servicoId, setServicoId] = useState(inicial.servicoId);
  const [data, setData] = useState<string | null>(inicial.data);
  const [hora, setHora] = useState(inicial.hora);
  const [dados, setDados] = useState<Dados>({nome: '', email: '', celular: '', aceite: false});
  const [promo, setPromo] = useState(false);
  const [erros, setErros] = useState<Partial<Record<keyof Dados, string>>>({});
  const [cupomTexto, setCupomTexto] = useState('');
  const [cupom, setCupom] = useState<ReturnType<typeof aplicarCupom> | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [concluido, setConcluido] = useState(false);
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const focada = useRef(`${inicial.passo}-false`);
  const [aviso, setAviso] = useState('');

  const servico = buscarServico(servicoId);
  const dias = useMemo(() => proximosDias(agora.data, regras.diasAbertos, expediente, true), [agora]);
  const reservas = useMemo(() => reservasDeExemplo(dias), [dias]);
  const livres = (d: string, s = servico) =>
    s ? horariosLivres({...regras, data: d, duracaoMin: s.duracaoMin, expediente, reservas, agora}) : [];
  const horasDoDia = data ? livres(data) : [];
  const diasComHorario = useMemo(
    () => new Set(dias.filter((d) => livres(d).length > 0)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dias, servicoId, agora],
  );

  // Leva o foco ao título da etapa quando ela muda, para leitor de tela e teclado.
  // Só foca quando a etapa muda de fato (não ao abrir a página, nem na renderização dupla do modo estrito).
  useEffect(() => {
    const atual = `${passo}-${concluido}`;
    if (focada.current === atual) return;
    focada.current = atual;
    tituloRef.current?.focus();
  }, [passo, concluido]);

  const valorFinal = cupom?.ok ? cupom.valorFinal : (servico?.preco ?? 0);

  function avancar() {
    if (!podeAvancar) {
      setAviso(
        passo === 0 ? 'Escolha um serviço para continuar.' : 'Escolha o dia e o horário para continuar.',
      );
      return;
    }
    setAviso('');
    if (passo === 2) {
      const e = validarDados(dados);
      setErros(e);
      if (Object.keys(e).length) {
        requestAnimationFrame(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
        return;
      }
    }
    setPasso((p) => p + 1);
  }

  async function confirmar() {
    setEnviando(true);
    // Demonstração: nada é enviado nem guardado.
    await new Promise((r) => setTimeout(r, 700));
    setEnviando(false);
    setConcluido(true);
  }

  function recomecar() {
    setConcluido(false);
    setPasso(0);
    setServicoId('');
    setData(null);
    setHora('');
    setDados({nome: '', email: '', celular: '', aceite: false});
    setPromo(false);
    setCupom(null);
    setCupomTexto('');
    setErros({});
  }

  const podeAvancar = (passo === 0 && !!servico) || (passo === 1 && !!data && !!hora) || passo === 2;

  if (concluido && servico && data) {
    const primeiroNome = dados.nome.trim().split(/\s+/)[0];
    return (
      <VStack gap={6}>
        <Heading level={2} ref={tituloRef} tabIndex={-1}>
          Pronto, {primeiroNome}.
        </Heading>
        <Banner
          status="success"
          title={`${servico.nome}: ${formatarDataLonga(data)}, às ${hora}`}
          description={`Endereço: ${marca.endereco.linha1}, ${marca.endereco.linha2}. Avisos por e-mail ou WhatsApp ainda estão em definição.`}
          collapsible={false}
        />
        <Banner
          status="warning"
          title="Isto é uma demonstração"
          description="Nenhum horário foi reservado e nada do que você digitou foi enviado ou guardado."
          collapsible={false}
        />
        <HStack gap={3} wrap="wrap">
          <Button label="Voltar ao início" variant="primary" size="lg" href="/" />
          <Button label="Marcar outro horário" variant="secondary" size="lg" onClick={recomecar} />
        </HStack>
      </VStack>
    );
  }

  return (
    <VStack gap={8}>
      <Stepper activeStep={passo} label="Etapas do agendamento" onStepClick={(i) => i < passo && setPasso(i)}>
        {PASSOS.map((p, i) => (
          <Step key={p} step={i} label={p} />
        ))}
      </Stepper>

      <VStack gap={8} className="lg:grid lg:grid-cols-3 lg:items-start">
        <Card padding={6} elevation="low" className="lg:col-span-2">
          <VStack gap={6}>
            <Heading level={2} ref={tituloRef} tabIndex={-1}>
              {
                ['Qual serviço você quer?', 'Escolha o dia e o horário', 'Seus dados', 'Confira e confirme'][
                  passo
                ]
              }
            </Heading>

            {passo === 0 && (
              <RadioList
                label="Serviço"
                isLabelHidden
                value={servicoId}
                onChange={(v) => {
                  setAviso('');
                  setServicoId(v);
                  setHora('');
                  setCupom(null);
                }}
              >
                {servicos.map((s) => (
                  <RadioListItem
                    key={s.id}
                    value={s.id}
                    align="start"
                    label={s.nome}
                    description={s.descricao}
                    endContent={<PrecoDuracao preco={s.preco} duracaoMin={s.duracaoMin} />}
                  />
                ))}
              </RadioList>
            )}

            {passo === 1 && servico && (
              <VStack gap={6} className="md:grid md:grid-cols-2 md:items-start">
                <VStack gap={2}>
                  <Text weight="medium">Dia</Text>
                  <Calendar
                    value={data as ISODateString | null}
                    onChange={(v: string | null) => {
                      setData(v);
                      setHora('');
                    }}
                    min={dias[0] as ISODateString}
                    max={dias[dias.length - 1] as ISODateString}
                    hasOutsideDays={false}
                    hasVariableRowCount
                    dateConstraints={[(d: Date) => diasComHorario.has(isoLocal(d))]}
                  />
                  <Text type="supporting" color="secondary">
                    Dias sem horário livre para {servico.nome.toLowerCase()} ficam desativados.
                  </Text>
                </VStack>
                <VStack gap={2}>
                  {!data && <Text color="secondary">Escolha um dia para ver os horários.</Text>}
                  {data && (
                    <RadioList
                      label={`Horários livres em ${formatarDataLonga(data)}`}
                      value={hora}
                      onChange={(v) => (setAviso(''), setHora(v))}
                      orientation="horizontal"
                    >
                      {horasDoDia.map((h) => (
                        <RadioListItem key={h} value={h} label={h} />
                      ))}
                    </RadioList>
                  )}
                  {data && <Exemplo label="Horários de exemplo" />}
                </VStack>
              </VStack>
            )}

            {passo === 2 && (
              <form noValidate onSubmit={(e) => (e.preventDefault(), avancar())}>
                <VStack gap={5}>
                  <Text as="p" color="secondary">
                    Usamos seus dados só para confirmar e lembrar o horário. Veja a{' '}
                    <Link href="/privacidade" hasUnderline>
                      política de privacidade
                    </Link>
                    .
                  </Text>
                  <TextInput
                    label="Nome"
                    isRequired
                    size="lg"
                    value={dados.nome}
                    onChange={(v) => setDados({...dados, nome: v.slice(0, 80)})}
                    autoComplete="name"
                    autoCapitalize="words"
                    status={erros.nome ? {type: 'error', message: erros.nome} : undefined}
                  />
                  <TextInput
                    label="E-mail"
                    type="email"
                    isRequired
                    size="lg"
                    value={dados.email}
                    onChange={(v) => setDados({...dados, email: v.slice(0, 254)})}
                    autoComplete="email"
                    inputMode="email"
                    autoCapitalize="off"
                    status={erros.email ? {type: 'error', message: erros.email} : undefined}
                  />
                  <TextInput
                    label="Celular com DDD"
                    type="tel"
                    isRequired
                    size="lg"
                    description="Só para avisos sobre o seu horário."
                    value={dados.celular}
                    onChange={(v) => setDados({...dados, celular: v.slice(0, 20)})}
                    autoComplete="tel-national"
                    inputMode="tel"
                    status={erros.celular ? {type: 'error', message: erros.celular} : undefined}
                  />
                  <VStack gap={2}>
                    <HStack gap={2} vAlign="end" wrap="wrap">
                      <TextInput
                        label="Cupom"
                        isOptional
                        size="lg"
                        value={cupomTexto}
                        onChange={(v) => {
                          setCupomTexto(v.slice(0, 30));
                          setCupom(null);
                        }}
                        autoCapitalize="characters"
                        width={220}
                      />
                      <Button
                        label="Aplicar"
                        size="lg"
                        isDisabled={!cupomTexto.trim() || !servico}
                        onClick={() =>
                          servico &&
                          setCupom(
                            aplicarCupom({
                              codigo: cupomTexto,
                              servicoId: servico.id,
                              preco: servico.preco,
                              cupons,
                              hoje: agora.data,
                            }),
                          )
                        }
                      />
                    </HStack>
                    {cupom && (
                      <Text role="status" color={cupom.ok ? 'accent' : 'primary'} weight="medium">
                        {cupom.mensagem}
                      </Text>
                    )}
                    <Text type="supporting" color="secondary">
                      Cupom de exemplo para testar: BEMVINDA10.
                    </Text>
                  </VStack>
                  <CheckboxInput
                    label="Li e aceito os termos de uso e estou ciente da política de privacidade."
                    isRequired
                    value={dados.aceite}
                    onChange={(v) => setDados({...dados, aceite: v})}
                    status={erros.aceite ? {type: 'error', message: erros.aceite} : undefined}
                  />
                  <CheckboxInput
                    label="Quero receber promoções por e-mail."
                    description="Opcional. Você pode sair quando quiser."
                    isOptional
                    value={promo}
                    onChange={setPromo}
                  />
                </VStack>
              </form>
            )}

            {passo === 3 && servico && data && (
              <VStack gap={5}>
                <Resumo
                  servico={servico.nome}
                  data={data}
                  hora={hora}
                  duracaoMin={servico.duracaoMin}
                  preco={servico.preco}
                  valorFinal={valorFinal}
                />
                <Banner
                  status="info"
                  title={`Cancelamento e reagendamento até ${marca.prazoCancelamentoHoras} h antes`}
                  description="Depois desse prazo, fale direto com a Rachel."
                  collapsible={false}
                />
              </VStack>
            )}

            {aviso && (
              <Text role="alert" weight="medium">
                {aviso}
              </Text>
            )}
            {
              <HStack gap={3} wrap="wrap" className="flex-row-reverse justify-end">
                {passo < 3 ? (
                  <Button label="Continuar" variant="primary" size="lg" onClick={avancar} />
                ) : (
                  <Button
                    label="Confirmar agendamento"
                    variant="primary"
                    size="lg"
                    isLoading={enviando}
                    clickAction={confirmar}
                  />
                )}
                {passo > 0 && (
                  <Button label="Voltar" variant="secondary" size="lg" onClick={() => setPasso(passo - 1)} />
                )}
              </HStack>
            }
          </VStack>
        </Card>

        {servico && passo > 0 && passo < 3 && (
          <Card padding={6} variant="muted" className="hidden lg:block">
            <VStack gap={3}>
              <Heading level={2}>Resumo</Heading>
              <Resumo
                servico={servico.nome}
                data={data}
                hora={hora}
                duracaoMin={servico.duracaoMin}
                preco={servico.preco}
                valorFinal={valorFinal}
              />
            </VStack>
          </Card>
        )}
      </VStack>
    </VStack>
  );
}

function Resumo(p: {
  servico: string;
  data: string | null;
  hora: string;
  duracaoMin: number;
  preco: number;
  valorFinal: number;
}) {
  const linhas: [string, string][] = [
    ['Serviço', p.servico],
    ['Dia', p.data ? formatarDataLonga(p.data) : 'A escolher'],
    ['Horário', p.hora || 'A escolher'],
    ['Duração', formatarDuracao(p.duracaoMin)],
    [
      'Valor',
      p.valorFinal === p.preco
        ? formatarPreco(p.preco)
        : `${formatarPreco(p.valorFinal)} (era ${formatarPreco(p.preco)})`,
    ],
  ];
  return (
    <List hasDividers density="compact" edge="flush">
      {linhas.map(([k, v]) => (
        <Item
          key={k}
          as="li"
          layout="inline"
          label={<Text color="secondary">{k}</Text>}
          endContent={
            <Text weight="semibold" hasTabularNumbers>
              {v}
            </Text>
          }
        />
      ))}
    </List>
  );
}
