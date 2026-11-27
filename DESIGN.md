# Design system: Agenda da Rachel

Versão 0.2 (Etapas 1 e 2). Fonte única dos valores: [tokens.json](tokens.json). [tokens.css](tokens.css) é gerado a partir dele; não edite o CSS à mão.

```bash
node .claude/skills/design-system/scripts/generate-tokens.cjs --config tokens.json -o tokens.css
node scripts/check-contrast.mjs        # falha se algum par ficar abaixo do WCAG 2.2 AA
```

Contexto do produto em [PRODUCT.md](PRODUCT.md) e [docs/product/](docs/product/).

---

## 1. Direção

**O padrão do setor, feito com capricho.** Rosé e nude, serifa de moda para títulos, sans geométrica para o resto, muito respiro, cantos suaves. A escolha foi consciente, numa rodada de direções em que a convenção ganhou de alternativas mais ousadas. A régua de acabamento é a de estúdios de beleza premium brasileiros.

Cena física: a cliente abre o link no celular, de dia, muitas vezes no transporte ou no trabalho, com uma mão só. Por isso o fundo é claro, o texto tem alto contraste, os alvos de toque são grandes e a ação principal fica ao alcance do polegar.

Estratégia de cor: **contida**. Neutros nude quentes como base e um acento rosé, que faz trabalho real: ação principal, link, item ativo e foco. O rosé claro (`--color-background-brand`) aparece em faixas inteiras de seção, nunca salpicado.

A interface não compete com o trabalho da Rachel: quando houver fotos reais, elas são a cor mais forte da página.

---

## 2. Tom de voz

### Três atributos

| Atributo | O que significa | Como aparece |
|---|---|---|
| **Acolhedora** | Fala como a Rachel fala com a cliente: "você", frase curta, sem formalidade de empresa. | "Que bom te ver por aqui." / "Seu horário está marcado." |
| **Clara** | Preço, duração, horário e regra aparecem antes de a cliente precisar perguntar. | "Alongamento em gel · 2 h 30 · R$ 180" |
| **Cuidadosa** | Cuida da mão e dos dados da cliente. Explica o porquê quando pede algo. | "Usamos seu celular só para confirmar o horário." |

### O que a marca diz e o que não diz

| Diz | Não diz |
|---|---|
| Verbos de ação: "Agende", "Escolha", "Confirme" | Superlativos: "a melhor", "perfeitas", "incrível" |
| Preço e duração sempre juntos, em algarismos | "A partir de um precinho especial", preço escondido |
| A regra e a saída: "Até 48 h antes. Depois, fale com a Rachel." | Proibição seca: "Não é permitido cancelar." |
| O primeiro nome da cliente | "Querida", "amiga", "linda" |
| O que aconteceu e o que fazer agora | "Ops!", "Algo deu errado :(" |
| Termos do serviço com explicação curta: "blindagem (camada que protege a unha natural)" | Jargão solto, inglês desnecessário ("nail care experience") |
| Fatos verificáveis | Urgência falsa ("Últimas vagas!"), garantias ("dura 30 dias garantido") |

### Exemplos de frase certa e errada

| Situação | Certa | Errada |
|---|---|---|
| Chamada principal | Escolha o serviço e veja os horários livres. | Clique aqui e agende seu momento mágico de autocuidado! |
| Serviço | Manutenção do alongamento · 1 h 30 · R$ 120 | Manutenção top com preço imperdível |
| Horário tomado | Esse horário acabou de ser reservado. Escolha outro abaixo. | Ops! Erro ao agendar. |
| Erro de campo | Digite o celular com DDD, por exemplo 11 91234-5678. | Campo inválido. |
| Cancelamento fora do prazo | O prazo para cancelar pelo site terminou (48 h antes). Fale com a Rachel pelo WhatsApp. | Cancelamento bloqueado. |
| Confirmação | Pronto, Ana. Quinta, 28/11, às 14:00. Você recebe um lembrete por e-mail. | Agendamento realizado com sucesso!!! |
| Consentimento | Quero receber promoções por e-mail (opcional, você pode sair quando quiser). | Aceito receber novidades incríveis. |

Regras de escrita: português do Brasil; data `qui, 28/11`; hora `14:00` (24 h); duração `1 h 30`; moeda `R$ 180` ou `R$ 180,00` em valores com centavos; sem caixa alta em frases inteiras; sem ponto de exclamação em mensagens de sistema.

