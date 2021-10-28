const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false