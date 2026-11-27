# Design system: Agenda da Rachel

Versão 0.3 (Etapas 1 a 3). Fonte única dos valores: [design-system/tokens.json](design-system/tokens.json). [design-system/tokens.css](design-system/tokens.css) é gerado a partir dele; não edite o CSS à mão.

```bash
npm run tokens            # gera design-system/tokens.css a partir do tokens.json
npm run theme             # gera o tema do Astryx em src/theme/built/
npm run check:contrast    # falha se algum par ficar abaixo do WCAG 2.2 AA
```

Contexto do produto em [PRODUCT.md](PRODUCT.md) e [docs/product/](docs/product/).

---

## 1. Direção

**O padrão do setor, feito com capricho, nas cores da marca.** Taupe e dourado da logo, serifa para títulos, sans geométrica para o resto, muito respiro, cantos suaves. A escolha foi consciente, numa rodada de direções em que a convenção ganhou de alternativas mais ousadas. A régua de acabamento é a de estúdios de beleza premium brasileiros. Em 27/11/2026 o rosé inicial deu lugar ao taupe e ao dourado da logo oficial, escolhidos numa comparação lado a lado (versão "dourada").

Cena física: a cliente abre o link no celular, de dia, muitas vezes no transporte ou no trabalho, com uma mão só. Por isso o fundo é claro, o texto tem alto contraste, os alvos de toque são grandes e a ação principal fica ao alcance do polegar.

Estratégia de cor: **contida**. Neutros taupe como base e o dourado da logo como acento, que faz trabalho real: ação principal, horário marcado, item ativo e ênfase dos títulos. O taupe claro (`--color-background-brand`) aparece em faixas inteiras de seção, e o rodapé é marrom escuro com a logo dourada.

O dourado da logo é claro (1,6:1 contra o branco), então ele tem três tons com papéis diferentes: **gold-300** como fundo de botão, sempre com texto escuro e borda **gold-500**; **gold-500** para indicadores de estado (rádio, caixa marcada, traço do menu) e para a ênfase de títulos de 24 px ou mais; **gold-700** para texto pequeno (links e preços).

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

- **Rachel Ferreira Nail Designer**, igual à logo. "Agenda da Rachel" é o nome do projeto e da área de agendamento.
- No código, o nome fica num lugar só: `src/data/marca.ts` (`nome`, `nomeCompleto` e `profissional`, o primeiro nome usado nas frases).

### Logo

Monograma **RF** caligráfico sobre **RACHEL FERREIRA** em maiúsculas clássicas e **NAIL DESIGNER** espaçado. Ainda não há arquivo oficial: a versão do projeto foi **reconstruída** a partir da imagem do Instagram (150 px). O monograma foi vetorizado da imagem e o nome refeito na fonte Cinzel (SIL OFL), tudo convertido em contorno, sem script e sem referência externa. Trocar pelo arquivo oficial (SVG ou PDF) quando chegar, mantendo os nomes de arquivo.

| Arquivo | Uso |
|---|---|
| `logo-principal.svg` | Empilhada, taupe escuro, para fundo claro |
| `logo-principal-ouro.svg` | Empilhada, dourado, para fundo taupe ou escuro |
| `logo-horizontal.svg` / `-ouro.svg` | Cabeçalho a partir de 640 px (48 px de altura) |
| `logo-simbolo.svg` | Só o monograma: cabeçalho no celular, favicon, espaço de foto |
| `logo-mono.svg` | Uma cor só |

Na logo original, o dourado sobre o taupe tem contraste de 2,1:1. Logotipos são isentos de contraste pela WCAG, mas texto do site não: por isso as cores da logo entram no site com os ajustes da seção de cores. Guia visual: [design-system/brand/demo.html](design-system/brand/demo.html).

### Cores em três níveis

**Primitivas**, valores brutos, nunca usados direto em componente:

| Família | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| `taupe` (fundo da logo em 500) | `#F5F2F0` | `#EEE9E5` | `#E6E0DB` | `#CBBEB4` | `#A79381` | `#98806B` | `#857260` | `#6B5B4D` | `#3B322B` | `#241B18` |
| `gold` (letras da logo em 300; sem 50 e 900) | | `#F7EEDB` | `#EED9AE` | `#E0C080` | `#D2A347` | `#AC812A` | `#876521` | `#6B501A` | `#4F3B13` | |

Status: `green` 50/600/700, `amber` 50/600/700, `red` 50/600/700, `blue` 50/600/700. Também `white`.

**Semânticas**, com nomes do Astryx, para alimentar `defineTheme` 1:1:

| Token | Primitiva | Uso |
|---|---|---|
| `--color-background-body` | taupe-50 | Fundo da página |
| `--color-background-surface` / `-card` / `-popover` | white | Cartões, campos, menus |
| `--color-background-muted` | taupe-100 | Faixas neutras, células desativadas |
| `--color-background-brand` | taupe-200 | Faixas de seção de marca |
| `--color-background-inverted` | taupe-800 | Rodapé |
| `--color-text-primary` | taupe-900 | Texto principal |
| `--color-text-secondary` | taupe-700 | Texto de apoio, metadados |
| `--color-text-accent` | gold-700 | Texto de destaque pequeno: links e preços |
| `--color-text-display-accent` | gold-500 | Só ênfase em títulos de 24 px ou mais (3:1, permitido pela WCAG em texto grande) |
| `--color-text-disabled` | taupe-400 | Somente texto desativado (isento de contraste pela WCAG) |
| `--color-accent` / `--color-on-accent` | gold-500 / taupe-900 | Indicadores de estado (rádio, caixa, calendário); o botão principal usa `--button-primary-*` |
| `--color-border` | taupe-200 | Divisórias e borda de cartão (decorativa) |
| `--color-border-emphasized` | taupe-600 | Borda de campo e de controle (3:1) |
| `--color-{success,warning,error,info}` | *-600 | Preenchimento de status |
| `--color-{status}-muted` + `--color-on-{status}-muted` | *-50 + *-700 | Alertas suaves |
| `--color-overlay` | taupe-900 a 50% | Fundo de diálogo |

**De componente**: `--button-*`, `--input-*`, `--link-*`, `--card-*`, `--nav-*`, `--alert-*`, `--sample-label-*`. Ver a seção 4.

A cor nunca carrega informação sozinha. Status leva ícone e texto; link leva sublinhado; erro leva mensagem escrita.

### Contraste WCAG 2.2 AA

Todos os pares abaixo saem de `node design-system/scripts/check-contrast.mjs --md`, calculados a partir do tokens.json. Mínimos: 4,5:1 para texto (1.4.3) e 3:1 para bordas de controle, indicadores e foco (1.4.11). Aplicamos 4,5:1 a todo texto, inclusive aos títulos grandes, em que a WCAG aceitaria 3:1.