---

## 3. Identidade

### Nome

- **Nome do estúdio: provisório.** Enquanto não sair o oficial, usar **"Estúdio Rachel"** com o rótulo "nome provisório" nos artefatos de marca. "Agenda da Rachel" é o nome do projeto e da área de agendamento.
- O nome aparece só em um lugar no código: um arquivo de constantes de marca (Etapa 3), para que a troca seja de uma linha.

### Símbolo (provisório, desenhado na Etapa 2)

Um **R** em Bodoni Moda dentro do contorno de uma **unha amendoada**, o formato clássico de alongamento, que é o carro-chefe. Linha fina, sem preenchimento. Arquivos em [brand/](brand/README.md), todos marcados como provisórios: `logo-principal.svg` (símbolo sobre o nome), `logo-horizontal.svg`, `logo-simbolo.svg` e `logo-mono.svg`. Texto convertido em contorno, sem script e sem referência externa. Tamanhos mínimos: símbolo com 32 px de altura, horizontal com 160 px de largura, principal com 140 px. Guia visual: [brand/demo.html](brand/demo.html).

### Cores em três níveis

**Primitivas**, valores brutos, nunca usados direto em componente:

| Família | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| `rose` (rosé) | `#FBF4F2` | `#F5E6E2` | `#EBCDC6` | `#DCAEA5` | `#C98B87` | `#B06C6B` | `#935356` | `#784147` | `#5C3237` | `#3E2226` |
| `nude` (neutro quente) | `#FAF7F5` | `#F3EDE9` | `#E6DCD5` | `#D2C3B9` | `#B09D91` | `#8C796E` | `#6B5A51` | `#52443D` | `#3A2E29` | `#241B18` |

Status: `green` 50/600/700, `amber` 50/600/700, `red` 50/600/700, `blue` 50/600/700. Também `white`.

**Semânticas**, com nomes do Astryx, para alimentar `defineTheme` 1:1:

| Token | Primitiva | Uso |
|---|---|---|
| `--color-background-body` | nude-50 | Fundo da página |
| `--color-background-surface` / `-card` / `-popover` | white | Cartões, campos, menus |
| `--color-background-muted` | nude-100 | Faixas neutras, células desativadas |
| `--color-background-brand` | rose-100 | Faixas de seção de marca |
| `--color-background-inverted` | nude-900 | Rodapé |
| `--color-text-primary` | nude-900 | Texto principal |
| `--color-text-secondary` | nude-600 | Texto de apoio, metadados |
| `--color-text-accent` | rose-700 | Texto de destaque, preço em evidência |
| `--color-text-disabled` | nude-400 | Somente texto desativado (isento de contraste pela WCAG) |
| `--color-accent` / `--color-on-accent` | rose-600 / white | Ação principal |
| `--color-border` | nude-200 | Divisórias e borda de cartão (decorativa) |
| `--color-border-emphasized` | nude-500 | Borda de campo e de controle (3:1) |
| `--color-{success,warning,error,info}` | *-600 | Preenchimento de status |
| `--color-{status}-muted` + `--color-on-{status}-muted` | *-50 + *-700 | Alertas suaves |
| `--color-overlay` | nude-900 a 50% | Fundo de diálogo |

**De componente**: `--button-*`, `--input-*`, `--link-*`, `--card-*`, `--nav-*`, `--alert-*`, `--sample-label-*`. Ver a seção 4.

A cor nunca carrega informação sozinha. Status leva ícone e texto; link leva sublinhado; erro leva mensagem escrita.

### Contraste WCAG 2.2 AA

Todos os pares abaixo saem de `node scripts/check-contrast.mjs --md`, calculados a partir do tokens.json. Mínimos: 4,5:1 para texto (1.4.3) e 3:1 para bordas de controle, indicadores e foco (1.4.11). Aplicamos 4,5:1 a todo texto, inclusive aos títulos grandes, em que a WCAG aceitaria 3:1.

