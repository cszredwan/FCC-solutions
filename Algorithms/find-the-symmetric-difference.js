function sym(...args) {
  if (args.length == 2) {
    let myArr = [];
    for (let index in args[0]) {
      if (args[1].indexOf(args[0][index]) == -1 && 
      myArr.indexOf(args[0][index]) == -1) {
        myArr.push(args[0][index]);
      }
    }
    for (let index in args[1]) {
      if (args[0].indexOf(args[1][index]) == -1 && 
      myArr.indexOf(args[1][index]) == -1) {
        myArr.push(args[1][index]);
      }
    }
    return myArr;
  } else {
    return sym(sym(args[0],args[1]), ...(args.slice(2)));
  }

}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
