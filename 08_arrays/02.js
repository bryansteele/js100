let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (let i = 0; i < myArray.length; i++) {
  let nums = myArray[i];
  if (nums % 2 === 0) {
    console.log(nums);
  }
}

myArray.forEach((nums) => {
  if (nums % 2 === 0) {
    console.log(nums);
  }
});