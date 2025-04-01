
const { addition, soustraction, multiplication, Historique } = require('../../src/calculator');

describe('Opérations de la calculatrice', () => {
  test('addition de 2 et 3 donne 5', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('soustraction de 5 et 2 donne 3', () => {
    expect(soustraction(5, 2)).toBe(3);
  });

  test('multiplication de 4 et 3 donne 12', () => {
    expect(multiplication(4, 3)).toBe(12);
  });
});

test('addition avec zéro', () => {
  expect(addition(0, 0)).toBe(0);
  expect(addition(0, 5)).toBe(5);
});

test('multiplication par zéro', () => {
  expect(multiplication(0, 5)).toBe(0);
  expect(multiplication(5, 0)).toBe(0);
});

test('soustraction qui retourne un nombre négatif', () => {
  expect(soustraction(2, 5)).toBe(-3);
});

test('addition de grands nombres', () => {
  expect(addition(1000000, 1000000)).toBe(2000000);
});

test('multiplication de grands nombres', () => {
  expect(multiplication(10000, 1000)).toBe(10000000);
});

test('addition avec des nombres décimaux', () => {
  expect(addition(1.1, 2.2)).toBeCloseTo(3.3);
});

test('multiplication avec des nombres décimaux', () => {
  expect(multiplication(1.5, 2.0)).toBeCloseTo(3.0);
});

test('soustraction avec des nombres décimaux', () => {
  expect(soustraction(5.5, 1.1)).toBeCloseTo(4.4);
});

describe('Historique des calculs', () => {
  let historique;
  
  beforeEach(() => {
    historique = new Historique();
  });
  
  test('ajouter un calcul à l\'historique', () => {
    historique.ajouter('2 + 3 = 5');
    expect(historique.lister()).toContain('2 + 3 = 5');
  });
  
  test('effacer l\'historique', () => {
    historique.ajouter('4 * 3 = 12');
    historique.effacer();
    expect(historique.lister()).toHaveLength(0);
  });

  test('ajouter plusieurs calculs à l\'historique', () => {
    historique.ajouter('2 + 3 = 5');
    historique.ajouter('4 * 3 = 12');
    historique.ajouter('5 - 1 = 4');
    expect(historique.lister()).toHaveLength(3);
  });

  test('vérifier l\'historique complet', () => {
    historique.ajouter('2 + 2 = 4');
    historique.ajouter('3 * 3 = 9');
    expect(historique.lister()).toEqual(['2 + 2 = 4', '3 * 3 = 9']);
  });

  test('historique vide par défaut', () => {
    expect(historique.lister()).toHaveLength(0);
  });
});
  