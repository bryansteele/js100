let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// logs 1 - The variable bar that is created inside the function can not be
// seen from outside of the function.