<!-- CONTRASTE:INICIO -->
| Par | Cores | Razão | Mínimo | Resultado |
|---|---|---|---|---|
| Texto principal / fundo da página | `#241B18` / `#FAF7F5` | 15.81:1 | 4.5:1 | passa |
| Texto principal / superfície | `#241B18` / `#FFFFFF` | 16.87:1 | 4.5:1 | passa |
| Texto principal / fundo suave | `#241B18` / `#F3EDE9` | 14.54:1 | 4.5:1 | passa |
| Texto principal / fundo da marca | `#241B18` / `#F5E6E2` | 13.90:1 | 4.5:1 | passa |
| Texto secundário / fundo da página | `#6B5A51` / `#FAF7F5` | 6.14:1 | 4.5:1 | passa |
| Texto secundário / superfície | `#6B5A51` / `#FFFFFF` | 6.55:1 | 4.5:1 | passa |
| Texto secundário / fundo suave | `#6B5A51` / `#F3EDE9` | 5.65:1 | 4.5:1 | passa |
| Texto de destaque / fundo da página | `#784147` / `#FAF7F5` | 7.44:1 | 4.5:1 | passa |
| Texto de destaque / superfície | `#784147` / `#FFFFFF` | 7.94:1 | 4.5:1 | passa |
| Texto de destaque / fundo da marca | `#784147` / `#F5E6E2` | 6.54:1 | 4.5:1 | passa |
| Texto invertido / fundo invertido | `#FAF7F5` / `#241B18` | 15.81:1 | 4.5:1 | passa |
| Botão primário: texto / fundo | `#FFFFFF` / `#935356` | 5.81:1 | 4.5:1 | passa |
| Botão primário: texto / hover | `#FFFFFF` / `#784147` | 7.94:1 | 4.5:1 | passa |
| Botão primário: texto / pressionado | `#FFFFFF` / `#5C3237` | 10.68:1 | 4.5:1 | passa |
| Botão secundário: texto / fundo | `#784147` / `#FFFFFF` | 7.94:1 | 4.5:1 | passa |
| Botão secundário: texto / hover | `#784147` / `#FBF4F2` | 7.30:1 | 4.5:1 | passa |
| Botão secundário: borda / página | `#935356` / `#FAF7F5` | 5.45:1 | 3:1 | passa |
| Botão primário: fundo / página | `#935356` / `#FAF7F5` | 5.45:1 | 3:1 | passa |
| Campo: texto / fundo | `#241B18` / `#FFFFFF` | 16.87:1 | 4.5:1 | passa |
| Campo: placeholder / fundo | `#6B5A51` / `#FFFFFF` | 6.55:1 | 4.5:1 | passa |
| Campo: rótulo / página | `#3A2E29` / `#FAF7F5` | 12.28:1 | 4.5:1 | passa |
| Campo: dica / página | `#6B5A51` / `#FAF7F5` | 6.14:1 | 4.5:1 | passa |
| Campo: erro / página | `#8A1F18` / `#FAF7F5` | 8.60:1 | 4.5:1 | passa |
| Campo: borda / fundo do campo | `#8C796E` / `#FFFFFF` | 4.14:1 | 3:1 | passa |
| Campo: borda / página | `#8C796E` / `#FAF7F5` | 3.88:1 | 3:1 | passa |
| Campo: borda de foco / fundo | `#784147` / `#FFFFFF` | 7.94:1 | 3:1 | passa |
| Campo: borda de erro / fundo | `#B0281F` / `#FFFFFF` | 6.63:1 | 3:1 | passa |
| Link / página | `#784147` / `#FAF7F5` | 7.44:1 | 4.5:1 | passa |
| Link / superfície | `#784147` / `#FFFFFF` | 7.94:1 | 4.5:1 | passa |
| Link hover / página | `#5C3237` / `#FAF7F5` | 10.01:1 | 4.5:1 | passa |
| Navegação: texto / fundo | `#3A2E29` / `#FAF7F5` | 12.28:1 | 4.5:1 | passa |
| Navegação: ativo / fundo | `#784147` / `#FAF7F5` | 7.44:1 | 4.5:1 | passa |
| Navegação: indicador / fundo | `#935356` / `#FAF7F5` | 5.45:1 | 3:1 | passa |
| Alerta sucesso: texto / fundo | `#235236` / `#EDF5EF` | 8.11:1 | 4.5:1 | passa |
| Alerta aviso: texto / fundo | `#6B4600` / `#FCF4E3` | 7.67:1 | 4.5:1 | passa |
| Alerta erro: texto / fundo | `#8A1F18` / `#FBECEB` | 7.99:1 | 4.5:1 | passa |
| Alerta info: texto / fundo | `#21466F` / `#ECF2F9` | 8.59:1 | 4.5:1 | passa |
| Alerta sucesso: borda / fundo | `#2E6A44` / `#EDF5EF` | 5.80:1 | 3:1 | passa |
| Alerta aviso: borda / fundo | `#8A5B00` / `#FCF4E3` | 5.36:1 | 3:1 | passa |
| Alerta erro: borda / fundo | `#B0281F` / `#FBECEB` | 5.77:1 | 3:1 | passa |
| Alerta info: borda / fundo | `#2B5A8E` / `#ECF2F9` | 6.30:1 | 3:1 | passa |
| Status cheio: texto / sucesso | `#FFFFFF` / `#2E6A44` | 6.44:1 | 4.5:1 | passa |
| Status cheio: texto / aviso | `#FFFFFF` / `#8A5B00` | 5.87:1 | 4.5:1 | passa |
| Status cheio: texto / erro | `#FFFFFF` / `#B0281F` | 6.63:1 | 4.5:1 | passa |
| Status cheio: texto / info | `#FFFFFF` / `#2B5A8E` | 7.10:1 | 4.5:1 | passa |
| Rótulo "exemplo": texto / fundo | `#6B4600` / `#FCF4E3` | 7.67:1 | 4.5:1 | passa |
| Foco / página | `#5C3237` / `#FAF7F5` | 10.01:1 | 3:1 | passa |
| Foco / superfície | `#5C3237` / `#FFFFFF` | 10.68:1 | 3:1 | passa |
| Foco / fundo da marca | `#5C3237` / `#F5E6E2` | 8.80:1 | 3:1 | passa |
<!-- CONTRASTE:FIM -->

