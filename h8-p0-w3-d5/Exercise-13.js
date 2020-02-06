function targetTerdekat(arr) {
  // you can only write your code here!
  var posisiX = [];
  let posisiO;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      posisiX.push(i);
    }
    if (arr[i] === 'o') {
      posisiO = i;
    }
  }
  console.log(posisiX);
  console.log(posisiO);
  if (posisiX.length === 0) {
    jarakTerdekat = 0;
  }
  else {
    jarakTerdekat = 999999999999999;
    for (j = 0; j < posisiX.length; j++) {
      jarakBaru = Math.abs(posisiO - posisiX[j])
      if (jarakBaru < jarakTerdekat) {
        jarakTerdekat = jarakBaru;
      }
    }
  }
  return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
