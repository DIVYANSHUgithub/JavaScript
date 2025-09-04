let array=[1,4,3,2,1]
array.push(8) // adds a new element to the end of the array
    //console.log(array)// [1,4,3,2,1,8]
array.pop() // removes the last element from the array
    //console.log(array) //[1,4,3,2,1]
array.unshift(4)   // adds a new element '4' to the beginning of the array
    //console.log(array)// [ 4, 1, 4, 3, 2, 1 ]
array.shift() // removes the first element from the array
    //console.log(array) //[ 1, 4, 3, 2, 1 ]
array.includes(20)// checks if an array includes a certain value
    //console.log(array.includes(20))// false
array.indexOf(20)// returns the first index at which a given element can be found in the array
    //console.log(array.indexOf(20))// -1
/* 
    // slice method
array.slice(1,4)// it prints from index a to index b except index b
    console.log(array.slice(1,4))//[ 4, 3, 2]
*/


// splice method
/* 
console.log("original array: " + array)
console.log("splice: "+array.splice(1,3))// it prints from index a to index b including index b also, and it remove elements which are spliced from the original array 
console.log("array after splice: "+array)//

console.log("array after splice: "+array)
console.log(array.splice(0,4))

*/


console.log(array.join(", "))// it joins all the elements of an array in string with a given separator
console.log(Array.isArray(array))// checks if the given variable is an array or not


// high order Array