<!-- CONTRASTE:INICIO -->
| Par | Cores | Razão | Mínimo | Resultado |
|---|---|---|---|---|
| Texto principal / fundo da página | `#241B18` / `#F5F2F0` | 15.13:1 | 4.5:1 | passa |
| Texto principal / superfície | `#241B18` / `#FFFFFF` | 16.87:1 | 4.5:1 | passa |
| Texto principal / fundo suave | `#241B18` / `#EEE9E5` | 13.99:1 | 4.5:1 | passa |
| Texto principal / fundo da marca | `#241B18` / `#E6E0DB` | 12.89:1 | 4.5:1 | passa |
| Texto secundário / fundo da página | `#6B5B4D` / `#F5F2F0` | 5.84:1 | 4.5:1 | passa |
| Texto secundário / superfície | `#6B5B4D` / `#FFFFFF` | 6.50:1 | 4.5:1 | passa |
| Texto secundário / fundo suave | `#6B5B4D` / `#EEE9E5` | 5.40:1 | 4.5:1 | passa |
| Texto de destaque / fundo da página | `#6B501A` / `#F5F2F0` | 6.76:1 | 4.5:1 | passa |
| Texto de destaque / superfície | `#6B501A` / `#FFFFFF` | 7.53:1 | 4.5:1 | passa |
| Texto de destaque / fundo da marca | `#6B501A` / `#E6E0DB` | 5.76:1 | 4.5:1 | passa |
| Texto invertido / fundo invertido | `#F5F2F0` / `#3B322B` | 11.23:1 | 4.5:1 | passa |
| Texto sobre escuro / fundo invertido | `#F5F2F0` / `#3B322B` | 11.23:1 | 4.5:1 | passa |
| Botão primário: texto / fundo | `#241B18` / `#E0C080` | 9.66:1 | 4.5:1 | passa |
| Botão primário: texto / hover | `#241B18` / `#D2A347` | 7.29:1 | 4.5:1 | passa |
| Botão primário: texto / pressionado | `#241B18` / `#AC812A` | 4.76:1 | 4.5:1 | passa |
| Botão secundário: texto / fundo | `#6B5B4D` / `#FFFFFF` | 6.50:1 | 4.5:1 | passa |
| Botão secundário: texto / hover | `#6B5B4D` / `#F5F2F0` | 5.84:1 | 4.5:1 | passa |
| Botão secundário: borda / página | `#6B5B4D` / `#F5F2F0` | 5.84:1 | 3:1 | passa |
| Botão primário: borda / página | `#AC812A` / `#F5F2F0` | 3.18:1 | 3:1 | passa |
| Botão primário: borda / superfície | `#AC812A` / `#FFFFFF` | 3.54:1 | 3:1 | passa |
| Indicador marcado (rádio, caixa, dia) / superfície | `#AC812A` / `#FFFFFF` | 3.54:1 | 3:1 | passa |
| Indicador marcado (rádio, caixa, dia) / página | `#AC812A` / `#F5F2F0` | 3.18:1 | 3:1 | passa |
| Texto sobre indicador marcado | `#241B18` / `#AC812A` | 4.76:1 | 4.5:1 | passa |
| Horário marcado: borda / superfície | `#876521` / `#FFFFFF` | 5.37:1 | 3:1 | passa |
| Ênfase de título grande / página | `#AC812A` / `#F5F2F0` | 3.18:1 | 3:1 | passa |
| Campo: texto / fundo | `#241B18` / `#FFFFFF` | 16.87:1 | 4.5:1 | passa |
| Campo: placeholder / fundo | `#6B5B4D` / `#FFFFFF` | 6.50:1 | 4.5:1 | passa |
| Campo: rótulo / página | `#3B322B` / `#F5F2F0` | 11.23:1 | 4.5:1 | passa |
| Campo: dica / página | `#6B5B4D` / `#F5F2F0` | 5.84:1 | 4.5:1 | passa |
| Campo: erro / página | `#8A1F18` / `#F5F2F0` | 8.23:1 | 4.5:1 | passa |
| Campo: borda / fundo do campo | `#857260` / `#FFFFFF` | 4.59:1 | 3:1 | passa |
| Campo: borda / página | `#857260` / `#F5F2F0` | 4.12:1 | 3:1 | passa |
| Campo: borda de foco / fundo | `#3B322B` / `#FFFFFF` | 12.52:1 | 3:1 | passa |
| Campo: borda de erro / fundo | `#B0281F` / `#FFFFFF` | 6.63:1 | 3:1 | passa |
| Link / página | `#6B501A` / `#F5F2F0` | 6.76:1 | 4.5:1 | passa |
| Link / superfície | `#6B501A` / `#FFFFFF` | 7.53:1 | 4.5:1 | passa |
| Link hover / página | `#4F3B13` / `#F5F2F0` | 9.58:1 | 4.5:1 | passa |
| Navegação: texto / fundo | `#3B322B` / `#F5F2F0` | 11.23:1 | 4.5:1 | passa |
| Navegação: ativo / fundo | `#241B18` / `#F5F2F0` | 15.13:1 | 4.5:1 | passa |
| Navegação: indicador / fundo | `#AC812A` / `#F5F2F0` | 3.18:1 | 3:1 | passa |
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
| Foco / página | `#3B322B` / `#F5F2F0` | 11.23:1 | 3:1 | passa |
| Foco / superfície | `#3B322B` / `#FFFFFF` | 12.52:1 | 3:1 | passa |
| Foco / fundo da marca | `#3B322B` / `#E6E0DB` | 9.57:1 | 3:1 | passa |
<!-- CONTRASTE:FIM -->

