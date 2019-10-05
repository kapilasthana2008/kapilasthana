const doc = require("../cliniq_management/Doctor.js")
const pat = require("../cliniq_management/Patient.js")
const utility = require("../oops/oops_utility")
const appoint = require("../cliniq_management/Appointment.js")
const doctor_json = utility.data.readFile("../cliniq_management/Doctor.json")
const ValInput = require("readline-sync")
let appointment_json  = require("../cliniq_management/Appointment.json")
let fs = require("fs")

let doctor = doc.get_Doctor_Obj()
let Patient = pat.get_patient_Obj()
let appointment = appoint.get_appointment_Obj()

class Doctor_Patient{

    constructor(){
    
        this.doctors_arr = []
        this.count = 0
        this.patients_arr = []
        this.appointments_arr = []
    }

}


let main_Obj = new Doctor_Patient()

// doctor.search_Doctor()
// doctor.add_doctor()
// doctor.doctor_list(main_Obj)

// Patient.patient_list()
 // Patient.add_patient()
// 
// doctor.doctor_list()
// let select_doctor = ValInput.questionInt("select doctor with Sl.No for appointment\n")
// Patient.patient_list()
// let select_patient = ValInput.questionInt("select any Sl.No patient to appoint with doctor\n")
// console.log(this.doctors_arr)
// appointment.take_appointment(doctor,Patient)
// 
// appointment.take_appointment(doctor,Patient)
// appointment.take_appointment(doctor,Patient)
// appointment.appointment_list()
// appointment.take_appointment(doctor,Patient)

// press 1 for Search Doctor
// press 2 for add Doctor
// press 3 for Doctor list
// press 4 for Patient List
// press 5 for take Appointment
// press 6 for print appointment list
// press 7 for add Patient
// press 8 for exit


loop:
while(true)
{
    var choice = ValInput.questionInt("\npress 1 for Search Doctor\npress 2 for add Doctor\npress 3 for Doctor list\npress 4 for Patient List\npress 5 for take Appointment\npress 6 for print appointment list\npress 7 for add Patient\npress 8 clear All appointments\nEnter choice: ");
    if (choice === 1)
    {
        doctor.search_Doctor()
    }

    else if(choice === 2)
    {
        doctor.add_doctor()
    }
    else if(choice === 3)
    {
        doctor.doctor_list()
     
    }else if (choice === 4)
    {
        Patient.patient_list()
    }
    else if (choice === 5)
    {
        let jsonObj = appointment.take_appointment(doctor,Patient,main_Obj.appointments_arr)
        main_Obj.appointments_arr.push(jsonObj)
    }
    else if (choice === 6)
    {
        console.log(main_Obj.appointments_arr)
        appointment.appointment_list(main_Obj.appointments_arr)
    }
    else if (choice === 7)
    {
        Patient.add_patient()
    }
    else if (choice === 8)
    {
         break loop
    }
}

write_json_appointment()




function write_json_appointment()
{
  
    var obj = {
        Appointment : []
    }
        for(let i = 0; i<main_Obj.appointments_arr.length;i++)
        {
            obj.Appointment.push(main_Obj.appointments_arr[i])
        }

        fs.writeFile("../cliniq_management/Appointment.json",JSON.stringify(obj),err=>{
    
            if (err)
            throw err
        })

}