function updateInventory(arr1, arr2) {
    let myArr = arr1.slice();

    for (let index2 in arr2) {
        let elementFoundInArr1 = false;
        for (let index1 in arr1) {
            if (arr1[index1][1]==arr2[index2][1]) {
                myArr[index1][0]+=arr2[index2][0];
                elementFoundInArr1 = true;
                break;
            }
        }
        if (!elementFoundInArr1) {
            myArr.push(arr2[index2]);
        }
    }

    return myArr.sort( (a,b)=>
        a[1].toLowerCase()>b[1].toLowerCase());
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
