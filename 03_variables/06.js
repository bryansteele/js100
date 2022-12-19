const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// No error - it logs bar. Same as last ex. the console.log() can't see the
// variable inside the block.