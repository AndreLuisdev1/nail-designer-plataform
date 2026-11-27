import {expect, test} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const paginas = ['/', '/servicos', '/portfolio', '/agendar', '/sobre', '/contato', '/privacidade', '/termos'];

for (const caminho of paginas) {
  test(`${caminho}: acessível, sem rolagem horizontal e sem terceiros`, async ({page}) => {
    const externas: string[] = [];
    page.on('request', (r) => {
      const host = new URL(r.url()).hostname;
      if (!['localhost', '127.0.0.1'].includes(host) && !r.url().startsWith('data:')) externas.push(r.url());
    });
    await page.goto(caminho);
    await expect(page.locator('h1')).toHaveCount(1);

    const axe = await new AxeBuilder({page})
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(axe.violations.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);

    for (const largura of [320, 390]) {
      await page.setViewportSize({width: largura, height: 800});
      const sobra = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(sobra, `rolagem horizontal em ${largura}px`).toBe(0);
    }
    expect(externas).toEqual([]);
  });
}

test('agendamento a partir de um horário da página inicial', async ({page}) => {
  await page.goto('/');
  await page
    .getByRole('link', {name: /^Agendar Alongamento em gel em/})
    .first()
    .click();
  await expect(page.getByRole('heading', {name: 'Seus dados'})).toBeVisible();

  // Enviar vazio mostra como corrigir cada campo.
  await page.getByRole('button', {name: 'Continuar'}).click();
  await expect(page.getByText('Digite seu nome.', {exact: true})).toBeVisible();
  await expect(
    page.getByText('Digite o celular com DDD, por exemplo 11 91234-5678.', {exact: true}),
  ).toBeVisible();

  await page.getByRole('textbox', {name: /^Nome/}).fill('Ana Souza');
  await page.getByRole('textbox', {name: /^E-mail/}).fill('ana@exemplo.com');
  await page.getByRole('textbox', {name: /^Celular com DDD/}).fill('11 91234-5678');
  await page.getByRole('textbox', {name: /^Cupom/}).fill('bemvinda10');
  await page.getByRole('button', {name: 'Aplicar'}).click();
  await expect(page.getByText('Cupom BEMVINDA10 aplicado: 10% de desconto.')).toBeVisible();
  await page.getByRole('checkbox', {name: /Li e aceito os termos de uso/}).check();
  await expect(page.getByRole('checkbox', {name: /promoções/})).not.toBeChecked();
  await page.getByRole('button', {name: 'Continuar'}).click();

  await expect(page.getByRole('heading', {name: 'Confira e confirme'})).toBeVisible();
  await expect(page.getByText('R$ 162 (era R$ 180)')).toBeVisible();
  await page.getByRole('button', {name: 'Confirmar agendamento'}).click();
  await expect(page.getByRole('heading', {name: 'Pronto, Ana.'})).toBeVisible();
  await expect(page.getByText('Isto é uma demonstração')).toBeVisible();

  // Nada pessoal no navegador além da sessão (RNF-04) nem na URL.
  expect(await page.evaluate(() => localStorage.length + sessionStorage.length)).toBe(0);
  expect(page.url()).not.toContain('ana');
});

test('parâmetros de URL inválidos são ignorados', async ({page}) => {
  await page.goto('/agendar?servico=%3Cscript%3E&data=2099-01-01&hora=25:00');
  await expect(page.getByRole('heading', {name: 'Qual serviço você quer?'})).toBeVisible();
  await page.getByRole('button', {name: 'Continuar'}).click();
  await expect(page.getByRole('alert').filter({hasText: 'Escolha um serviço para continuar.'})).toBeVisible();
});
