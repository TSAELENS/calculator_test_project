const { test, expect } = require('@playwright/test');

test('affiche le résultat de l\'addition sur l\'interface', async ({ page }) => {
  await page.goto('http://localhost:5500/src/index.html');
  await page.fill('#input1', '2');
  await page.fill('#input2', '3');
  await page.click('#addButton');
  const result = await page.textContent('#result');
  expect(result).toBe('5');
});