Proibido: rosé 400 ou mais claro como cor de texto; texto branco sobre rose-500 ou mais claro (rose-500 com branco dá 3,9:1 e falha). Texto sobre foto sempre com véu `--color-overlay` ou sobre um cartão sólido.

### Tipografia

| Papel | Família | Por quê |
|---|---|---|
| Títulos e display (`--font-family-heading`) | **Bodoni Moda** (variável, eixos `opsz` 6–96 e `wght` 400–900, itálico) | A didone de revista de moda é a voz do padrão de beleza; o eixo de tamanho óptico mantém as hastes finas legíveis nos títulos pequenos, o que uma Didot comum não faz. |
| Texto, interface, números (`--font-family-body`) | **Jost** (variável, `wght` 100–900, itálico) | Geométrica no espírito da Futura, comum em marcas de beleza, mas com aberturas largas o bastante para ler preço e horário no celular. |

Ambas têm licença SIL Open Font License 1.1 e acentuação completa do português.

**Fontes auto-hospedadas.** Arquivos `.woff2` em `brand/fonts/` (Bodoni Moda normal e itálico e Jost normal, 126 KB no total), com subconjunto latin, que já cobre toda a acentuação do português, `font-display: swap`, servidos do mesmo domínio. Nenhuma requisição a Google Fonts ou a qualquer CDN em tempo de execução. Pré-carregar só dois arquivos: Jost regular e Bodoni Moda regular. Fallbacks com métricas próximas (Georgia, Segoe UI e system-ui) para reduzir o salto de layout.

**Escala** (terça maior, razão 1,25, base 16 px):

| Token | Tamanho | Família | Peso | Entrelinha | Uso |
|---|---|---|---|---|---|
| `--text-display-1-*` | clamp 39–61 px | Bodoni Moda | 400 | 1,15 | Título da página inicial |
| `--text-heading-1-*` | 31 px | Bodoni Moda | 500 | 1,15 | Título de página |
| `--text-heading-2-*` | 25 px | Bodoni Moda | 500 | 1,3 | Seção |
| `--text-heading-3-*` | 20 px | Bodoni Moda | 500 | 1,3 | Subseção, nome do serviço |
| `--text-heading-4-*` | 18 px | Bodoni Moda | 600 | 1,3 | Título de cartão |
| `--text-large-*` | 18 px | Jost | 400 | 1,55 | Texto de abertura |
| `--text-body-*` | 16 px | Jost | 400 | 1,55 | Texto corrido, campos |
| `--text-label-*` | 14 px | Jost | 500 | 1,3 | Rótulos, botões pequenos |
| `--text-supporting-*` | 14 px | Jost | 400 | 1,55 | Dicas, metadados |

