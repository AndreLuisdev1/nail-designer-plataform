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