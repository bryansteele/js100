function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();


// Variables: hello, xyzzy, greeting, name, howdy, foo
// Property Names: a, b, c, d, 0, 1, 2
// Primitive values: undefined, ' ', 1, 2, 3, 4, 5, 'Hi', 'Grace', 'a', 'b',
                            //  'c', 'd', 0, 1, 2
// Objects: hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, 
        //  [3, 4, 5], {}
