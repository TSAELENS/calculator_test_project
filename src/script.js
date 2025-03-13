window.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', () => {
      const input1 = Number(document.getElementById('input1').value);
      const input2 = Number(document.getElementById('input2').value);
      const sum = input1 + input2;
      document.getElementById('result').textContent = sum;
    });
  });
  