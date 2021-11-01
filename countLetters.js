const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  const count = {};
     
  for (let letter of word) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
    
    console.log(letter);
  }

  return count;

};

countLetters("LHL");

module.exports = countLetters