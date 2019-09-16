//importing module exports all function declared in utility.js file
const input = require("./utility")

//input choice from user.
console.log("enter your choice");

//menubar for chioice
    console.log("\n\nfor integers 2D array: press 1 \nfor doubles 2D array: press 2 \nfor boolean 2D array: press 3");
    //parsing choice in int becouse of javaScript engine taken input as a String.
    var ch = parseInt(input.data.input());
    console.log(typeof(ch))

   //switch case to define cases which type of array required.
   switch (ch) {
                //input no of rows by the user.
        case 1: console.log("enter rows.")
                var rows =  parseInt(input.data.input());
                //inpur no of columns by the user
                console.log("enter cols.")
                var cols =  parseInt(input.data.input());
                //return array print by the function
                console.log(input.data.integer2d(rows,cols));
            break;
            
                  //input no of rows by the user.
        case 2: console.log("enter rows.")
                var rows =  parseInt(input.data.input());
                //inpur no of columns by the user
                 console.log("enter cols.")
                 var cols =  parseInt(input.data.input());
                //return array print by the function
                console.log(input.data.float2d(rows,cols));
                break;

        case 3: console.log("enter rows.")
                var rows =  parseInt(input.data.input());
                //inpur no of columns by the user
                console.log("enter cols.")
                var cols =  parseInt(input.data.input());
                //return array print by the function
                console.log(input.data.boolean2d(rows,cols));
                break;
    
        default: console.log("wrong choice.");
            break;
    }
