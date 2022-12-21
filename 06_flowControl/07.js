function allCaps(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(allCaps("Sue Smith"));
console.log(allCaps("Sue Robertson"));
console.log(allCaps("Joe Stevens"));