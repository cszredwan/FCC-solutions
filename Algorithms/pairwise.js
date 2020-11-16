function pairwise(arr, arg) {

  let pairs = [];
  let usedIndex = [];

  for (let i=0;i<arr.length-1;i++) {
    if (usedIndex.indexOf(i)>-1) {
      continue;
    }
    for (let j=1;j<arr.length;j++) {
      if (i==j) {
        continue;
      }
      if (usedIndex.indexOf(j)>-1) {
        continue;
      }      
      if (arr[i]+arr[j] == arg) {
        pairs.push([i,j]);
        usedIndex.push(i);
        usedIndex.push(j);
        break;
      }
    }
  }

  return pairs.reduce((sum,pair)=>sum+pair[0]+pair[1],0);
}

console.log(pairwise([1, 3, 2, 4], 4));
