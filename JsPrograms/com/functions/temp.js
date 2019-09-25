
/** 
 * 
 * nested function 
*/

var landscape = function()
{
    var result = ""

    var flat = function(size)
    {
        for(let i = 0; i<size;i++)
        {
            result += "_"
        }
    };

    var mount = function(size)
    {
         result += "/"
        for(let i = 0; i<size;i++)
        {
             result += ""
            result += "\\"
        }
    };
    flat(3)
    mount(4)
    flat(6)
return result;
}

console.log(landscape())