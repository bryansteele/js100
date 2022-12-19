const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);


// Good Morning, Victor
// Good Afternoon, Victor
// Good Evening, Victor
// /Users/bryan/js100/03_variables/04.js:6
// NAME = 'Joe';
//      ^

// TypeError: Assignment to constant variable.



// Greets Victor 3x. Then raises an error on line 6. You can't reassign a
// constant after defining it. Must use a regular variable instead.