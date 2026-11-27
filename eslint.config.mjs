import next from 'eslint-config-next';
import stylex from '@stylexjs/eslint-plugin';

export default [
  {ignores: ['.next/**', 'node_modules/**', 'src/theme/built/**', '.claude/**', 'design-system/brand/**', 'playwright-report/**', 'test-results/**']},
  ...next,
  {plugins: {'@stylexjs': stylex}, rules: {'@stylexjs/valid-styles': 'error'}},
];
