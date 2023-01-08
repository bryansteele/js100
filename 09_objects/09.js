let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);


// hi
// hello
// Objects are mutable and strings are not. Line 9 mutates line 2, but line 10
// does not mutate line 6.