Regras: o texto nunca fica abaixo de 14 px, e os campos sempre usam 16 px (o iOS não dá zoom). Preço, duração e horário usam algarismos tabulares (`font-variant-numeric: tabular-nums`). Linha de leitura com no máximo `--layout-reading-width` (40rem, uns 70 caracteres). Itálico do Bodoni só para uma palavra de ênfase por título, nunca em parágrafo.

### Espaçamento

Base de 4 px, com nomes iguais aos do Astryx: `--spacing-0` a `--spacing-12`, mais `0-5` e `1-5`. Layout:

| Token | Valor | Uso |
|---|---|---|
| `--layout-gutter` | 16 px | **Margem lateral no celular.** Obrigatória em toda página |
| `--layout-gutter-md` | 24 px | Margem lateral a partir de 768 px |
| `--layout-section` / `-lg` | 64 / 96 px | Espaço entre seções (celular / desktop) |
| `--layout-max-width` | 72rem | Largura máxima do conteúdo |

Ritmo: mais espaço acima de um título do que abaixo dele. Componentes do Astryx recebem passos de espaçamento como props (`gap={4}`), não valores em px.

### Raios

`--radius-inner` 6 px (selos, chips) · `--radius-element` 12 px (campos) · `--radius-container` 20 px (cartões) · `--radius-page` 32 px (faixas e imagens grandes) · `--radius-full` (botões em pílula, avatares).

### Sombras

Tingidas com o nude-800, nunca preto puro: `--shadow-low` (cartão em repouso), `--shadow-med` (cartão em hover, menu), `--shadow-high` (diálogo, folha inferior). Sombra serve para elevação, não para decorar.

### Movimento

