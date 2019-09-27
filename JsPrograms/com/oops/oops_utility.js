var methods = {};

/** 
 * 
 * 
*/

methods.rice = function(arr)
{

    if(arr)
    {
       
        for(let i = 0;i<arr.length;i++)
        {
            
            if(arr[i].Rice)
            {
                return arr[i].Rice
            }
        }
    }
}

methods.wheat = function(arr)
{

    if(arr)
    {
        for(let i = 0;i<arr.length;i++)
        {
            
           
            if(arr[i].Wheat)
            {
                return arr[i].Wheat
            }
        }
    }
}

methods.pulses = function(arr)
{

    if(arr)
    {
       
        for(let i = 0;i<arr.length;i++)
        {
            
            if(arr[i].pulse)
            {
                return arr[i].pulse
            }
        }
    }
}

methods.stock_data = function(arr,i)
{
    return arr[i]
}
exports.data = methods