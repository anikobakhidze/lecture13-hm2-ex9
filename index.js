let arrOne = [1, 2, 3];
let arrTwo = [2, 30, 1];
let arrConc = arrOne.concat(arrTwo);
let uniqueArr = [...new Set(arrConc)];
console.log(uniqueArr);
