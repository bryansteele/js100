function getNumber(prompt) {
  let rl = require('readline-sync');
  return parseFloat(rl.question(prompt));
}

function multiply(numb1, numb2) {
  return numb1 * numb2;
}

let num1 = getNumber('Enter the first number: ');
let num2 = getNumber('Enter the second number: ');
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);