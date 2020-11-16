function insertionSort(array) {
  // Only change code below this line
  
  for (let i=1;i<array.length;i++) {
    for (let j=0;j<i;j++) {

      if (array[i]<array[j]) {
              
        array = array.slice(0,j)
                     .concat([array[i]])
                     .concat(array.slice(j,i))
                     .concat(array.slice(i+1));
        break;
      }
    }
  }
  return array;
  // Only change code above this line
}


console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
