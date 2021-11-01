const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr1.length; i++) {
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

const letterPositions = function(str) {
  str = str.replace(" ", "");
  const result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]] === undefined) {
      result[str[i]] = [];
      result[str[i]].push(i);
    } else {
      result[str[i]].push(i);
    }
    
  }
  return result;
};


assertArraysEqual(letterPositions("hello").e, [1]);


module.exports = letterPositions;