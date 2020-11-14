function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
arr = collection.filter( item => {
  let bool = true;
  for (let prop in source) {
    if (!(prop in item) || item[prop]!=source[prop]) {
      bool = false;
    }
  }
  return bool;
})

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
