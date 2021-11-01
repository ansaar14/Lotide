const assertEqual = require('../assertEqual');

const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false)
assertEqual(eqArrays([1, 2, 3], [4, 5, 7]), false); 
assertEqual(eqArrays([100, 500, 3], [2, 4, 400, 700]), true); 