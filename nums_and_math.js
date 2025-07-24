// in this file we will learn about maths of javascript


    // we know that in javascript we should not have to define the data types explicitly 
        const score=400;
        console.log(score);

            // but really we can do this.
                // Q- How can you dedicately define the datatypes of variable this?
                // Ans- by "using new Number()" method
                    const balance = new Number(200)
                    console.log(balance);
            // when we use "new Number()" method, we get a prototype and through prototype we get some properties
                //Example - 
                    //1- toString
                    console.log(balance.toString(100));
                    // so by using toString method in nums now we can also use methods of string

                    //2- toFixed(2)
                    console.log(balance.toFixed(1));

