const eqArrays = function(arr1, arr2) {
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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));

  }
  return results;
};

const results1 = map(words, word => word[0]);

console.log(results1);
console.log(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(eqArrays(results1, [ 'g', 'c', 't', 'm', 'f' ]));
console.log(assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true));
console.log(assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 'f' ]), false));