Proibido: gold-300 ou gold-400 como cor de texto ou como único contorno de um controle (1,6 e 2,1:1 contra o fundo claro); texto branco sobre qualquer dourado (o dourado da logo com branco dá 1,7:1). Texto sobre foto sempre com véu `--color-overlay` ou sobre um cartão sólido.

### Tipografia

| Papel | Família | Por quê |
|---|---|---|
| Títulos e display (`--font-family-heading`) | **Young Serif** (peso único 400, sem itálico) | Serifa robusta e acolhedora, com traços grossos que se leem bem no celular e em tamanho pequeno. Trocou o Bodoni Moda em 27/11/2026: os traços finos dele sumiam nos títulos de 18 a 25 px (feedback do dono do projeto). |
| Texto, interface, números (`--font-family-body`) | **Jost** (variável, `wght` 100–900, itálico) | Geométrica no espírito da Futura, comum em marcas de beleza, mas com aberturas largas o bastante para ler preço e horário no celular. |

Ambas têm licença SIL Open Font License 1.1 e acentuação completa do português.

**Fontes auto-hospedadas.** Arquivos `.woff2` em `public/fonts/` (Young Serif e Jost, 53 KB no total), com subconjunto latin, que já cobre toda a acentuação do português, `font-display: swap`, servidos do mesmo domínio. Nenhuma requisição a Google Fonts ou a qualquer CDN em tempo de execução. Pré-carregar só dois arquivos: Jost e Young Serif. Fallbacks com métricas próximas (Georgia, Segoe UI e system-ui) para reduzir o salto de layout.

**Escala** (terça maior, razão 1,25, base 16 px):

| Token | Tamanho | Família | Peso | Entrelinha | Uso |
|---|---|---|---|---|---|
| `--text-display-1-*` | clamp 39–49 px | Young Serif | 400 | 1,15 | Título da página inicial |
| `--text-heading-1-*` | 31 px | Young Serif | 400 | 1,15 | Título de página |
| `--text-heading-2-*` | 25 px | Young Serif | 400 | 1,3 | Seção |
| `--text-heading-3-*` | 20 px | Young Serif | 400 | 1,3 | Subseção, nome do serviço |
| `--text-heading-4-*` | 18 px | Young Serif | 400 | 1,3 | Título de cartão |
| `--text-large-*` | 18 px | Jost | 400 | 1,55 | Texto de abertura |
| `--text-body-*` | 16 px | Jost | 400 | 1,55 | Texto corrido, campos |
| `--text-label-*` | 14 px | Jost | 500 | 1,3 | Rótulos, botões pequenos |
| `--text-supporting-*` | 14 px | Jost | 400 | 1,55 | Dicas, metadados |

Regras: o texto nunca fica abaixo de 14 px, e os campos sempre usam 16 px (o iOS não dá zoom). Preço, duração e horário usam algarismos tabulares (`font-variant-numeric: tabular-nums`). Linha de leitura com no máximo `--layout-reading-width` (40rem, uns 70 caracteres). A Young Serif não tem itálico nem negrito: a palavra de ênfase de um título muda só de cor (`--color-text-accent`), nunca de estilo, e nenhum título usa peso diferente de 400, senão o navegador fabrica um negrito torto.

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

