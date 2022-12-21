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


//     GLOBAL                                      LOCAL

// 1.  multiply                                    left, right
// 2.                                              product, left, right
// 3.  product

// 6.  getNumber                                   prompt
// 7.  parseFloat, question                        prompt

// 10. left, getNumber
// 11. right, getNumber
// 12. console, left, right, multiply, left, right