
function middle(arr) {
  // For arrays with one or two elements, there is no middle. Return an empty array. //
  if (arr.length < 3) {
    return [];
  
    //For arrays with an even number of elements, an array containing the two elements in the middle should be returned //
  } else if (arr.length % 2 === 0) {
    return [array[Math.round(arr.length / 2) - 1], array[Math.round(arr.length / 2)]];
   

    // For arrays with odd number of elements, an array containing a single middle element should be returned. //

  } else {
    return [array[Math.floor(arr.length / 2)]];
  }
  
}
