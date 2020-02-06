function pasanganTerbesar(num) {
  // you can only write your code here!
  var stringNum = ''+num;
  var greatestNumber = 0;
  var candidateNumber = 0;
  for (i = 0; i<stringNum.length-1; i++) {
    var candidateNumber = stringNum[i] + stringNum[i+1]
    if (candidateNumber > greatestNumber) {
      greatestNumber = candidateNumber;
    }
  }
  return greatestNumber;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
