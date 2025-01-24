function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
No - The left/right on lines 1 & 2 are local variable to the function. The ones
on lines 10 & 11 are initialized on lines 10 & 11 and they are global.
*/