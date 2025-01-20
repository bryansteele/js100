let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// It returns bar
// Line 3 declares a new variable foo that hides the variabl;e from line 1.
// which gets initialized to 'qux' but is out of scope to line 6.
// Line 6 can only access the line 1 variable foo.