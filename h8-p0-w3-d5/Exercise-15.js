function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  var groupedAnimals = [[]];
  for(i = 0; i<animals.length; i++) {
    firstLetter = animals[i][0];
    for (j=0; j<groupedAnimals.length; j++) {
      if (groupedAnimals[j] == '') {
        groupedAnimals[j].push(animals[i]);
        break;
      }
      if (groupedAnimals[j][0][0] == firstLetter) {
        groupedAnimals[j].push(animals[i]);
        break;
      }
      if (j == groupedAnimals.length-1) {
        groupedAnimals[j].push(animals[i]);
      }
    }
    groupedAnimals.push([])
  }
  var spliced = 0;
  var start;
  var bool = false;
  for (k = 0; k<groupedAnimals.length; k++) {
    if (groupedAnimals[k] == '') {
      spliced++;
      if (bool == false) {
        bool = true;
        start = k;
      }
    }
  }
  groupedAnimals.splice(start,spliced);
  return groupedAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
