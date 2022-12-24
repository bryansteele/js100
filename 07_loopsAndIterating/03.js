let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Line 3 always reassigns the counter variable to 1. Line 7, never becomes true.
