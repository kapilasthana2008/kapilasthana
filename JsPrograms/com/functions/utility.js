
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
    three: function day_week(d,m,y)
    {
                    var y0 = y - (14 - m) / 12;
                    var x = y0 + y0/4 - y0/100 + y0/400;
                    var	m0 = m + 12 * ((14 - m) / 12) - 2;
                    var	d0 = (d + x +(31*m0) / 12) % 7;

                    return Math.ceil(d0);
                    
    }
              

              

}
//permission to access for outer classes.
exports