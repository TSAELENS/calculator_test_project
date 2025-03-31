function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

class Historique {
  constructor() {
    this.calculs = [];
  }
  ajouter(calcul) {
    this.calculs.push(calcul);
  }
  lister() {
    return this.calculs;
  }
  effacer() {
    this.calculs = [];
  }
}

module.exports = { addition, soustraction, multiplication, Historique };
