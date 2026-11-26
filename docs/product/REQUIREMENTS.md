# Requisitos — Agenda da Rachel

Contexto em [OVERVIEW.md](OVERVIEW.md). Cada requisito tem um ID para ser referenciado em planos, testes e commits.

---

# REQUISITOS FUNCIONAIS

## Área pública (sem login)

**RF-01 — Página de serviços**
Exibe cada serviço ativo com nome, descrição, duração e valor.
- Aceite: serviço desativado pela Rachel não aparece; alteração de valor aparece sem novo deploy.

**RF-02 — Portfólio**
Galeria de imagens de trabalhos da Rachel.
- Aceite: a Rachel adiciona e remove imagens pelo painel. *(Imagens ainda em tratamento.)*

**RF-03 — Feedbacks públicos**
Exibe os feedbacks publicados (nota, comentário, imagens).
- Aceite: mostra apenas o primeiro nome da cliente; nunca e-mail ou celular.

**RF-04 — Política de privacidade e termos de uso**
Páginas acessíveis a partir de qualquer tela.

## Cliente

**RF-10 — Cadastro**
Cria conta com nome, e-mail, celular e senha.
- Aceite: aceite da política de privacidade e dos termos é obrigatório e registrado com data/hora.
- Aceite: consentimento para receber promoções é opcional, separado e desmarcado por padrão.

**RF-11 — Login e reset de senha**
Login com e-mail e senha; reset de senha por link enviado ao e-mail cadastrado.
- Aceite: o link de reset expira e só pode ser usado uma vez.
- Aceite: a mensagem de "e-mail enviado" é a mesma exista ou não a conta (não revela quem é cliente).

**RF-12 — Agendar**
A cliente escolhe o serviço, depois um horário livre, e confirma.
- Aceite: só aparecem horários em que a duração do serviço cabe inteira na janela disponível.
- Aceite: duas clientes não conseguem confirmar o mesmo horário, mesmo ao mesmo tempo.
- Aceite: cupom válido (RF-24) pode ser aplicado e o valor final é exibido antes de confirmar.

**RF-13 — Meus agendamentos**
Lista os agendamentos futuros e passados da própria cliente, com status.
- Aceite: a cliente nunca vê agendamentos de outra pessoa.

**RF-14 — Solicitar cancelamento ou reagendamento**
A cliente pede cancelamento ou reagendamento (escolhendo um novo horário livre) até o prazo definido pela Rachel (padrão: 48h antes).
- Aceite: fora do prazo o botão fica indisponível, com a orientação de falar diretamente com a Rachel.
- Aceite: o agendamento fica como "aguardando aprovação" até a Rachel decidir; o resultado aparece em "Meus agendamentos".
- Aceite: no reagendamento, o novo horário fica reservado enquanto aguarda aprovação.

**RF-15 — Feedback**
Após um atendimento com status "concluído", a cliente pode enviar um feedback: nota, comentário e até 2 imagens.
- Aceite: um feedback por atendimento.
- Aceite: imagens só em JPG/PNG/WebP, com tamanho máximo definido; metadados (EXIF/GPS) removidos no upload.
- Aceite: a cliente autoriza explicitamente a publicação do feedback e das imagens antes de enviar.

**RF-16 — Meus dados**
A cliente edita nome, e-mail e celular, altera o consentimento de promoções, baixa seus dados e exclui a conta (LGPD, art. 18).
- Aceite: ao excluir a conta, os dados pessoais são apagados ou anonimizados; feedbacks publicados são removidos ou anonimizados.

## Rachel (Admin)

**RF-20 — Janela de horários**
Define dias da semana, faixas de horário, pausas e intervalo entre atendimentos.
- Aceite: alterações não apagam agendamentos já confirmados.

**RF-21 — Bloqueios pontuais**
Bloqueia datas ou faixas específicas (férias, feriados, compromissos).
- Aceite: horários bloqueados deixam de aparecer para as clientes na hora.

