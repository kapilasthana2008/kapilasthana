
var util = require("../algorithms/utility")
var chars = ['a','b','c','d','e','f','g','h','i','j','1','2','3','4','5','6','7','8','9','0']

console.log(" how many random numbers do you need to generate distinct coupon number?")
var num = util.data.input();

var random = Math.floor(Math.random()*num);
var sb = ""

while (random>0)
		{
           // console.log("array char "+Math.floor(random%chars.length))
            
           sb = sb.concat(chars[Math.floor(random%chars.length)])
            random = random/(chars.length);

		}

		 var couponCode=sb.toString();
        console.log("Coupon Code: "+couponCode)	
