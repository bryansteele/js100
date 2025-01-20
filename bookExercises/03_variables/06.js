const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// Similar to the last ex. Line 3 initializes a new constant named FOO and is
// hidden from the line 1 constant named FOO.
// Line 6 can only access the line 1 variable which has the value of 'bar'.