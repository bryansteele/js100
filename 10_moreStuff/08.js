function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(null));
console.log(isNotANumber(5));
console.log(isNotANumber(0));
console.log(isNotANumber(''));
console.log(isNotANumber(NaN));


// This works since NaN is the only JS value that is not === to itself.