//Array
const myArr= [1,2,3,4,5,6,7]
// console.log(myArr[2]); 
const myn2= new Array(1,2,3,5)
// console.log(myn2);
console.log(myArr);
myArr.pop();
// Pop use simply remove last value of array.

myArr.push(9)
//push used to put number into array
console.log(myArr);
myArr.unshift(5);
// Unshife is used to add number at first please
// myArr.shift();
// shift is used to remove
console.log(myArr)
// myArr.unshift();
console.log(myArr.includes(9))
// includes used for check is number in the array. it return true or false.
console.log(myArr.indexOf(4));
const newArr=myArr.join()
// join is used for convert into string from int.
console.log(typeof newArr);
const myn4= myArr.slice(3,7);
//slice is work for range and it can't print last element of range
console.log(myn4)
console.log(myArr);
const myn3= myArr.splice(3);
// splice is used for remove used element from array and also first element = range from and last element = number of range to prt.
console.log(myn3)
console.log(myArr);
