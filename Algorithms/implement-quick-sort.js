function quickSort(array) {
  // Only change code below this line

  if (array.length <= 1) {
    return array;
  }

  let pivot = Math.floor(Math.random() * array.length);

  let smaller = array.filter((num,index) =>
    num <= array[pivot] && index != pivot);
  let bigger = array.filter(num => num > array[pivot]);

  return quickSort(smaller)
           .concat([array[pivot]])
           .concat(quickSort(bigger));
         
  // Only change code above this line
}
     
console.log(quickSort([1,3,2.6,6]));