Tingidas com o taupe-800, nunca preto puro: `--shadow-low` (cartão em repouso), `--shadow-med` (cartão em hover, menu), `--shadow-high` (diálogo, folha inferior). Sombra serve para elevação, não para decorar.

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
| Primário: fundo | gold-300 | gold-400 | gold-500 | gold-300 + anel | taupe-100 | gold-300 |
| Primário: texto / borda | taupe-900 / gold-500 | idem | idem | idem | taupe-600 / taupe-200 | taupe-900 + indicador |
| Secundário: fundo | white | taupe-50 | taupe-200 | white + anel | taupe-100 | white |
| Secundário: borda / texto | taupe-700 / taupe-700 | idem | idem | idem | taupe-200 / taupe-600 | idem |
| Horário ou dia marcado | gold-300 + borda de 2 px gold-600 + negrito | | | | | |

Altura de 48 px (mínimo de 44 px), pílula, peso 500, rótulo com verbo ("Agendar horário", "Confirmar"). Um único primário por tela. No celular, o primário do fluxo de agendamento ocupa a largura toda e fica fixo acima da área segura inferior. Desativado é raro: prefira manter o botão ativo e explicar o que falta. Carregando mantém o rótulo, ganha `aria-busy` e não muda de largura.

### Campo de formulário

- Rótulo visível sempre acima do campo (`--input-label`, 14 px, peso 500). Placeholder nunca substitui rótulo.
- Altura de 48 px, raio de 12 px, borda taupe-600 (4,6:1), hover taupe-700, foco com borda taupe-800 + anel de foco.
- Dica abaixo do rótulo (`--input-hint`) e ligada por `aria-describedby`.
- Erro: borda red-600, mensagem red-700 abaixo do campo com ícone, `aria-invalid="true"` e foco no primeiro campo com erro ao enviar. A mensagem diz como corrigir.
- `autocomplete` correto (`name`, `email`, `tel`, `new-password`), `inputmode` para celular, nada de validação que bloqueie colar.
- Obrigatórios marcados com "(obrigatório)" por extenso; opcionais nunca vêm pré-marcados (consentimento de promoções: RF-10).

### Link

Gold-700, sempre sublinhado (1 px, deslocado 0,2em); hover gold-800 com sublinhado de 2 px. Link externo (WhatsApp, Instagram, mapa) diz para onde vai no texto e abre na mesma aba, salvo o WhatsApp no desktop. Nunca "clique aqui".

### Cartão

Fundo branco, borda taupe-200, raio de 20 px, padding de 24 px, `--shadow-low`. Cartão clicável: o cartão inteiro é o alvo, com um único link ou botão dentro, hover `--shadow-med` e foco com anel no cartão. Cartão de serviço: nome (heading-3), descrição em até duas linhas, e uma linha fixa com **duração · valor** em algarismos tabulares, sempre na mesma posição.

### Navegação

- Barra superior de 64 px, fundo taupe-50, borda inferior taupe-200, logo horizontal à esquerda (só o monograma abaixo de 640 px) e "Agendar" como botão primário à direita.
- Celular: menu com botão rotulado "Menu" (texto, não só ícone), `aria-expanded`, foco preso enquanto aberto e Esc para fechar.
- Item ativo: texto taupe-900 + traço de 2 px gold-500 + `aria-current="page"`.
- Link "Pular para o conteúdo" como primeiro foco da página.
- Rodapé (fundo taupe-800, logo dourada) com privacidade, termos e contato, acessíveis de qualquer tela (RF-04).

### Alerta

Fundo `*-50`, borda inteira de 1 px em `*-600` (nunca faixa num lado só), texto `*-700`, ícone do status à frente e título curto. `role="status"` para sucesso e informação; `role="alert"` só para erro que surge depois de uma ação. Erro diz o que aconteceu e o que fazer agora. Toast some em 5 s no mínimo, pausa no hover e no foco, e nunca leva a única cópia de uma informação.

