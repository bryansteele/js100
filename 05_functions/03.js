function multiply(num1, num2) {
  return num1 * num2
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

let num1 = getNumber('What is the first number? ');
let num2 = getNumber('What is the second number? ');
console.log(`${num1} x ${num2} = ${num1 * num2}`);