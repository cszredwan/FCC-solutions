function getIndexToIns(arr, num) {
  let myArr = arr.slice(0,arr.length);
  myArr.sort(function(a, b){return a-b});
  for (let item in myArr) {
    if (num <= myArr[item]) {
      return parseInt(item);
    }
  }
  return arr.length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
