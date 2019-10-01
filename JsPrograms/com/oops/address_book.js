
/**
 * 
 * @author   : kapil asthana
 * Date      : 30/09/2019
 * program   : Create Object Oriented Analysis and Design of a simple (Address Book Problem).
 * 
 **/
const util = require("../data structure/data_structureUtil")
const input = require("../algorithms/utility")
const oop_utility = require("./oops_utility")
const ValInput = require("readline-sync")

const fs = require("fs")
let address_book = fs.readFileSync("../JsonFiles/address_book.json") 
let address_book_data = JSON.parse(address_book)

// class Address book
class AddressBook{
    
    /** 
     * 1) create a function for adding new user's detail
     * this function internally calling to a dataadduser() function
     * 2) which is for accepting all required user detail on runtime and intialize to the person obj
     * then return obj.
     *  
     * */ 
    add_address()
    {

        // function which are returing person obj with initialized properties
        let userInfo = oop_utility.data.dataaddUser()

    
          try {
              // creating object with properties for writing data into json object
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
            // function for adding into new entry into json file.
         oop_utility.data.update_address_book(address_book_data,userData)
          } catch (error) {
              console.log(error)
          }
    }
    /** 
     *  create a function for deleting perticular exist entry in address book 
     *  this function accepting id and search into address book if find that 
     *  id then it will remove that entry.
     *  then finally writing data into json file.
    */
    delete_entry(id)
    { 
        let temp = address_book_data
       try {
            
        for(let i = 0; i< temp.address_book.length;i++)
        {
            if(temp.address_book[i].id === id)
            {
                console.log("inside")
                   temp.address_book.splice(i,1)           
            }
            
        }
       let jsonObj = JSON.stringify(temp)
       console.log(jsonObj)
       fs.writeFile("../JsonFiles/address_book.json",jsonObj,err=>{
        if(err)
        throw err
           
       })

       } catch (error) {
           console.log(error)
       }
       
    }

    /**
     *  this function have the functionality for editing purpos
     *  1) this function first accepting perticular id
     *  2) other thing asking to the user property which want to delete 
     *  3) updating perticular property and updating into json.
     *
     */
    edit_entry()
    {
        let temp = address_book_data
        console.log("enter id")
        let id = input.data.input()
       
        console.log("enter propery which do you want to update.")
        let property = input.data.input()

        console.log(`enter ${property}: `)
        let value = input.data.input()
        
        console.log("\n")
   
        try {
            for (var i = 0; i < temp.address_book.length; i++) {

                if (temp.address_book[i].id === id) {
                 
                    temp.address_book[i][property] = value;
                  break;
                }
              }

              let jsonObj = JSON.stringify(temp)
              console.log(jsonObj)
              fs.writeFile("../JsonFiles/address_book.json",jsonObj,err=>{
               if(err)
               throw err
                  
              })

        } catch (error) {
            console.log("not update")
        }
       
    }
    /**
     * 
     * this function is for sort entire address book.
     * according to first_name dictionary format. 
     * 
     */

    sort_book()
    {
        let temp = address_book_data

        try {
           
            for(var i = 0; i < temp.address_book.length; i++){
                for(var j = i+1; j < temp.address_book.length; j++){
    
                    if(temp.address_book[j]["first_name"] < temp.address_book[i]["first_name"]){
                        var value = temp.address_book[j]
                        temp.address_book[j] = temp.address_book[i]
                        temp.address_book[i] = value
                    }
                }
            }
    
            let jsonObj = JSON.stringify(temp)
          console.log(jsonObj)
          fs.writeFile("../JsonFiles/address_book.json",jsonObj,err=>{
           if(err)
           throw err
              
          }) 
        } catch (error) {
            
        }
    }
    /***
     *  finally dispay function called at the ending to display address book on screen.
     */
    display()
    {
        let temp = address_book_data.address_book
        console.log("\n Address Book:\n=================================================================================================")
        console.log("id first_name      last_name       address     city        state       postal_zip      contact_no")
        console.log("=================================================================================================")
        for(let i =0 ; i< temp.length;i++)
        {
        console.log(temp[i].id     ,"   ",temp[i].first_name      ,"        ",temp[i].last_name          ,"     ",temp[i].address        ,"     ",temp[i].city        ,"     ",temp[i].state       ,"     ",temp[i].postal_zip      ,"  ",temp[i].contact_no)
        console.log("=================================================================================================")

    }
    }
}

let obj = new AddressBook()


console.log("1 for add\n2 for edit\n3 for delete\n4 for exit")
console.log("enter your choice")
let ch = ValInput.questionInt()

    switch (ch) {
        case 1:
                 obj.add_address()
                 break;
        case 2:
                obj.edit_entry()
        
                break;
        case 3:
                console.log("enter id which want you delete")
                let id = input.data.input()
                obj.delete_entry(id)
                break;
         case 4:
                console.log("exit")
                process.exit(1)
                
    default: console.log("wrong choice")
        break;

}

 obj.sort_book()
obj.display()



