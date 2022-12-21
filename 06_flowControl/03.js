function isInt(num) {
  return Number.isInteger(num);
}

function evenOrOdd(num) {
  if (!isInt(num)) {
    console.log('Error, that is not a number. Good bye!');
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(5)
evenOrOdd('d')
evenOrOdd(4)