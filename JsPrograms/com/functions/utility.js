
//declare module object and exports to provide access for outer .js files.
module.exports={

    // declare property as a function and return input value..
    
            input()
             {
                var input = require("readline-sync");
                var value = input.question();
                return value;     
             },
             
    one :   function input()
            {
                var input = require("readline-sync");
                var value = input.question();
                return value;         
            },
    two :   function inpuArray(size)
            {
               var arr = [];
               console.log("insert elements");
               for (var index = 0; index < size; index++) {
                arr[index] = input()
                 }
                // return final array with elements.
                return arr;
             },
             
             

              

}
//permission to access for outer classes.
exports