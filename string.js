/*
in modern days we use indentation to write strings
    Benifit- we can also do another tasks like- giving function, using variables etc
    
    let variable=8;
    console.log(`the roll no. is ${variable}`)
    syntax is-
    console.log(`some string ${variable/function} string`)
*/


/*

two types of string declaration
    1- let name=`Divyanshu Mishra`
    2- const string=new String("Games")
*/

/*
    1- let name='Divyanshu Mishra';
        we cannot apply string methods here
        name.length--> it will give error
*/
// 2- const string=new String("Divyanshu Mishra");

    // this methods of the strings are only present for the object strings
        // how to make string objects-
        
        // const string=new String("divyanshu");
        const string=new String("Games")// now String is a object not an array and now we can apply string methods preseent for String Object;
        //1- length
            console.log(string.length) //-->
            string.padEnd()


        // 2- trim
            const newStringOne="   divyanshu   "
            console.log(newStringOne)
            console.log(newStringOne.trim())


        //3- replace method
            // it is used for replacing a set of char
            const url="https://divyanshu.com//divyanshu%20mishra"
            console.log(url.replace('%20','-'))
        

        //4- split(sperator, limit)
        

        