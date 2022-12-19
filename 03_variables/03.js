{
  let foo = 'bar';
}

console.log(foo);

// ReferenceError: foo is not defined
// foo is created within a block. Therefore, it can't be seen from outside,
// to log.