let bar = 1;

function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
1 is logged to the console. Executing the foo function makes no difference on
the output because the variable bar that is initialized inside the function is
not seen by the conole.log. 
*/