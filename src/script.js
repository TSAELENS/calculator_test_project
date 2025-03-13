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
    historiqueElement.innerHTML = '';
  
    historique.lister().forEach(calc => {
      const div = document.createElement('div');
      div.textContent = calc;
      div.style.cursor = 'pointer';
  
      div.addEventListener('click', () => {
        const parts = calc.split('=');
        if (parts.length === 2) {
          const expression = parts[0].trim(); 
          let operator;
          if (expression.includes('+')) {
            operator = '+';
          } else if (expression.includes('-')) {
            operator = '-';
          } else if (expression.includes('*')) {
            operator = '*';
          }
  
          if (operator) {
            const numbers = expression.split(operator);
            if (numbers.length === 2) {
              document.getElementById('input1').value = numbers[0].trim();
              document.getElementById('input2').value = numbers[1].trim();
              if(operator === '+') document.getElementById('addButton').click();
              else if(operator === '-') document.getElementById('subButton').click();
              else if(operator === '*') document.getElementById('mulButton').click();
            }
          }
        }
      });
  
      historiqueElement.appendChild(div);
    });
  }
  


  