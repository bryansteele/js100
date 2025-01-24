function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// Nothing is logged to the console. The return statement stops the function,
// before the console.log() is able to be executed. 