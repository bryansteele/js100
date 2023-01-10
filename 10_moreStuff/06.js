let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, reg) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(allMatches(words, /lab/));