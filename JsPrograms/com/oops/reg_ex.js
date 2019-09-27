
/**
 * 
 * @author   : kapil asthana
 * Date      : 27/09/2019
 * program   : Desc -> Read in the following message: Hello <<name>>,
 *             We have your full name as <<full name>> in our system.
 *             your contact number is 91-xxxxxxxxxx. Please,let us know
 *             in case of any clarification Thank you BridgeLabz 01/01/2016.
 *             Use Regex to replace name, full name, Mobile#,
 *             and Date with proper value.
 **/

const input = require("../algorithms/utility")
const oop_utility = require("./oops_utility")
const months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]

// create a regular expression for testing input string
const nameReg = /^[A-Za-z ]{3,20}$/
// create a regular expression for testing input contact number
const mobileReg = /^[6-9]\d{9}$/
// take a date object for getting current date and year.
let today = new Date()
// taking input full name by user.
console.log("enter Full Name")
let Fullname = input.data.input()
// taking contact number by user..
console.log("enter contact number")
let mob = input.data.numInput()
// spliting full name 
let name = Fullname.split(" ")
/** 
 * We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
 *  Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
*/

// validating user full name and contact number  with regular expression.
if(nameReg.test(Fullname) && mobileReg.test(mob))
{
   console.log(`Hello ${name[0]},\n\n\t we have your full name as ${Fullname} in our system.your contact number is +91-${mob}. Please, let us know in case of any clarification
    Thank you BridgeLabz ${today.getDate()}/${months[today.getMonth()]}/${today.getFullYear()}
   `)
}
else{
    console.log(" you have entered wrong input")
}