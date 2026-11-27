# nail-designer-plataform

## Stack de UI

- Componentes de UI: somente `@astryxdesign/core` (Astryx, React 19 + StyleX). Antes de usar um componente ou prop, consultar a CLI/MCP do Astryx; não inventar props.
- Tailwind: apenas para layout de página, espaçamento, responsividade e seções de marketing.
- Não aplicar classes Tailwind para sobrescrever o visual de componentes Astryx. Variações vêm do tema/tokens do Astryx.
- Não adicionar shadcn/ui nem outras bibliotecas de componentes.

## Tokens e tema

- Fonte única de verdade: tokens do Astryx (`defineTheme`), espelhados no tema do Tailwind (cores, espaçamento, raios, fontes).
- Não usar valores soltos (hex, px) quando existir token equivalente.

## Processo

- Fluxo de trabalho conduzido pelo plugin `superpowers` (brainstorm, plano, TDD, review).
- `ponytail` mantém o código mínimo: justificar o que for adicionado.
- Segurança e LGPD (Lei 13.709/2018): revisar o diff antes de finalizar; não armazenar dados pessoais no navegador sem necessidade.

## Skills

- Tela ou componente novo: `/impeccable` (critica e polimento depois de pronto).
- Tokens e tema: `design-system`, sempre partindo dos tokens do Astryx.
- Animações: `frontend-ui-animator`, só quando eu pedir.
- Código que toca dados pessoais (cadastro, agenda, clientes): `lgpd`.
- Antes de fechar uma feature: `frontend-security` e `review-security` no diff.

<!-- ASTRYX:START -->
Astryx v0.7.17 · 174 components
CLI: run every command as `npx astryx <cmd>` (shown below as `astryx ...`).

SETUP (once, in app entry e.g. main.tsx) — without these, components render unstyled:
  import "@astryxdesign/core/reset.css";
  import "@astryxdesign/core/astryx.css";

WORKFLOW — start every page from a template, never from scratch:
1. `astryx build "<idea>"` — names the template to scaffold from and the parts it lacks.
2. `astryx template <name> <path>` — scaffold it; keep its frame, gap and padding; replace the content.
3. `astryx component <Name>` to read props before using one; `astryx template <Block>` prints a block example to read for a part it lacks. Astryx names differ from other libraries: buttons, badges, tokens and tabs take their text in `label` (Text, Heading and Link take children), booleans start with `is` or `has` (`isOpen`, `isDisabled`), and every input takes `value` and `onChange`.
Changing an existing page? Keep it: skip step 2 and add components inside its sections; read a block example when it helps.
Before you deliver a build, run `astryx doctor --built <dir>`; don't deliver it if it fails.

RULES:
- No <div> — components handle all layout and spacing.
- Read `astryx docs layout` before changing a template's frame.
- Dense data = rows (Table, List/Item), not Card-wrapped lists. Badge = counts only.
- Style with component props first, then Tailwind utilities backed by tokens. No raw hex/px.
- THEMES: palettes and custom colors go through the theme, never :root overrides; so does a denser or roomier app (`editor set <name> spacing tight`), never gap and padding changes page by page. A change to one kind of part (the sidebar, its selected item, the gaps in a form) is a theme change too, not props on one page: `editor how "<ask>"` names the `set … --on <part>` line. No app yet: `astryx experimental theme preview app <dir>` makes a starter app that shows the theme. To make or change a theme (colors, fonts, corners, spacing, a look from a picture), prefer the experimental theme editor over hand-written theme files: `astryx experimental theme editor new <name> --like neutral`, then `editor set <name> <thing> <value>` or `editor how "<what you want>"`; wire it with `astryx theme add <name>`; after each change look at it with `astryx experimental theme editor show <name> --png` (takes pictures of real components) and open the PNGs it writes; a theme change is not done until you have looked at the pictures. In code, extend an imported theme to customize it; `theme eject <slug>` only forks source. See `astryx docs theme`.
- SELF-CHECK: re-read the file; replace any style={{…}}, raw <div>/<span>, imported .css/@apply, or hardcoded/arbitrary value (bg-[#fff], p-[13px]) with the component or a token-backed utility.

`astryx help` lists every command. Key ones beyond the workflow:
  search "<query>"   find any component / hook / doc / template
  discover <words>   integrations you could add
  docs <topic>       getting-started, principles, tokens, theme … (`astryx docs` lists all)
  docs cli           commands and API reference
  docs authoring     build an integration package, and every field it holds
  upgrade --from <old version> --apply   run after a dependency bump
To remove this block, run `astryx init --remove-agents`, which removes it from the agent files at the project root and in the folder you run it in; from any other file it leaves, delete everything from ASTRYX:START to ASTRYX:END.
<!-- ASTRYX:END -->
