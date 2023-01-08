function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// Variables = bar, arg1, arg2, foo, qux, result
// Property Nmaes = abc, def, ghi, jkl, mno, prq, 0, 1, 2, 3
// Primitive Values = 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', 'Antonina'
                // 'abc', 'def', 'ghi', 'jkl'. 'mno', 'pqr', '0', '1', '2', '3'
// Objects = [1, 2, 3, [4, 5, 6]], [4, 5, 6],
          // {
          //   abc: [1, 2, 3, [4, 5, 6]],
          //   def: null,
          //   ghi: NaN,
          //   jkl: foo,
          //   mno: arg1,
          //   pqr: arg2,
          // };