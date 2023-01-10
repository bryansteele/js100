function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

// or

// function isNegativeZero(value) {
//   return (value === 0) && (1 / value === -Infinity);
// }


console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));
console.log(isNegativeZero('asdf'));