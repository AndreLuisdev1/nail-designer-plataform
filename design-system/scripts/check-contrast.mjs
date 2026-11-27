// Verifica o contraste WCAG 2.2 AA de cada par de cores usado pelo design system.
// Uso: node scripts/check-contrast.mjs [--md]   (--md imprime a tabela para o DESIGN.md)
import { readFileSync } from 'node:fs';

const tokens = JSON.parse(readFileSync(new URL('../tokens.json', import.meta.url), 'utf8'));

function resolve(path) {
  let node = tokens;
  for (const key of path.split('.')) node = node?.[key];
  if (!node || node.$value === undefined) throw new Error(`Token inexistente: ${path}`);
  const v = node.$value;
  return v.startsWith('{') ? resolve(v.slice(1, -1)) : v;
}

function luminance(hex) {
  const n = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// Autoteste: preto/branco = 21:1, igual/igual = 1:1.
console.assert(Math.abs(ratio('#000000', '#FFFFFF') - 21) < 0.01, 'ratio preto/branco');
console.assert(ratio('#777777', '#777777') === 1, 'ratio igual');

const S = 'semantic.color.';
const C = 'component.';
// [descrição, primeiro plano, fundo, mínimo]. 4.5 = texto normal; 3 = componente de UI e foco (1.4.11).
const pairs = [
  ['Texto principal / fundo da página', S + 'text.primary', S + 'background.body', 4.5],
  ['Texto principal / superfície', S + 'text.primary', S + 'background.surface', 4.5],
  ['Texto principal / fundo suave', S + 'text.primary', S + 'background.muted', 4.5],
  ['Texto principal / fundo da marca', S + 'text.primary', S + 'background.brand', 4.5],
  ['Texto secundário / fundo da página', S + 'text.secondary', S + 'background.body', 4.5],
  ['Texto secundário / superfície', S + 'text.secondary', S + 'background.surface', 4.5],
  ['Texto secundário / fundo suave', S + 'text.secondary', S + 'background.muted', 4.5],
  ['Texto de destaque / fundo da página', S + 'text.accent', S + 'background.body', 4.5],
  ['Texto de destaque / superfície', S + 'text.accent', S + 'background.surface', 4.5],
  ['Texto de destaque / fundo da marca', S + 'text.accent', S + 'background.brand', 4.5],
  ['Texto invertido / fundo invertido', S + 'text.inverted', S + 'background.inverted', 4.5],
  ['Texto sobre escuro / fundo invertido', S + 'on.dark', S + 'background.inverted', 4.5],
  ['Botão primário: texto / fundo', C + 'button.primary-text', C + 'button.primary-bg', 4.5],
  ['Botão primário: texto / hover', C + 'button.primary-text', C + 'button.primary-bg-hover', 4.5],
  ['Botão primário: texto / pressionado', C + 'button.primary-text', C + 'button.primary-bg-active', 4.5],
  ['Botão secundário: texto / fundo', C + 'button.secondary-text', C + 'button.secondary-bg', 4.5],
  ['Botão secundário: texto / hover', C + 'button.secondary-text', C + 'button.secondary-bg-hover', 4.5],
  ['Botão secundário: borda / página', C + 'button.secondary-border', S + 'background.body', 3],
  // O contorno do botão dourado vem da borda (o fundo claro sozinho teria 1,6:1).
  ['Botão primário: borda / página', C + 'button.primary-border', S + 'background.body', 3],
  ['Botão primário: borda / superfície', C + 'button.primary-border', S + 'background.surface', 3],
  ['Indicador marcado (rádio, caixa, dia) / superfície', S + 'accent', S + 'background.surface', 3],
  ['Indicador marcado (rádio, caixa, dia) / página', S + 'accent', S + 'background.body', 3],
  ['Texto sobre indicador marcado', S + 'on.accent', S + 'accent', 4.5],
  ['Horário marcado: borda / superfície', C + 'button.selected-border', S + 'background.surface', 3],
  // Só para títulos de 24 px ou mais: a WCAG pede 3:1 em texto grande.
  ['Ênfase de título grande / página', S + 'text.display-accent', S + 'background.body', 3],
  ['Campo: texto / fundo', C + 'input.text', C + 'input.bg', 4.5],
  ['Campo: placeholder / fundo', C + 'input.placeholder', C + 'input.bg', 4.5],
  ['Campo: rótulo / página', C + 'input.label', S + 'background.body', 4.5],
  ['Campo: dica / página', C + 'input.hint', S + 'background.body', 4.5],
  ['Campo: erro / página', C + 'input.error-text', S + 'background.body', 4.5],
  ['Campo: borda / fundo do campo', C + 'input.border', C + 'input.bg', 3],
  ['Campo: borda / página', C + 'input.border', S + 'background.body', 3],
  ['Campo: borda de foco / fundo', C + 'input.border-focus', C + 'input.bg', 3],
  ['Campo: borda de erro / fundo', C + 'input.border-error', C + 'input.bg', 3],
  ['Link / página', C + 'link.text', S + 'background.body', 4.5],
  ['Link / superfície', C + 'link.text', S + 'background.surface', 4.5],
  ['Link hover / página', C + 'link.text-hover', S + 'background.body', 4.5],
  ['Navegação: texto / fundo', C + 'nav.text', C + 'nav.bg', 4.5],
  ['Navegação: ativo / fundo', C + 'nav.text-active', C + 'nav.bg', 4.5],
  ['Navegação: indicador / fundo', C + 'nav.indicator', C + 'nav.bg', 3],
  ['Alerta sucesso: texto / fundo', C + 'alert.success-text', C + 'alert.success-bg', 4.5],
  ['Alerta aviso: texto / fundo', C + 'alert.warning-text', C + 'alert.warning-bg', 4.5],
  ['Alerta erro: texto / fundo', C + 'alert.error-text', C + 'alert.error-bg', 4.5],
  ['Alerta info: texto / fundo', C + 'alert.info-text', C + 'alert.info-bg', 4.5],
  ['Alerta sucesso: borda / fundo', C + 'alert.success-border', C + 'alert.success-bg', 3],
  ['Alerta aviso: borda / fundo', C + 'alert.warning-border', C + 'alert.warning-bg', 3],
  ['Alerta erro: borda / fundo', C + 'alert.error-border', C + 'alert.error-bg', 3],
  ['Alerta info: borda / fundo', C + 'alert.info-border', C + 'alert.info-bg', 3],
  ['Status cheio: texto / sucesso', S + 'on.success', S + 'success', 4.5],
  ['Status cheio: texto / aviso', S + 'on.warning', S + 'warning', 4.5],
  ['Status cheio: texto / erro', S + 'on.error', S + 'error', 4.5],
  ['Status cheio: texto / info', S + 'on.info', S + 'info', 4.5],
  ['Rótulo "exemplo": texto / fundo', C + 'sample-label.text', C + 'sample-label.bg', 4.5],
  ['Foco / página', 'semantic.focus.outline-color', S + 'background.body', 3],
  ['Foco / superfície', 'semantic.focus.outline-color', S + 'background.surface', 3],
  ['Foco / fundo da marca', 'semantic.focus.outline-color', S + 'background.brand', 3],
];

const md = process.argv.includes('--md');
let failures = 0;
if (md) console.log('| Par | Cores | Razão | Mínimo | Resultado |\n|---|---|---|---|---|');
for (const [label, fg, bg, min] of pairs) {
  const [a, b] = [resolve(fg), resolve(bg)];
  const r = ratio(a, b);
  const ok = r >= min;
  if (!ok) failures++;
  console.log(
    md
      ? `| ${label} | \`${a}\` / \`${b}\` | ${r.toFixed(2)}:1 | ${min}:1 | ${ok ? 'passa' : '**FALHA**'} |`
      : `${ok ? 'ok   ' : 'FALHA'} ${r.toFixed(2).padStart(5)}:1 (mín ${min}) ${label}  ${a} / ${b}`,
  );
}
if (failures) {
  console.error(`\n${failures} par(es) abaixo do mínimo WCAG 2.2 AA.`);
  process.exit(1);
}
