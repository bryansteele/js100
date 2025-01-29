// function cappies(string) {
//   if (string.length > 10) {
//     return string.toUpperCase();
//   } else {
//     return string;
//   }
// }

// OR

function cappies(string) {
  return string.length > 10 ? string.toUpperCase() : string;
}

console.log(cappies('hello, world'));
console.log(cappies('hi'));
console.log('Goodbye');
