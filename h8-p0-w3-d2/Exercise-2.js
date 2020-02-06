function balikString(string) {
  // you can only write your code here!
  stringBalik = '';
  for(i=string.length-1; i>=0; i--) {
    stringBalik += string[i];
  }
  return stringBalik;
}

console.log(balikString('Hello World!'))
