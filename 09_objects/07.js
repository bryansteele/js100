let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;



let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// qux
// qux
// foo
// bar

// The 1st one only iterate over myObj very own properties. Not it's prototype.
// The 2nd one iterates over all of the object's keys, including those in the
// prototype.