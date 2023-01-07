let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// let keys = Object.keys(obj);
// let capKeys = keys.map(key => key.toUpperCase());
// console.log(capKeys)

let keyCaps = [];
let objKeys = Object.keys(obj);
objKeys.forEach(key => keyCaps.push(key.toUpperCase()));

console.log(keyCaps);