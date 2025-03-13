
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
  });
  