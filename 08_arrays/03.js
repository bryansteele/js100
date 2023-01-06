let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// let arr = myArray.flat();
// for (let i = 0; i < arr.length; i++) {
//   let myArr = arr[i];
//   if (myArr % 2 === 0) {
//     console.log(myArr);
//   }
// }

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray[i].length; j ++) {
//     let arr = myArray[i][j];
//     if (arr % 2 === 0) {
//       console.log(arr);
//     }
//   }
// }

myArray.forEach(nest => {
  nest.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
}); 
