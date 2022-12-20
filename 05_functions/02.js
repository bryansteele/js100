function greeter(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name
}

let first = greeter('What is your first name? ');
let last = greeter('What is your last name? ');
console.log(`Hello, ${first} ${last}!`);