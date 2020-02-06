function angkaPalindrome(num) {
  // you can only write your code here!
  var isTheNextPalindrome = false;

  while (isTheNextPalindrome === false) {
    num++;
    stringedNumber=''+num;
    reversedNumber='';

    for(i=stringedNumber.length-1; i>=0; i--) {
      reversedNumber += stringedNumber[i];
    }

    if (stringedNumber === reversedNumber) {
      isTheNextPalindrome = true;
    }

  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
