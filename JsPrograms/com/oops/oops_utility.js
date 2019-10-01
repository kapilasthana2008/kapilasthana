const input = require("../algorithms/utility")
const ValInput = require("readline-sync")
const fs = require("fs")

var methods = {};


class person{

    constructor(id,first_name,last_name,address,city,state,postal_zip,contact_no){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.address = address
        this.city = city
        this.state = state
        this.postal_zip = postal_zip
        this.contact_no = contact_no
    }
}



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


methods.readFile = function(source){

    const fs = require("fs")
    const file = fs.readFileSync(source,"utf8")
    let data = JSON.parse(file)

    return data
}

methods.writeFile = function(path,obj)
{
    let fs = require("fs")
    let jsonObj = JSON.stringify(obj)

    fs.writeFile(path,jsonObj,err=>{
        if(err)
        throw err
           
       })
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
    
 let obj = new person(details.id,details.first_name,details.last_name,details.address,details.city,details.state,details.postal_zip,details.contact_no)
return obj
//  return details   
}


exports.data = methods