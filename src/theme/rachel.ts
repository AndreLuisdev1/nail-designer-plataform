// Tema Astryx da Agenda da Rachel. Valores vêm de tokens.json (fonte única); aqui só se mapeia.
// Depois de mudar tokens.json: npm run theme
import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';
import tokens from '../../tokens.json';

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
      'variant:secondary': {
        backgroundColor: component['--button-secondary-bg']!,
        color: component['--button-secondary-text']!,
        boxShadow: `inset 0 0 0 1px ${component['--button-secondary-border']}`,
      },
    },
    // Item ativo do menu: texto rosé + traço inferior, não pílula (DESIGN.md: navegação).
    'top-nav-item': {
      selected: {
        backgroundColor: 'transparent',
        color: component['--nav-text-active']!,
        boxShadow: `inset 0 -${component['--nav-indicator-height']} 0 ${component['--nav-indicator']}`,
        borderRadius: '0',
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
