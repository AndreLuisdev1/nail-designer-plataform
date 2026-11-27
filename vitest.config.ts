import {defineConfig} from 'vitest/config';

export default defineConfig({
  oxc: {jsx: {runtime: 'automatic'}},
  resolve: {alias: {'@': new URL('./src', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')}},
  test: {environment: 'jsdom', globals: true, include: ['src/**/*.test.{ts,tsx}'], setupFiles: ['./tests/vitest.setup.ts']},
});
