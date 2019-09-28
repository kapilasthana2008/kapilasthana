var methods = {};

const fs = require("fs")
let data = fs.readFileSync("../JsonFiles/inventory.json")
let stock_file = fs.readFileSync("../JsonFiles/stock.json")
let inventoryData = JSON.parse(data)
let stock_data = JSON.parse(stock_file)

let stockArr = stock_data.stock

// fetching data from json file.
let DataArray = inventoryData.inventory

/** ===============================================================================
 * 
 * getInventory method create for feth the array inside json 
 * if DataArray size is greater than 0 then store array of data
 * into data variable and retrun to the caller.
*/
methods.getInventoryData = function()
{
    let data = null
    try {
    
        if(DataArray.length>0)
        {
          data = DataArray
        }
    
    } catch (error) {
        console.log("No data")
    }
    return data
}
/** ===============================================================================
 * 
 * getInventory method create for feth the array inside json 
 * if DataArray size is greater than 0 then store array of data
 * into data variable and retrun to the caller.
*/

methods.stockData = function(){
    let data = null

    try {
        
        if(stockArr.length>0)
        {
            data = stockArr
        }

    } catch (error) {
        console.log("No data")
    }
    return data
}


exports.data = methods