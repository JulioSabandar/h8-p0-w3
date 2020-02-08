function groupAnimals(animals) {
  // you can only write your code here!
  var array = [];
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  for(i = 0; i < alpha.length; i++) {
    var temp = [];
    for(j = 0; j< animals.length; j++) {
      if (alpha[i] == animals[j][0]) {
        temp.push(animals[j]);
      }
      if (j+1 == animals.length && temp.length > 0) {
        array.push(temp);
      }
    }
  }
  return array;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