| Token | Valor | Uso |
|---|---|---|
| `--duration-fast` | 150 ms | Hover, pressionar, troca de cor |
| `--duration-medium` | 250 ms | Abrir e fechar menu, folha, alerta |
| `--duration-slow` | 400 ms | Transição de etapa no agendamento |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Entrada e movimento |
| `--ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Saída |

Com `prefers-reduced-motion: reduce`, nada se desloca: só troca de opacidade, de até 150 ms. Animar apenas `transform` e `opacity`. Sem animação em loop, sem parallax. Animação nova só quando pedida (skill `frontend-ui-animator`).

---

## 4. Componentes

Todos vêm do `@astryxdesign/core`. Antes de usar qualquer prop, consultar `npx @astryxdesign/cli component <Nome>`. A tabela diz qual componente usar; os valores vêm dos tokens via tema, nunca de classes Tailwind sobre o componente.

| Peça | Componente Astryx | Tokens |
|---|---|---|
| Botão | `Button`, `IconButton` (só com rótulo acessível) | `--button-*` |
| Campo | `Field` + `TextInput` / `TextArea` / `DateInput` / `TimeInput` / `CheckboxInput`, `FieldStatus` | `--input-*` |
| Link | `Link` | `--link-*` |
| Cartão | `Card`, `ClickableCard`, `SelectableCard` (escolha de serviço e horário) | `--card-*` |
| Navegação | `TopNav`, `MobileNav`, `NavItem` | `--nav-*` |
| Alerta | `Banner` (na página), `Toast` (efêmero, nunca para erro que exige ação) | `--alert-*` |
| Etapas do agendamento | `Stepper` | semânticos |

### Botão

| Propriedade | Repouso | Hover | Pressionado | Foco | Desativado | Carregando |
|---|---|---|---|---|---|---|
| Primário: fundo | rose-600 | rose-700 | rose-800 | rose-600 + anel | nude-100 | rose-600 |
| Primário: texto | white | white | white | white | nude-500 | white + indicador |
| Secundário: fundo | white | rose-50 | rose-100 | white + anel | nude-100 | white |
| Secundário: borda / texto | rose-600 / rose-700 | idem | idem | idem | nude-200 / nude-500 | idem |

Altura de 48 px (mínimo de 44 px), pílula, peso 500, rótulo com verbo ("Agendar horário", "Confirmar"). Um único primário por tela. No celular, o primário do fluxo de agendamento ocupa a largura toda e fica fixo acima da área segura inferior. Desativado é raro: prefira manter o botão ativo e explicar o que falta. Carregando mantém o rótulo, ganha `aria-busy` e não muda de largura.

### Campo de formulário

- Rótulo visível sempre acima do campo (`--input-label`, 14 px, peso 500). Placeholder nunca substitui rótulo.
- Altura de 48 px, raio de 12 px, borda nude-500 (3,9:1), hover nude-700, foco com borda rose-700 + anel de foco.
- Dica abaixo do rótulo (`--input-hint`) e ligada por `aria-describedby`.
- Erro: borda red-600, mensagem red-700 abaixo do campo com ícone, `aria-invalid="true"` e foco no primeiro campo com erro ao enviar. A mensagem diz como corrigir.
- `autocomplete` correto (`name`, `email`, `tel`, `new-password`), `inputmode` para celular, nada de validação que bloqueie colar.
- Obrigatórios marcados com "(obrigatório)" por extenso; opcionais nunca vêm pré-marcados (consentimento de promoções: RF-10).

### Link

Rose-700, sempre sublinhado (1 px, deslocado 0,2em); hover rose-800 com sublinhado de 2 px. Link externo (WhatsApp, Instagram, mapa) diz para onde vai no texto e abre na mesma aba, salvo o WhatsApp no desktop. Nunca "clique aqui".

### Cartão

Fundo branco, borda nude-200, raio de 20 px, padding de 24 px, `--shadow-low`. Cartão clicável: o cartão inteiro é o alvo, com um único link ou botão dentro, hover `--shadow-med` e foco com anel no cartão. Cartão de serviço: nome (heading-3), descrição em até duas linhas, e uma linha fixa com **duração · valor** em algarismos tabulares, sempre na mesma posição.

### Navegação

- Barra superior de 64 px, fundo nude-50, borda inferior nude-200, nome ou logo à esquerda e "Agendar" como botão primário à direita.
- Celular: menu com botão rotulado "Menu" (texto, não só ícone), `aria-expanded`, foco preso enquanto aberto e Esc para fechar.
- Item ativo: texto rose-700 + indicador de 2 px rose-600 + `aria-current="page"`.
- Link "Pular para o conteúdo" como primeiro foco da página.
- Rodapé (fundo nude-900) com privacidade, termos e contato, acessíveis de qualquer tela (RF-04).

### Alerta

Fundo `*-50`, borda inteira de 1 px em `*-600` (nunca faixa num lado só), texto `*-700`, ícone do status à frente e título curto. `role="status"` para sucesso e informação; `role="alert"` só para erro que surge depois de uma ação. Erro diz o que aconteceu e o que fazer agora. Toast some em 5 s no mínimo, pausa no hover e no foco, e nunca leva a única cópia de uma informação.

### Foco visível

Um anel só para tudo: `outline: var(--focus-outline-width) var(--focus-outline-style) var(--focus-outline-color); outline-offset: var(--focus-outline-offset);`, com 2 px rose-800 e afastamento de 3 px. Contraste de 8,8:1 a 10,7:1 nos fundos. Aparece só com `:focus-visible`, nunca é removido sem substituto, e nenhum elemento fixo (barra, botão flutuante, banner) pode cobri-lo (WCAG 2.4.11, com `scroll-padding` igual à altura da barra fixa).

### Rótulo de dado fictício

Todo dado mockado (horário de exemplo, serviço de exemplo, foto de exemplo, depoimento de exemplo) leva o selo **"Exemplo"** (`--sample-label-*`, âmbar, 7,7:1) visível junto ao dado, e o texto alternativo da imagem também começa com "Exemplo:".

---

## 5. Restrições

1. **Nunca emoji como ícone.** Ícones são SVG do conjunto **Lucide** (licença ISC), com traço de 1,75 px, e `aria-hidden="true"` quando acompanham texto. Ícone sozinho só em `IconButton`, com rótulo acessível.
2. **Nunca dado fictício sem rótulo.** Ver o selo "Exemplo". Proibido inventar depoimento, nota, número de clientes, prêmio ou "mais de X atendimentos".
3. **Nenhuma fonte ou script de terceiros em tempo de execução sem necessidade.** Fontes auto-hospedadas; sem Google Fonts, sem CDN, sem embed de Instagram, sem iframe de mapa, sem pixel, sem analytics. Mapa e WhatsApp são links. Qualquer exceção futura entra neste arquivo com o motivo e só carrega depois do consentimento.
4. Sem valores soltos (hex, px) quando existir token. `validate-tokens.cjs`, da skill design-system, roda no CI.
5. Sem Tailwind sobre componente Astryx; Tailwind só para layout de página, espaçamento, responsividade e seções de marketing (CLAUDE.md).
6. Sem shadcn/ui nem outra biblioteca de componentes.

---

## 6. Stack (confirmada em 26/11/2026)

Já definido no CLAUDE.md: `@astryxdesign/core` (React 19 + StyleX) e Tailwind só para layout.

| Camada | Proposta | Justificativa |
|---|---|---|
| Framework e build | **Next.js (App Router) + TypeScript estrito** | É o caminho de instalação que o próprio Astryx documenta como o mais simples, com CSS pré-compilado e sem plugin de StyleX, gera HTML estático para SEO e depois recebe o backend do agendamento no mesmo projeto. |
| Gerenciador de pacotes | **npm** | Já vem com o Node 22 instalado aqui; nenhuma ferramenta a mais para manter. |
| Estilo de layout | **Tailwind CSS v4** com o tema gerado do tokens.json | A v4 lê variáveis CSS nativamente, então o tema do Tailwind espelha os tokens sem duplicar valor. |
| Fontes | **`next/font/local`** com os `.woff2` no repositório | Auto-hospeda, faz subconjunto e pré-carregamento, e gera fallback com métricas ajustadas, sem chamada externa. |
| Testes unitários e de componente | **Vitest + Testing Library** | Rápido, com a mesma sintaxe do Jest, e testa o comportamento acessível (por papel e rótulo), não a implementação. |
| Testes ponta a ponta | **Playwright** | Roda o fluxo de agendamento em viewport de celular real e verifica rolagem horizontal em 320 px. |
| Acessibilidade automatizada | **@axe-core/playwright** | Pega no CI as regressões de WCAG que o olho deixa passar; não substitui o teste com teclado e leitor de tela. |
| Lint | **ESLint** (config do Next + `jsx-a11y` + `@stylexjs/eslint-plugin`) | O plugin oficial do StyleX só existe para ESLint, e o `jsx-a11y` bloqueia erros de acessibilidade no editor. |
| Formatação | **Prettier** | Padrão do ecossistema; acaba com discussão de estilo no PR. |
| CI | **GitHub Actions**: lint, tipos, testes, `check-contrast`, `validate-tokens`, build, Playwright | O repositório já está no GitHub, e cada PR prova que não quebrou contraste, tokens nem o fluxo. |

**Hospedagem: Vercel.** Por enquanto só com dados mockados, para mostrar à Rachel o visual completo; o build é estático, então nada de servidor nem banco. Proteger os previews com a Deployment Protection da Vercel enquanto houver endereço real ou conteúdo provisório no ar.

Fora da stack, de propósito: commitlint e husky (a convenção de commit está escrita abaixo; ferramenta só se começar a escapar) e Storybook (o Astryx já tem o dele; a página `brand/demo.html` cobre a vitrine da marca).

---

## 7. Boas práticas

### Acessibilidade (WCAG 2.2 AA)

- HTML semântico (`header`, `nav`, `main`, `footer`, um `h1` por página, títulos em ordem) e `lang="pt-BR"`.
- Tudo operável por teclado, em ordem lógica; foco visível e nunca encoberto (2.4.11).
- Alvos de toque com pelo menos 24 × 24 px (2.5.8). Neste sistema, o mínimo prático é 44 px.
- Nenhuma ação depende de arrastar (2.5.7): calendário e horários funcionam com toque e teclado.
- Autenticação sem teste cognitivo (3.3.8): colar senha e gerenciador de senhas funcionam.
- Sem pedir de novo o que a cliente já informou no fluxo (3.3.7).
- Ajuda consistente (3.2.6): o link do WhatsApp da Rachel fica no mesmo lugar em todas as páginas.
- Texto alternativo descritivo nas fotos do portfólio; imagem decorativa com `alt=""`.
- Zoom até 200% e reflow em 320 px sem perda de conteúdo.

### Desempenho

Metas para as páginas públicas, num celular intermediário em 4G: LCP abaixo de 2,5 s, INP abaixo de 200 ms, CLS abaixo de 0,1; JS inicial abaixo de 150 KB gzip; fontes abaixo de 150 KB no total. Imagens em AVIF ou WebP com `srcset`/`sizes`, dimensões declaradas, e `loading="lazy"` fora da primeira tela. Páginas públicas geradas como estáticas.

### SEO

`title` e `description` únicos por página; Open Graph (o link é compartilhado no WhatsApp, então a prévia importa); URL legível em português (`/servicos`, `/agendar`); `sitemap.xml` e `robots.txt`; dados estruturados `BeautySalon`/`LocalBusiness` com nome, serviços e área atendida. Nenhum dado de cliente em URL.

### Privacidade (LGPD, Lei 13.709/2018)

- Coleta mínima (art. 6º, III): só nome, e-mail e celular. Celular nunca em página pública, URL, log ou analytics (RNF-03).
- Nada pessoal em `localStorage`, `sessionStorage` ou IndexedDB; só o cookie de sessão `HttpOnly`, `Secure`, `SameSite=Lax` (RNF-04).
- Sem cookie de terceiros, logo sem banner de cookies. Se isso mudar, consentimento antes de carregar.
- Formulário do agendamento: na etapa de site mockado, nada é enviado nem guardado.
- Depoimento público mostra só o primeiro nome (RF-03).
- Endereço da Rachel: por decisão sua, será publicado completo. O dado é dela, não de uma cliente; mesmo assim, o DESIGN.md recomenda bairro em público e endereço completo na confirmação. Ver PRODUCT.md, "Em aberto".
- Cabeçalhos: CSP restrita a `'self'`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` negando câmera, microfone e geolocalização.

