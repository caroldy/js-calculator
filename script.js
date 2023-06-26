let screen = document.getElementById('result');
let expression = '';

function appendValue(value) {
  expression += value;
  screen.innerText = expression;
}
function clearScreen() {
    expression = '';
    screen.innerText = '0';
  }
  
  function calculate() {
    try {
      const result = eval(expression);
      screen.innerText = result;
      expression = '';
    } catch (error) {
      screen.innerText = 'Error';
      expression = '';
    }
  }