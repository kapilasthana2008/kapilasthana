const utility = require("../oops/oops_utility")
const patient = utility.data.readFile("../cliniq_management/Patient.json")
const doctor_json = utility.data.readFile("../cliniq_management/Doctor.json")
const Appointment_json = utility.data.readFile("../cliniq_management/Appointment.json")
const ValInput = require("readline-sync")

// appointment class
class Appointment{

  
    constructor(Dname,Did,Special,avalible,Pname,Pid,Ph,Age,count){
        this.Dname = Dname
        this.Did = Did
        this.Special = Special
        this.avalible = avalible
        this.Pname = Pname
        this.Pid = Pid
        this.Ph = Ph
        this.Age = Age  
       
    }

    take_appointment(doctor,Patient,arr)
    {
    //   let appointment_arr = Appointment_json.Appointment
     let appointment_arr = arr
      let doctor_Arr = doctor_json.Doctor
      let patient_Arr = patient.Patient
     
      doctor.doctor_list()
      let select_doctor = ValInput.questionInt("select doctor with Sl.No for appointment\n")
      Patient.patient_list()
      let select_patient = ValInput.questionInt("select any Sl.No patient to appoint with doctor\n")
      
      if(appointment_arr.length<=0)
      {
        
           let obj = this.add_properties(doctor_Arr[select_doctor],patient_Arr[select_patient])
           return obj
      }
        else{

            if(this.searchDoctor(appointment_arr,doctor_Arr[select_doctor])<5)
            {
              
                let obj = this.add_properties(doctor_Arr[select_doctor],patient_Arr[select_patient])
           
            
          
            return obj
            }
            else{
                console.log("appointment is full")
                
            }

        }
    }
    searchDoctor(appointment,doctor)
    {
       let count = 0
        for(let i = 0;i<appointment.length;i++)
        {
           if(doctor.Dname === appointment[i].Dname)
           {
               count ++;
           }
        }
        return count
    }

    appointment_list(arr)
    {
    
      
        if(arr.length<=0)
        {
            console.log("there is no appointments now.")
        }else{

            console.log("appointments:\n--------------------------------------------------------------------------------------")
            console.log("Sl.No.  Doctor_ID    Doctor_name   specialization    availibility  ||  Patient_id    patient_name    patient_mob   patient_age");
            console.log("-----------------------------------------------------------------------------------------------------");
            
            for(let i=0;i<arr.length;i++)
            {
                console.log(`${i}       ${arr[i].Did}        ${arr[i].Dname}      ${arr[i].Special}          ${arr[i].avalible}      ${arr[i].Pid}  ${arr[i].Pname}  ${arr[i].Ph}       ${arr[i].Age}`);
                console.log("-----------------------------------------------------------------------------------------------------");
            }
            console.log("==================================================================================================\n");
    

        }
       
    }

  

    add_properties(doctor,patient)
    {
        console.log("==============",patient)
            var Dname = doctor.Dname;
            var Did = doctor.Did;
            var special = doctor.special;
            var avalible = doctor.avalible;
            var Pname = patient.Pname;
            var Pid = patient.Pid;
            var ph =  patient.ph;
            var age =  patient.age;

            return new Appointment(Dname,Did,special,avalible,Pname,Pid,ph,age)
    }
 clear_Appointments()
 {
    let fs = require("fs")
    Appointment_json.Appointment.splice(0,Appointment_json.Appointment.length)
    let jsonObj = JSON.stringify(Appointment_json)

    fs.writeFile("../cliniq_management/Appointment.json",jsonObj,err=>{
    
        if (err)
        throw err
    })
    console.log("All entry removed...")
    return
}


}

exports.get_appointment_Obj = function(){
    return new Appointment()
}