### Mobile primeiro

- Escrever o CSS para 360 px e subir com `min-width`. Breakpoints: 640, 768, 1024 e 1280 px.
- Margem lateral de **16 px** (`--layout-gutter`) em toda página no celular, 24 px a partir de 768 px.
- **Nenhuma rolagem horizontal**: nada com largura fixa maior que a tela, mídia com `max-width: 100%`, texto longo com `overflow-wrap: anywhere`, e tabela vira lista no celular. Teste automatizado no Playwright em 320, 360 e 390 px compara `scrollWidth` com `clientWidth`.
- Ação principal ao alcance do polegar; respeitar `env(safe-area-inset-*)`.

---

## 8. Fluxo de trabalho

- **`main` protegida**: sem push direto; merge só por PR com o CI verde. Configurar no GitHub (Settings → Branches → regra para `main`: exigir PR, exigir checks, bloquear force-push).
- **Uma branch por tarefa**: `feat/agendamento-horarios`, `fix/contraste-link`, `docs/design-system`.
- **Conventional Commits em português, no imperativo**, com o ID do requisito quando houver:
  - `feat(agendar): mostra só horários em que o serviço cabe (RF-12)`
  - `fix(nav): mantém o foco visível sob a barra fixa`
  - `docs: adiciona design system e tokens`
  - `chore(ci): roda verificação de contraste no PR`
  - Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `perf`, `chore`, `ci`.
- **PR** com quatro seções:

```markdown
## Resumo
Uma ou duas frases: o quê e por quê. Requisitos: RF-xx.

## O que mudou
- …

## Como testar
1. …
(incluir: teclado, celular 360 px, leitor de tela quando mexer em interação)

## Capturas de tela
Celular (390 px) e desktop (1280 px), antes e depois quando for mudança visual.
```

- Antes de fechar uma feature: skills `frontend-security` e `review-security` no diff, e `lgpd` quando tocar em dado pessoal (CLAUDE.md).

---

## 9. Pendências desta versão

- Nome oficial do estúdio e logo (a da Etapa 2 é provisória).
- Fotos reais do portfólio: até lá, espaços rotulados "Exemplo".
- Mapeamento `defineTheme` do Astryx e tema do Tailwind a partir do tokens.json: Etapa 3.
- Este arquivo será atualizado na Etapa 3 com as decisões das páginas.
