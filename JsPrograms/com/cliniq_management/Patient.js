const ValInput = require("readline-sync")
let patient_json = require("../cliniq_management/Patient.json") 

// patient class
class Patient{

    constructor(Pname,Pid,ph,age)
    {
        this.Pname = Pname;
        this.Pid =  Pid;
        this.ph = ph;
        this.age = age;
    }

    add_patient()
    {
       var patient_name  = ValInput.question("Enter patient name.")
        var patient_id  = ValInput.questionInt("Assign new id to patient.")
        var patient_age = ValInput.questionInt("Enter patient age.")
        var mob = ValInput.questionInt("Enter patient's contact number.")
        
        let obj = new Patient(patient_name,patient_id,mob,patient_age)
        this.write_json(obj)
        
    }
    patient_list()
    {
        let arr = patient_json.Patient 
        
        console.log("\npatient list: \n------------------------------------------------------")
        console.log("Sl.No.    name    id    Mobile No.     age");
        console.log("------------------------------------------------------");
        for(let i=0;i<arr.length;i++)
        {
            console.log(`${i}         ${arr[i].Pname}   ${arr[i].Pid}    ${arr[i].ph}    ${arr[i].age}`);
            console.log("------------------------------------------------------");
        }
        console.log("======================================================\n");

    }

    write_json(obj)
    {
        let fs = require("fs")
        
        patient_json.Patient.push(obj)

        let jsonObj = JSON.stringify(patient_json)
       fs.writeFile("../cliniq_management/Patient.json",jsonObj,err=>{
           if (err)
           throw err
       })
    }


}

exports.get_patient_Obj = function(){

    return new Patient()
}