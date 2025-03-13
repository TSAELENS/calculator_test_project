import { test, expect } from '@playwright/test';

test('affiche le résultat de l\'addition sur l\'interface', async ({ page }) => {
  await page.goto('http://localhost:5500/src/index.html');
  await page.waitForSelector('#input1');
  await page.fill('#input1', '2');
  await page.fill('#input2', '3');
  await page.click('#addButton');
  const result = await page.textContent('#result');
  expect(result).toBe('5');
});

test('affiche le résultat de la soustraction sur l\'interface', async ({ page }) => {
  await page.goto('http://localhost:5500/src/index.html');
  await page.waitForSelector('#input1');
  await page.fill('#input1', '5');
  await page.fill('#input2', '2');
  await page.click('#subButton');
  const result = await page.textContent('#result');
  expect(result).toBe('3');
});

test('affiche le résultat de la multiplication sur l\'interface', async ({ page }) => {
  await page.goto('http://localhost:5500/src/index.html');
  await page.waitForSelector('#input1');
  await page.fill('#input1', '4');
  await page.fill('#input2', '3');
  await page.click('#mulButton');
  const result = await page.textContent('#result');
  expect(result).toBe('12');
});
