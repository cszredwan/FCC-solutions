function aux(arr1, arr2) {
  // Get two ordered arrays and 
  // merge into a new sorted array

  let newArr = [];

  let index1 = 0;
  let index2 = 0;

  for (let i=0; i < arr1.length + arr2.length; i++) {
    if (   index2 == arr2.length 
        || arr1[index1] <= arr2[index2] ) {
      newArr.push(arr1[index1]);
      index1++;
    } else if ( index1 == arr1.length 
        || arr2[index2] <= arr1[index1]) {
        newArr.push(arr2[index2]);
        index2++;
    }
  }

  return newArr;
}

//console.log(aux([],[]));

function mergeSort(array) {
  // Only change code below this line

  if (array.length==1) {
    return array;
  } else {
    let halfIndex = Math.floor(array.length/2);
    let firstHalf = array.slice(0,halfIndex);
    let secondHalf = array.slice(halfIndex);
    return aux( mergeSort(firstHalf),
                mergeSort(secondHalf));
  }
  // Only change code above this line
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
