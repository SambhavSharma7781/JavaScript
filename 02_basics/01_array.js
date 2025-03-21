const array = [0,1,2,3,4,5]
const array2 = new Array(0,1,2,3,4,5)
// console.log(array);
// console.log(array2);

// Array Methods

// array.push(6)
// array.pop()

array.unshift(9)  // adds the element in the starting of the array
array.shift()     // shifts the value of the array

// console.log(array.includes(9));
// console.log(array.indexOf(5));

const newarray = array.join()  // values in the array gets converted into strings into a new array

// console.log(array);
// console.log(newarray);
// console.log(typeof newarray);

console.log("A " , array);

const myn1 = array.slice(1,3);
console.log(myn1);
console.log("B " ,array);

const myn2 = array.splice(1,3)
console.log("C " , array);
console.log(myn2);










