// in javascript equality(==) and comparision(<,>,>=,<=, etc) operators work differently
    // in comparision null is treated as number
    // like in null-
        // if you will compare with 0;
         //console.log(null>=0) // this will return true, because in comparision with number null is treated as 0
         //console.log(null>"yash")


// in javascript if value of two variables are equal then if use "equality symbol it will give you value true"
let id=123
let anotherId=123
console.log(id==anotherId)// true

let firstString="123"
let secondString='123'
console.log(firstString==secondString) // true

console.log(id==firstString)  // true


// symbols  are used for unique value storage
// so if we use symbol in above things
let number1=Symbol('123')
let number2=Symbol('123')
console.log(number2==number1) // false
    // so even the values of the symbols are same but if we will equality compare  of them we will get it is not equal




// when we use any primitive datatypes we get only copy from the that values, not originally we refer to that variable
// that is primitive datatypes are "call by value" data types
// and non-primitive data types are " call by refernce" data types


// return type of "undefied" is
let uName
//console.log(typeof uName) // undefined

// return type of "bigint"
const bigInt=9483984024539n
//console.log(typeof bigInt) //bigint

// return type of "String" is string
let string="hello"
 //console.log(typeof string)  // string

// return type of "number" is number
let number=89
 //console.log(typeof number) // number

 // return type of "null" is object
 let rNull=null
 //console.log(typeof rNull)  // object

 // return type of "Boolean" is boolean
 let bBoolean=true
 //console.log(typeof bBoolean)  // boolean

 






// return type of all non-primitive types are "object"

    // return type of "function" is function
    const myFunction= function(){
        console.log("hello world");
    }
    //console.log(typeof myFunction);  // function

    // return type of "Object" is object
    const myObject={
        name: "divyanshu",
        job: "student",
        id: 8439
    }
    //console.log(typeof myObject)  // object


    // 
