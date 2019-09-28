const input = require("../algorithms/utility")
const ValInput = require("readline-sync")
const fs = require("fs")

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

methods.menu_book = function()
{
    console.log("enter your choice")
    console.log("\nFor Add press 1\nFor Edit press 2\nFor delete press 3\nFor sort press 4")
    console.log("enter your choice.")
    const ch = input.data.numInput()

    return ch

}

methods.update_address_book = function(address_book_data,userData)
{
    console.log("inside")
    address_book_data.address_book.push(userData)
    let jsonObj = JSON.stringify(address_book_data)
    
     fs.writeFile("../JsonFiles/address_book.json",jsonObj,err=>{
     if(err)
     throw err
        
    })
}

methods.dataaddUser = function()
{
   // console.log(arr)
    console.log("enter details.")

    let details = {
        "id":ValInput.question("enter unique Id: "),
        "first_name": ValInput.question("first_name: "),
        "last_name": ValInput.question("last_name: "),
        "address": ValInput.question("address: "),
        "city": ValInput.question("city: "),
        "state": ValInput.question("state: "),
        "postal_zip": ValInput.question("postal_zip: "),
        "contact_no": ValInput.question("contact_no: ")
    }   
return details   
}

exports.data = methods