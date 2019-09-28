const util = require("../data structure/data_structureUtil")
const input = require("../algorithms/utility")

const json_data = require("../jsonDataAccess/dataAccess")
const oop_utility = require("./oops_utility")

let fetch = null,total = 0
let stock_data = json_data.data.stockData()

console.log("===============================================================")
console.log("Stock Name     No_Share    Share_Price     Total_Value_of_Share")
console.log("===============================================================")

for(let i=0;i<stock_data.length;i++)
{
    fetch = oop_utility.data.stock_data(stock_data,i)

    console.log(`${fetch.stock_name}        ${fetch.Number_of_share}        ${fetch.price}          ${fetch.Number_of_share*fetch.price}`)
    total += fetch.Number_of_share*fetch.price
}
console.log("===============================================================")
console.log("total value of stocks ",total)


