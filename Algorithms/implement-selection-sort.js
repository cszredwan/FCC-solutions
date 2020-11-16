function selectionSort(array) {

  // Only change code below this line
  let k = 0;
  for (let i=k;i<array.length-1;i++) {
    let minIndex = k;
    let minValue = array[i];
    for (let j=k+1;j<array.length;j++) {
      if (array[j]<minValue) {
        minValue = array[j];
        minIndex = j;
      }
    if (minValue < array[i]) {
      [array[i],array[minIndex]] = [array[minIndex],array[i]];
    }
    }
    k++;
    console.log(array);
  }
  return array;
  // Only change code above this line
}

var arr = [1, 4, 2, 8, 345, 123, 43, 32,
 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(selectionSort(arr));
