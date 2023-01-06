let array = [3, 5, 7];

// function sumOfSquares(arr) {
//   let squares = arr.map(num => num ** 2);
//   let sumOfSquares = squares.reduce(
//     (accumulator, currentValue) => accumulator + currentValue);

//   return sumOfSquares;
// }


function sumOfSquares(num) {
  return num.reduce((accum, numNum) => {
    return accum + numNum ** 2;
  }, 0);
}

console.log(sumOfSquares(array)); // => 83