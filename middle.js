const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  // For arrays with one or two elements, there is no middle. Return an empty array. //
  if (arr.length < 3) {
    return [];
  
    //For arrays with an even number of elements, an array containing the two elements in the middle should be returned //
  } else if (arr.length % 2 === 0) {
    return [arr[Math.round(arr.length / 2) - 1], arr[Math.round(arr.length / 2)]];
   

    // For arrays with odd number of elements, an array containing a single middle element should be returned. //

  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
  
};

module.exports = middle;