function oddLengths(array) {
  return array.reduce((accum, elem) => {
    let length = elem.length;
    if (length % 2 !== 0) {
      accum.push(length);
    }

    return accum;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
