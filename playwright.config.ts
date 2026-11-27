import {defineConfig, devices} from '@playwright/test';

// Usa o Edge instalado (sem baixar navegador). No CI, troque o channel por 'chromium' após `npx playwright install`.
const channel = process.env.CI ? undefined : 'msedge';

export default defineConfig({
  testDir: 'e2e',
  webServer: {command: 'npm run build && npm run start -- -p 3100', url: 'http://localhost:3100', reuseExistingServer: !process.env.CI, timeout: 240_000},
  use: {baseURL: 'http://localhost:3100'},
  projects: [
    {name: 'celular', use: {...devices['Pixel 7'], channel}},
    {name: 'desktop', use: {...devices['Desktop Chrome'], channel}},
  ],
});
