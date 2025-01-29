function evenOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("You didn't enter an integer");
    return;
  }

  console.log(num % 2 === 0 ? 'even' : 'odd');
}

evenOdd(3);
evenOdd(8);
evenOdd('d');