**RF-22 — Serviços**
Cria, edita e desativa serviços (nome, descrição, duração, valor) sem mexer em código.

**RF-23 — Agenda**
Visualiza a agenda por dia e por semana; cria agendamento manual (cliente que marcou por fora); altera status: confirmado, concluído, faltou, cancelado.

**RF-24 — Cupons e promoções**
Cria cupons (código digitado pela cliente) e promoções (desconto automático) sem mexer em código.
- Regras configuráveis: desconto em % ou R$, início e fim da validade, serviços em que vale, limite total de usos, limite de usos por cliente.
- Aceite: cupom expirado, esgotado ou fora dos serviços válidos é recusado com mensagem clara.

**RF-25 — Aprovar solicitações**
Aprova ou recusa pedidos de cancelamento e reagendamento.
- Aceite: pedidos pendentes ficam destacados no painel.

**RF-26 — Prazo de cancelamento**
Define o prazo mínimo (em horas) para a cliente solicitar cancelamento ou reagendamento.

**RF-27 — Clientes**
Lista clientes com nome, e-mail, celular e histórico de agendamentos.

**RF-28 — Moderação de feedbacks**
Oculta ou remove feedbacks publicados.

**RF-29 — Portfólio**
Adiciona e remove imagens do portfólio.

**RF-30 — Dashboard**
Métricas por período selecionável:
- Faturamento estimado (soma dos valores dos atendimentos concluídos).
- Número de agendamentos e de clientes (novas e recorrentes).
- Serviços mais agendados.
- Taxa de ocupação da agenda e horários mais ociosos.
- Faltas e cancelamentos.
- Uso de cupons e promoções.

---

# REQUISITOS NÃO FUNCIONAIS

## Segurança e privacidade

**RNF-01** — Apenas a Rachel acessa o painel administrativo, com senha forte e autenticação em dois fatores.

**RNF-02** — Autorização verificada no servidor: cada cliente acessa somente os próprios dados e agendamentos.

**RNF-03** — O celular da cliente é visível apenas para a própria cliente e para a Rachel: nunca em páginas públicas, feedbacks, URLs, logs ou respostas de API destinadas a terceiros.

**RNF-04** — Coleta mínima: apenas nome, e-mail e celular (LGPD, art. 6º, III). Nenhum dado pessoal armazenado no navegador além da sessão.

**RNF-05** — Consentimento de promoções registrado com data/hora e revogável a qualquer momento.

**RNF-06** — Nenhuma chave ou segredo no código; tudo em variáveis de ambiente.

**RNF-07** — Limite de tentativas em login, cadastro e reset de senha.

**RNF-08** — Senhas armazenadas apenas com hash forte (ex.: Argon2 ou bcrypt).

**RNF-09** — HTTPS em todo o site; logs sem dados pessoais.

**RNF-10** — Uploads validados no servidor (tipo real do arquivo, tamanho) e servidos sem os metadados originais.

## Usabilidade

**RNF-20** — Mobile-first: todo o fluxo da cliente funciona bem no celular (a maioria vai chegar pelo link do WhatsApp).

**RNF-21** — Acessibilidade WCAG 2.1 AA.

**RNF-22** — Datas e horários sempre no fuso `America/Sao_Paulo`.

---

# Em aberto

- **Notificações:** canal para avisar a cliente (confirmação, resultado de cancelamento, lembrete) e a Rachel (novo agendamento, pedido pendente). WhatsApp tem custo e burocracia; e-mail é a alternativa.
- **Moderação de feedback:** publicação imediata com possibilidade de ocultar (atual) ou aprovação prévia da Rachel?
- **Retenção de dados:** por quanto tempo manter contas inativas antes de apagar/anonimizar.
- **Desempenho:** metas a definir.
- **Backup do banco:** estratégia a definir.
- **Hospedagem/stack:** será registrada no CLAUDE.md.
