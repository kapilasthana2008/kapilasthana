/**
 * 
 * @author   : kapil asthana
 * Date      : 27/09/2019
 * program   : Desc -> Create a JSON file having Inventory Details for Rice,
 *             Pulses and Wheats with properties name, weight, price per kg. 
 **/

const util = require("../data structure/data_structureUtil")
const input = require("../algorithms/utility")
const json_data = require("../jsonDataAccess/dataAccess")
const oop_utility = require("./oops_utility")

let inventory_data = json_data.data.getInventoryData()


console.log("enter your choice from following:\n===================================")
console.log("1: total price of Rice \n2: total price of Wheat \n3: total price of Pulses \n")
let choice = input.data.numInput()

if(choice === 1)
{
   let data = oop_utility.data.rice(inventory_data)
  console.log(data)
  console.log("total amount of Rice are ",data.wheight * data.Price_per_kg)
}
else if(choice === 2)
{
    let data = oop_utility.data.wheat(inventory_data)  
    console.log(data)
    console.log("total amount of Wheat are ",data.wheight * data.Price_per_kg)
}
else if(choice === 3)
{
    let data = oop_utility.data.pulses(inventory_data)
    console.log(data)
    console.log("total amount of Pulses are ",data.wheight * data.Price_per_kg)
}
else{
    console.log("wrong choice")
}



