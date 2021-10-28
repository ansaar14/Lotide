const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: " + inspect(actual) + " === " + inspect(expected));
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + inspect(actual) + " !== " + inspect(expected));
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  

  //check if objects are equal in length //
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; //assertion failed, objects not equal

  } else {

    for (let key in object1) {
    // if key of Object is an array
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) { //check to make sure both objects are arrays //
        if (eqArrays(object1[key], object2[key]))
          return false;
        // call eqArrays on both arrays
      } else {

        if (object1[key] !== object2[key]) {
          return false; // assertion failed, objects not equal in values
        }
      }
    }
    return true; // assertion passed: objects are equal yay! //
  }
};
