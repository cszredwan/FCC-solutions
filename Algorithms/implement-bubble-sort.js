function bubbleSort(array) {
  // Only change code below this line
  let k = array.length-1;

  while (k>1) {
    let isOrdered = true;
  for (let i=0;i<k;i++) {
    if (array[i]>array[i+1]) {
      [array[i],array[i+1]] = [array[i+1],array[i]];
      isOrdered = false;
    }
  }
  if (isOrdered) {
    return array;
  }
  k--;
  }
  return array;
  // Only change code above this line
}

var arr1 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(bubbleSort(arr1));
