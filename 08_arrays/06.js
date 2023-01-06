let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let sizeArr = array.map(element => element.length);
  return sizeArr.filter(el => el % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]