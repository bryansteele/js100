function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*
Not Empty is the output - 0, -0, 0n, '', underfined, Null and NaN are all
FALSY. Everything else in JavaScript evaluyates as True.
*/
