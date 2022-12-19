let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);


// bar - The console.log() can't see the foo variable inside the block.