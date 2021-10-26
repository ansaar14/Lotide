const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};


function eqArrays(arr1,arr2) {
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

/* Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array. */

// function hich will return a subset of a given array, removing unwanted elements. //

function without(source, itemsToRemove) {
  //store array //
  let newArr = [];
// for loop //
  for (i = 0; i < source.length; i++) {
// conditionals, if elements from source are not present in itemsToRemove//
    if(!itemsToRemove.includes(source[i])) {

// return new array with those elements
    newArr.push(source[i]);
}
}
    return newArr;
};

