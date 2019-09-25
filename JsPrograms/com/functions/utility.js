
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
    day_week: function day_week(d,m,y)
    {
               if(d>31 || m>12 || y<999)
               {
                   return -1
               }
               else{
                var Yo = y-parseInt((14-m)/12);
                var x = Yo+parseInt(Yo/4)-parseInt(Yo/100)+parseInt(Yo/400);
                var Mo = m+12*(parseInt((14-m)/12)-2);
                var D0 = (d+x+parseInt(31*Mo/12))%7;
                return D0;
               }
                 
                    
    },
    leap_year: function checkyear(year)
    {
        // checking year digit is greater 3
        if(year <1000 ||year >10000)
        {
            console.log("invalid year");
        }
        else{
            //checking year is leap or not if condition true then leap year else not.
            if(year%4 == 0 && year%100 != 0||year%400 == 0)
            {
                
                return true
            }
            else{
                return false
            }
    
        }
    }        

              

}
//permission to access for outer classes.
exports