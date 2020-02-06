function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var isDeretAritmatika = true;
  var diff1 = arr[1] - arr[0];
  for (i = 2; i<arr.length; i++) {
    var diff2 = arr[i] - arr[i-1];
    if (diff2 !== diff1) {
      isDeretAritmatika = false;
      break;
    }
  }

  return isDeretAritmatika;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
