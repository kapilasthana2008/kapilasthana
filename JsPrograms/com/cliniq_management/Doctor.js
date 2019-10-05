const ValInput = require("readline-sync")
const utility = require("../oops/oops_utility")
let doctor_json = require("../cliniq_management/Doctor.json")
//Doctor class
 class Doctor{
    constructor(Dname,Did,special,avalible)
    {
        this.Dname = Dname;
        this.Did = Did;
        this.special = special;
        this.avalible = avalible;
        this.count=0;
    }
    
    add_doctor(){
        
        var doctor_name  = ValInput.question("Enter Doctor name.\n")
        var doctor_id  = ValInput.questionInt("Assign new id to Doctor.\n")
        var special = ValInput.question("Enter specilization of doctor.\n")
        var avail = ValInput.question("Enter availibility time of doctor.\n")
        let obj = new Doctor(doctor_name,doctor_id,special,avail)
      this.write_json(obj)
        
    }
    search_Doctor()
    {
        let arr = doctor_json.Doctor
        let search = ValInput.question("select 1 search doctor by id.\nselect 2 search doctor by name.\nselect 3 search doctor by specialization.\nselect 4 search doctor by availability.\n")
       
        // search by id
        if(search == 1)
        {
            let id = ValInput.questionInt("enter doc id for search.\n")

            for(let i =0; i < arr.length;i++)
            {
                if(arr[i].Did === id)
                {
                    console.log("your doctor.")
                    console.log("id         Dr. Name        specilization      availibility")
                    console.log(`${arr[i].Did} --------- ${arr[i].Dname} --------- ${arr[i].special} --------- ${arr[i].avalible}`)
                }
            }
        }
        // search by name
        else if(search == 2)
        {
            let name = ValInput.question("enter doc Name for search.\n")
            for(let i =0; i < arr.length;i++)
            {
                if(arr[i].Dname === name)
                {
                    console.log("your doctor.")
                    console.log("id         Dr. Name        specilization      availibility")
                    console.log(`${arr[i].Did} --------- ${arr[i].Dname} --------- ${arr[i].special} --------- ${arr[i].avalible}`)
                }
            }
        }
        // search by specialization
        else if(search == 3)
        {
            let speciality = ValInput.question("enter specialization\n")
            for(let i =0; i < arr.length;i++)
            {
                if(arr[i].special === speciality)
                {
                    console.log("your doctors.")
                    console.log("id         Dr. Name        specilization      availibility")
                    console.log(`${arr[i].Did} --------- ${arr[i].Dname} --------- ${arr[i].special} --------- ${arr[i].avalible}`)
                }
            }
        }
        //// search by availibility
        else if(search == 4)
        {
            let avail = ValInput.question("enter availibility\n")
            for(let i =0; i < arr.length;i++)
            {
                if(arr.avalible === avail)
                {
                    console.log("your doctors.")
                    console.log("id         Dr. Name        specilization      availibility")
                    console.log(`${arr[i].Did} --------- ${arr[i].Dname} --------- ${arr[i].special} --------- ${arr[i].avalible}`)
                }
            }
        }

    }

    doctor_list()
    {
        let arr = doctor_json.Doctor

        console.log("doctor list: \n-------------------------------------------------------------")
        console.log("Sl.No.    name          id    Specialization   Availability");
        console.log("-------------------------------------------------------------");
        if(arr.length>0)
        {
            for(let i = 0;i<arr.length;i++)
            {
                console.log(`${i}       ${arr[i].Dname}     ${arr[i].Did}       ${arr[i].special}       ${arr[i].avalible}`)
                console.log("-------------------------------------------------------------");
            }
        }
        

    }

    write_json(obj)
    {
        let fs = require("fs")
         
        doctor_json.Doctor.push(obj)

        let jsonObj = JSON.stringify(doctor_json)
       fs.writeFile("../cliniq_management/Doctor.json",jsonObj,err=>{
           if (err)
           throw err
       })
    }
}

exports.get_Doctor_Obj = function(){

    return new Doctor()
}