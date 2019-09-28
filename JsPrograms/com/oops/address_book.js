const util = require("../data structure/data_structureUtil")
const input = require("../algorithms/utility")
const oop_utility = require("./oops_utility")
const fs = require("fs")
let address_book = fs.readFileSync("../JsonFiles/address_book.json") 
let address_book_data = JSON.parse(address_book)


class AddressBook{

    
    add_address(userInfo)
    {
           let userData ={
            "id"        : userInfo.id,
            "first_name": userInfo.first_name,
            "last_name": userInfo.last_name,
            "address": userInfo.address,
            "city": userInfo.city,
            "state": userInfo.state,
            "postal_zip": userInfo.postal_zip,
            "contact_no": userInfo.contact_no
           } 
     oop_utility.data.update_address_book(address_book_data,userData)
    }

    delete_entry(id)
    { 
        let temp = address_book_data


        for(let i = 0; i< temp.address_book.length;i++)
        {
            if(temp.address_book[i].id === id)
            {
                console.log("inside")
                   temp.address_book.splice(i,1)           
            }
            
        }
        // console.log(temp)
       let jsonObj = JSON.stringify(temp)
       console.log(jsonObj)
       fs.writeFile("../JsonFiles/address_book.json",jsonObj,err=>{
        if(err)
        throw err
           
       })
       
    }

    edit_entry(id,property)
    {
        let temp = address_book_data

        console.log(`enter ${property}: `)
        let value = input.data.input()
        for (var i = 0; i < temp.length; i++) {

            if (temp.address_book[i].id === id) {
                temp.address_book[i].property = value;
              break;
            }
          }

          console.log(temp)
    }
    sort_book()
    {

    }

}
let obj = new AddressBook()
// let userInfo = oop_utility.data.dataaddUser()

// obj.add_address(userInfo)

//  obj.delete_entry("3")
obj.edit_entry(2,"address")



