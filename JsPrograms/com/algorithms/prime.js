const util = require("./utility")

console.log("enter range")
var range = parseInt(util.data.input())
console.log(typeof(range))


for(var i = 1; i<= range;i++)
{
    primecheck(i)
}

function primecheck(num)
{
    if (num == 1|| num ==2 || num== 3)
    {
        console.log("prime"+i)
    }
    else{
        var temp = num/2;

        for(var j =2 ; j<temp;j++)
        {
            if (temp%j != 0)
            {
                console.log("prime"+num)
            }
        }
    }

}

// for(var i = 1;i<=range;i++)
// {
//     console.log("inside");
//     if(i%2 != 0)
//     {
//         if(i == 1 || i==2)
//         {
//             console.log("prime"+i)            
//         }
//         else
//         {
//             for(var i = 2;i <= i/2;i++)
//             {
//                 if(i%2 != 0)
//                 {
//                     console.log("prime "+i)
//                 }
//             }
//         }
//     }
// }