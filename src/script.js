import { addition, soustraction, multiplication, Historique } from './calculator.js';

const historique = new Historique();

document.getElementById('addButton').addEventListener('click', () => {
  const a = Number(document.getElementById('input1').value);
  const b = Number(document.getElementById('input2').value);
  const result = addition(a, b);
  document.getElementById('result').textContent = result;
  historique.ajouter(`${a} + ${b} = ${result}`);
  afficherHistorique();
});

document.getElementById('subButton').addEventListener('click', () => {
  const a = Number(document.getElementById('input1').value);
  const b = Number(document.getElementById('input2').value);
  const result = soustraction(a, b);
  document.getElementById('result').textContent = result;
  historique.ajouter(`${a} - ${b} = ${result}`);
  afficherHistorique();
});

document.getElementById('mulButton').addEventListener('click', () => {
  const a = Number(document.getElementById('input1').value);
  const b = Number(document.getElementById('input2').value);
  const result = multiplication(a, b);
  document.getElementById('result').textContent = result;
  historique.ajouter(`${a} * ${b} = ${result}`);
  afficherHistorique();
});

document.getElementById('clearHistory').addEventListener('click', () => {
  historique.effacer();
  afficherHistorique();
});

function afficherHistorique() {
  const historiqueElement = document.getElementById('historique');
  historiqueElement.innerHTML = historique.lister().map(calc => `<div>${calc}</div>`).join('');
}
