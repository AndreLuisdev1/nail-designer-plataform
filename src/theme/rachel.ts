// Tema Astryx da Agenda da Rachel. Valores vêm de tokens.json (fonte única); aqui só se mapeia.
// Depois de mudar tokens.json: npm run theme
import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';
import tokens from '../../design-system/tokens.json';

type Node = {$value?: string} & {[key: string]: unknown};

function resolve(value: string): string {
  if (!value.startsWith('{')) return value;
  let node: unknown = tokens;
  for (const key of value.slice(1, -1).split('.')) node = (node as Node)?.[key];
  const next = (node as Node)?.$value;
  if (typeof next !== 'string') throw new Error(`Token inexistente: ${value}`);
  return resolve(next);
}

// A camada semântica usa os nomes do Astryx: semantic.color.text.primary -> --color-text-primary.
function flatten(node: Node, path: string[], out: Record<string, string>) {
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$') || !child || typeof child !== 'object') continue;
    const c = child as Node;
    if (typeof c.$value === 'string') out[`--${[...path, key].join('-')}`] = resolve(c.$value);
    else flatten(c, [...path, key], out);
  }
  return out;
}

const semantic = flatten(tokens.semantic as Node, [], {});
const component = flatten(tokens.component as Node, [], {});

// O neutral troca a tipografia em telas de toque < 1024 px (Figtree, outra escala).
// Reaplicamos a nossa na mesma condição; regras do tema filho vêm depois e prevalecem.
const typeTokens = Object.fromEntries(
  Object.entries(semantic).filter(([k]) => k.startsWith('--font-') || k.startsWith('--text-')),
);

export const colorModes = ['light'];

export const rachelTheme = defineTheme({
  name: 'rachel',
  extends: neutralTheme,
  tokens: {...semantic, ...component},
  adaptations: {
    rules: [{when: {pointer: 'coarse', width: {below: 'lg'}}, value: {tokens: typeTokens}}],
  },
  components: {
    button: {
      base: {borderRadius: component['--button-radius']!},
      // Dourado da logo com texto escuro (9,7:1); a borda mais escura dá o contorno que o fundo claro sozinho não dá (1,6:1).
      'variant:primary': {
        backgroundColor: component['--button-primary-bg']!,
        color: component['--button-primary-text']!,
        boxShadow: `inset 0 0 0 1px ${component['--button-primary-border']}`,
      },
      'variant:secondary': {
        backgroundColor: component['--button-secondary-bg']!,
        color: component['--button-secondary-text']!,
        boxShadow: `inset 0 0 0 1px ${component['--button-secondary-border']}`,
      },
    },
    // Item ativo do menu: texto escuro + traço dourado inferior, não pílula (DESIGN.md: navegação).
    'top-nav-item': {
      selected: {
        backgroundColor: 'transparent',
        color: component['--nav-text-active']!,
        boxShadow: `inset 0 -${component['--nav-indicator-height']} 0 ${component['--nav-indicator']}`,
        borderRadius: '0',
      },
    },
    // Cada dia do calendário ocupa --size-element-md (44 px no nosso tema): 7 colunas = 308 px, mais que a tela de 320 px.
    // Encolhe (md e sm juntos) só quando falta espaço (largura da tela menos gutter e padding do cartão), nunca passa de 44 px.
    calendar: {
      base: {
        '--size-element-md': `min(${semantic['--size-element-md']}, calc((100vw - 68px) / 7))`,
        // o botão do dia (sm) precisa ficar 4 px menor que a célula (md), senão o Astryx alarga a célula
        '--size-element-sm': `min(${semantic['--size-element-sm']}, calc((100vw - 68px) / 7 - 4px))`,
      },
    },
    // Botão de horário: pílula com borda. Marcado: dourado da logo, borda escura de 2 px e negrito,
    // para o estado não depender só da cor de fundo (o dourado claro tem 1,6:1 contra o branco).
    'toggle-button': {
      base: {
        borderRadius: component['--button-radius']!,
        backgroundColor: component['--button-secondary-bg']!,
        color: component['--button-secondary-text']!,
        boxShadow: `inset 0 0 0 1px ${component['--button-secondary-border']}`,
      },
      'isPressed:true': {
        backgroundColor: component['--button-primary-bg']!,
        color: component['--button-primary-text']!,
        boxShadow: `inset 0 0 0 2px ${component['--button-selected-border']}`,
        fontWeight: semantic['--font-weight-semibold']!,
      },
    },
    // Dia marcado no calendário: igual ao horário marcado.
    'calendar-day': {
      selected: {
        backgroundColor: component['--button-primary-bg']!,
        color: component['--button-primary-text']!,
        boxShadow: `inset 0 0 0 2px ${component['--button-selected-border']}`,
        fontWeight: semantic['--font-weight-semibold']!,
      },
    },
    // Badge de aviso é usado só para o selo "Exemplo" (DESIGN.md: âmbar claro com borda).
    badge: {
      'variant:warning': {
        backgroundColor: component['--sample-label-bg']!,
        color: component['--sample-label-text']!,
        boxShadow: `inset 0 0 0 1px ${component['--sample-label-border']}`,
      },
    },
  },
});

export default rachelTheme;