### Foco visível

Um anel só para tudo: `outline: var(--focus-outline-width) var(--focus-outline-style) var(--focus-outline-color); outline-offset: var(--focus-outline-offset);`, com 2 px taupe-800 e afastamento de 3 px. Contraste de 9,6:1 a 12,5:1 nos fundos. Aparece só com `:focus-visible`, nunca é removido sem substituto, e nenhum elemento fixo (barra, botão flutuante, banner) pode cobri-lo (WCAG 2.4.11, com `scroll-padding` igual à altura da barra fixa).

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
| Fontes | **`@font-face` próprio** em `src/app/globals.css`, arquivos em `public/fonts/`, com `preload` dos dois principais | Mudou na Etapa 3: o `next/font` renomeia a família com hash, e os nomes precisam bater com os do tokens.json (fonte única). |
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

Metas para as páginas públicas, num celular intermediário em 4G: LCP abaixo de 2,5 s, INP abaixo de 200 ms, CLS abaixo de 0,1; fontes abaixo de 150 KB no total (53 KB hoje). **JS inicial: a meta de 150 KB gzip não é atingível com o Astryx.** Medido na Etapa 3, a página de serviços (só lista) tem 340 KB, a inicial 357 KB e o agendamento 397 KB; React mais Next somam uns 150 KB, e o resto é a base do Astryx (camadas, popover, interação de toque). Nova meta: não passar de 400 KB e acompanhar a cada PR. Para reduzir, levar o caso ao Astryx (`npx astryx gap-report`), em vez de trocar de biblioteca. Imagens em AVIF ou WebP com `srcset`/`sizes`, dimensões declaradas, e `loading="lazy"` fora da primeira tela. Páginas públicas geradas como estáticas.

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

- Arquivo oficial da logo (a atual foi reconstruída da imagem do Instagram).
- Fotos reais do portfólio e retrato da Rachel: até lá, espaços rotulados "Foto de exemplo".
- E-mail real (hoje fictício e rotulado). Endereço, telefone e Instagram já são os reais.
- Canal de avisos (e-mail ou WhatsApp): o site não promete lembrete enquanto isso não for decidido.
- Política de privacidade e termos: rascunhos, precisam de revisão profissional antes de dados reais.
- CSP com nonce (hoje `'unsafe-inline'` em script, aceitável sem backend).
- Depoimentos: a seção existe nos requisitos (RF-03), mas não foi desenhada para não inventar avaliações.

---

## 10. Decisões do site (Etapa 3)

### Tema e tokens no código

- `src/theme/rachel.ts` estende o tema neutral do Astryx e lê a camada semântica e a de componente do `tokens.json`, sem copiar valores. `npm run theme` compila para `src/theme/built/`; o CI roda `npm run check:theme` e falha se o compilado estiver velho.
- O neutral troca a tipografia em telas de toque abaixo de 1024 px (fonte Figtree, outra escala). O tema reaplica a nossa nessa mesma condição. Sem isso, o celular perderia Jost e Young Serif.
- Regras de componente no tema, nunca na página: botão em pílula, botão principal dourado com borda, botão secundário branco com borda taupe, horário e dia marcados em dourado com borda escura, item ativo do menu com traço dourado, e o selo "Exemplo" (Badge `warning`) em âmbar claro.
- `tokens.css` continua sendo gerado para o `design-system/brand/demo.html`. O site não o importa: as variáveis chegam pelo tema, como pede o Astryx.
- Textos internos do Astryx (obrigatório, opcional, etapas, calendário) em pt-BR, via `InternationalizationProvider`. Tema fixo no modo claro.

### Páginas

