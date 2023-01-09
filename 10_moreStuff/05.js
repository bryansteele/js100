function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// converts a string into an array of words, reverses that array, and then
// returns a new array that contains the lengths of the words.


console.log(doSomething("Pursuit of happiness")); // => [ 9, 2, 7 ]