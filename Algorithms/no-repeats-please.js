function heap(arr) {
  let perm = [];
  let m = arr.length;
  (function heapk(k,arr) {
  if (k==1) {
    perm.push(arr.slice());
  } else {
    heapk(k-1,arr);
    for (let i=0;i<k-1;i++) {
      if (k%2==0) {
        [arr[i],arr[k-1]] = [arr[k-1],arr[i]];
      } else {
        [arr[0],arr[k-1]] = [arr[k-1],arr[0]];
      }
      heapk(k-1,arr);
      }
    }
  })(m,arr);
  return perm;
}

console.log(heap([1,2,3]));

function permAlone(str) {
  return heap(str.split('')).filter(word => {
    for (let i=0;i<word.length-1;i++) {
      if (word[i]==word[i+1]) {
        return false;
      }
    }
    return true;
  }).length;
}

console.log(permAlone('aab'));