| Página | Estrutura | Decisão |
|---|---|---|
| Início | Título à esquerda, bloco "Horários livres" à direita (no celular, um abaixo do outro) | A primeira tela já é a agenda: tocar num horário abre o agendamento com serviço, dia e hora preenchidos. Estrutura sorteada na rodada da impeccable (contrato em `.impeccable/surfaces/`). Mostra só os próximos 4 dias com vaga. |
| Serviços | Lista por categoria (Alongamento, Esmaltação, Cuidados) | Valor e duração sempre à direita, na mesma posição; "Ver horários" em cada serviço. |
| Portfólio | Grade 4:5 de espaços "Foto de exemplo" com o símbolo da marca | Aviso "Fotos em tratamento" no topo. Sem filtros até existirem fotos. |
| Agendar | Assistente em 4 etapas (Serviço, Dia e horário, Seus dados, Revisão), com resumo lateral no desktop | Detalhado abaixo. |
| Sobre | Apresentação e perguntas frequentes | Todo o texto é exemplo e está rotulado; nenhuma afirmação de experiência ou curso. |
| Contato | Endereço completo, canais e horários de atendimento | Horários derivados do mesmo expediente usado na agenda. WhatsApp e telefone reais, com link (`wa.me` e `tel:`); Instagram (@rachelferreira.nails, informado pela Rachel) é link externo; só o e-mail segue como exemplo. |
| Privacidade e Termos | Texto em largura de leitura, aviso "Rascunho" | Elementos do art. 9º da LGPD. |

### Agendamento

- Só aparecem horários em que o serviço cabe inteiro na janela, com 15 min de intervalo entre atendimentos e 2 h de antecedência (RF-12; `src/features/agendamento/lib/agenda.ts`, com testes).
- Parâmetros da URL (`servico`, `data`, `hora`) só valem se baterem com o que a própria agenda gera (`src/features/agendamento/lib/parametros.ts`, com testes). Dados pessoais nunca vão para a URL nem para o armazenamento do navegador (testado no e2e).
- Base legal do agendamento: execução de contrato (LGPD, art. 7º, V). Por isso a caixa obrigatória diz "Li e aceito os termos de uso e estou ciente da política de privacidade", e não "aceito a política". Promoções: consentimento separado, opcional e desmarcado.
- "Continuar" nunca fica desativado: sem escolha, aparece uma mensagem dizendo o que falta. Ao trocar de etapa, o foco vai para o título da etapa.
- Calendário sem dias de outros meses: eles pareciam indisponíveis.
- Horários do dia e o seletor de serviço da página inicial são botões soltos (`ToggleButton`) dentro de um grupo rotulado, e não um grupo de rádio horizontal: o grupo de rádio não quebra de linha e espremia os horários ("09:0 / 0"). Pílula com borda taupe; o marcado fica dourado com borda escura de 2 px e negrito (regra no tema, em `toggle-button` e `calendar-day`).
- O calendário do Astryx precisa de 7 × 44 px (308 px), e em 320 px só há 256 px dentro do cartão. O tema encolhe o tamanho do dia só dentro do calendário e só quando falta espaço (`min(44px, (100vw − 68px) / 7)`); acima de uns 375 px ele continua com 44 px. O cartão do assistente usa padding de 16 px no celular e 24 px a partir de 768 px.
- O `body` tem `overflow-x: clip`, que **esconde** o excesso em vez de mostrá-lo. Por isso o teste de rolagem horizontal sozinho não basta: o e2e também mede a borda direita de cada elemento da página (320 e 390 px) e há testes só do passo de horários e do seletor de serviço da página inicial em 320 px.
- Cupom de exemplo `BEMVINDA10` (10%) para mostrar o valor final antes de confirmar.

### Verificação

- `npm test`: 19 testes de agenda, cupom, validação e parâmetros.
- `npm run test:e2e`: as 8 páginas no celular e no desktop, com axe (WCAG 2.0, 2.1 e 2.2 A/AA) sem violações, sem rolagem horizontal em 320 e 390 px e sem requisição a terceiros; e o fluxo completo de agendamento.
- `npm run check:contrast`: 56 pares, todos AA.

