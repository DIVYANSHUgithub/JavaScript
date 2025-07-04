let score="8753"
//console.log(typeof score)
score="8761ab"
//console.log(typeof score)



// if we convert the typeof score into a Number using Number() method
// we will notice that it convert the value of score in number but we will amaze to see that how alphabets can be converted into a number

//console.log(typeof Number(score))  //--> Number

//if we will print that what we get is
//console.log(Number(score))   // --> NaN

// Q-> what is NaN
// Ans. NaN means not a Number



// what we get is if we don't know that is that a number or not and it's compulsory to use Number please check that and then use.


/*

// if score=null
score=null
//console.log(typeof Number(score))  // --> Number
// and if we check what was that number is we get ->
//console.log(Number(score))  // --> 0
// so we got that it has some issue also


*/

/*

// if we take score=undefined
score=undefined
//console.log(typeof Number(score))  // --> Number
// and if we check that what was the number is, we get->
//console.log(Number(score))  //--> NaN
// so we got that it has some issue also

*/

/*

// now for Booleans

// if we give 1 and 0
let booleanValue=true
console.log(booleanValue)// -> true
console.log(typeof booleanValue) // -> boolean



// if we take a number and covert that into boolean
let value=1
console.log(Boolean(value))// -> true
value=2
console.log(Boolean(value))// -> true
value=-1
console.log(Boolean(value))// -> true
value=0
console.log(Boolean(value))// -> false
// so we get that if value will be zero it will be false otherwise true

*/


/*

// we take a string and convert into Boolean
let string="yash"
console.log(Boolean(string)) //  true
string=""
console.log(Boolean(string)) // false
// so we get that if string will empty will return false otherwise true

*/