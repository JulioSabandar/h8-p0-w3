function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var isDeretGeometri = true;
  var multi1 = arr[1] / arr[0];
  for (i = 2; i<arr.length; i++) {
    var multi2 = arr[i] / arr[i-1];
    if (multi2 !== multi1) {
      isDeretGeometri = false;
      break;
    }
  }

  return isDeretGeometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
