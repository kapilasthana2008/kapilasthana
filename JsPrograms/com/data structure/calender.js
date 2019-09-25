
/**
 * 
 * @author   : kapil asthana
 * Date      : 23/09/2019
 * program   : calender Program
 * 
 **/

//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")
const functions = require("../functions/utility")

const months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
const Days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// const month = parseInt(process.argv[2])
// const year  = parseInt(process.argv[3])
let lastDay = 0

console.log("input month")
const month = parseInt(input.data.input())
console.log("input year")
const year  = parseInt(input.data.input())

const day = functions.day_week(1,month,year)
const leap = functions.leap_year(year)



// 
if(month===2)
{
    
    //To check weather the year is leap year or not.
    if(leap)
    lastDay = 29;
    else
    lastDay = 28;
}
else if(util.data.monthCheck(months[month-1]))
lastDay = 31;
else
lastDay = 30;


console.log("% calender  of",months[month-1],year)
console.log("\n",months[month-1],year)

//======== printing calender =========================
for(let i=0;i<Days.length;i++)
{
    process.stdout.write(Days[i]+"  ");
}
console.log()

// printing of dates.


var dateCount = 0

for(let j=1-day;j<=lastDay;j++)
{
    dateCount++;
    if(j<=0)
        process.stdout.write("     ");
    else
    {
        if(dateCount%7!=0)
        {
           
            if(j<=9)
                process.stdout.write(" "+j+"   ");
            else
                process.stdout.write(j+"   ");
        }
        else
        {
            process.stdout.write(j+"");
            console.log();
        }
                
   }
}
console.log()


