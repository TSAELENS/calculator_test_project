import { test, expect } from '@playwright/test';

test('affiche le résultat de l\'addition sur l\'interface', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await page.waitForSelector('#input1');
  await page.fill('#input1', '2');
  await page.fill('#input2', '3');
  await page.click('#addButton');
  const result = await page.textContent('#result');
  expect(result).toBe('5');
});

test('affiche le résultat de la soustraction sur l\'interface', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await page.waitForSelector('#input1');
  await page.fill('#input1', '5');
  await page.fill('#input2', '2');
  await page.click('#subButton');
  const result = await page.textContent('#result');
  expect(result).toBe('3');
});

test('affiche le résultat de la multiplication sur l\'interface', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await page.waitForSelector('#input1');
  await page.fill('#input1', '4');
  await page.fill('#input2', '3');
  await page.click('#mulButton');
  const result = await page.textContent('#result');
  expect(result).toBe('12');
});

test('Reprendre différents calculs depuis l\'historique', async ({ page }) => {
  // Ouvrir la page 
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await page.waitForSelector('#input1');

  // Addition
  await page.fill('#input1', '5');
  await page.fill('#input2', '10');
  await page.click('#addButton');
  let result = await page.textContent('#result');
  expect(result).toBe('15');

  // Soustraction
  await page.fill('#input1', '20');
  await page.fill('#input2', '5');
  await page.click('#subButton');
  result = await page.textContent('#result');
  expect(result).toBe('15');

  // Multiplication
  await page.fill('#input1', '3');
  await page.fill('#input2', '4');
  await page.click('#mulButton');
  result = await page.textContent('#result');
  expect(result).toBe('12');

  // Vérifier l'historique
  const historiqueItems = await page.locator('#historique div');
  const historiqueCount = await historiqueItems.count();
  expect(historiqueCount).toBe(3);

  // Vérifier chaque élément de l'historique
  const firstItem = historiqueItems.nth(0);
  const secondItem = historiqueItems.nth(1);
  const thirdItem = historiqueItems.nth(2);

  expect(await firstItem.textContent()).toBe('5 + 10 = 15');
  expect(await secondItem.textContent()).toBe('20 - 5 = 15');
  expect(await thirdItem.textContent()).toBe('3 * 4 = 12');

  // Cliquer sur le premier élément de l'historique (addition)
  await firstItem.click();
  let input1Value = await page.inputValue('#input1');
  let input2Value = await page.inputValue('#input2');
  expect(input1Value).toBe('5');
  expect(input2Value).toBe('10');

  // Cliquer sur le deuxième élément de l'historique (soustraction)
  await secondItem.click();
  input1Value = await page.inputValue('#input1');
  input2Value = await page.inputValue('#input2');
  expect(input1Value).toBe('20');
  expect(input2Value).toBe('5');

  // Cliquer sur le troisième élément de l'historique (multiplication)
  await thirdItem.click();
  input1Value = await page.inputValue('#input1');
  input2Value = await page.inputValue('#input2');
  expect(input1Value).toBe('3');
  expect(input2Value).toBe('4');
});
