
/**
 * 
 * @author   : kapil asthana
 * Date      : 01/10/2019
 * program   : Cliniq management System.
 * 
 **/
const util = require("../data structure/data_structureUtil")
const input = require("../algorithms/utility")
const oop_utility = require("./oops_utility")
const ValInput = require("readline-sync")
const doctor = oop_utility.data.readFile("../JsonFiles/doctor.json")
const patient = oop_utility.data.readFile("../JsonFiles/patient.json")

// doctor class 
class Doctor{
    constructor(Dname,Did,special,avalible)
    {
        this.Dname = Dname;
        this.Did = Did;
        this.special = special;
        this.avalible = avalible;
        this.count=0;
    }

}
// patient class
class Patient{
    constructor(Pname,Pid,ph,age)
    {
        this.Pname = Pname;
        this.Pid =  Pid;
        this.ph = ph;
        this.age = age;
    }
}
// appointment class
class Apoint{
    
    constructor(Dname,Did,special,avalible,Pname,Pid,ph,age)
    {
        this.Dname = Dname;
        this.Did = Did;
        this.special = special;
        this.avalible = avalible;
        this.Pname = Pname;
        this.Pid = Pid;
        this.ph = ph;
        this.age = age;
    }
}
/**  main class doctorpatient
 *  in this class created some arrays for holding objects like (doctor,patient and appointment) objects 
 * */ 
class DocPat{

    constructor(){

        this.AssDoc = [];
        this.doc = 0;
        this.AssPat = [];
        this.pat = 0;
        this.Appoint = [];
        this.app = 0;
    }
/** 
 * this is initial function which is used to initialize AssDoc array
 * (i.e) it fetch the array from doctor json obj and initialize to this array
 * 
*/
    Doc(){

        //trying to fethch and initialize array from doctor json data.
        try {
            for(let i=0;i<doctor.Doctor.length;i++)
            {
                var Dname = doctor.Doctor[i].Dname;
                var Did = doctor.Doctor[i].Did;
                var special = doctor.Doctor[i].special;
                var avalible = doctor.Doctor[i].avalible;
                var docDet = new Doctor(Dname,Did,special,avalible);
                this.AssDoc[this.doc++] = docDet;
            } 
        } catch (error) {
            console.log(error)
        }   
    }

/** 
 *  this function is same ad above doc and same functionality.
*/
    Pat()
    {
        // trying to fetch data from patient json and initialize new patient obj
       try {

        for(let i=0;i<patient.Patients.length;i++)
        {
            var Pname = patient.Patients[i].Pname;
            var Pid = patient.Patients[i].Pid;
            var ph = patient.Patients[i].ph;
            var age = patient.Patients[i].age;
            var pati = new Patient(Pname,Pid,ph,age);
            this.AssPat[this.pat++] = pati;
        }
       } catch (error) {
           console.log(error)
       }
        
    }
    /** 
     *  this function will call for add new doctor in doctor list
     * and obj will store into AssDoc array.
     * 
    */
    add_doctor()
    {
        var Dname = ValInput.question("Enter doctor name: ");
        var Did = ValInput.questionInt("Enter doctor ID: ");
        var special = ValInput.question("Enter doctor Speciality: ");
        var avalible = ValInput.question("Enter doctor availability: ");
        var docDet = new Doctor(Dname,Did,special,avalible);
        this.AssDoc[this.doc++] = docDet;

    }
    /**
     * this function will call for adding new patients objs
     * and obj will also store into obj array in main class defined as assPat
     */
    add_patient()
    {
        var Pname = ValInput.question("Enter patient name: ");
        var Pid = ValInput.questionInt("Enter patient ID: ");
        var ph = ValInput.questionInt("Enter patient Mobile Number: ");
        var age = ValInput.questionInt("Enter patient age: ");

        var pat = new Patient(Pname,Pid,ph,age);
        this.AssPat[this.pat++] = pat;

    }
    /** 
     * this fuction called for search doc
     * using this function a user can find a doctor by their name,id,availibility,specialization
     * by selecting choice.
     * finally print list of doctors
    */
    search_Doc()
    {
        let search = ValInput.question("select 1 search doctor by id.\nselect 2 search doctor by name.\nselect 3 search doctor by specialization.\nselect 4 search doctor by availability.\n")
        // search by id
        if(search == 1)
        {
            let id = ValInput.questionInt("enter doc id for search.\n")
            for(let i =0; i < this.AssDoc.length;i++)
            {
                if(this.AssDoc[i].Did === id)
                {
                    console.log("your doctor.")
                    console.log("id         Dr. Name        specilization      availibility")
                    console.log(`${this.AssDoc[i].Did} --------- ${this.AssDoc[i].Dname} --------- ${this.AssDoc[i].special} --------- ${this.AssDoc[i].avalible}`)
                }
            }
        }
        // search by name
        else if(search == 2)
        {
            let name = ValInput.question("enter doc Name for search.\n")
            for(let i =0; i < this.AssDoc.length;i++)
            {
                if(this.AssDoc[i].Dname === name)
                {
                    console.log("your doctor.")
                    console.log("id         Dr. Name        specilization      availibility")
                    console.log(`${this.AssDoc[i].Did} --------- ${this.AssDoc[i].Dname} --------- ${this.AssDoc[i].special} --------- ${this.AssDoc[i].avalible}`)
                }
            }
        }
        // search by specialization
        else if(search == 3)
        {
            let speciality = ValInput.question("enter specialization\n")
            for(let i =0; i < this.AssDoc.length;i++)
            {
                if(this.AssDoc[i].special === speciality)
                {
                    console.log("your doctor.")
                    console.log("id         Dr. Name        specilization      availibility")
                    console.log(`${this.AssDoc[i].Did} --------- ${this.AssDoc[i].Dname} --------- ${this.AssDoc[i].special} --------- ${this.AssDoc[i].avalible}`)
                }
            }
        }
        //// search by availibility
        else if(search == 4)
        {
            let avail = ValInput.question("enter availibility\n")
            for(let i =0; i < this.AssDoc.length;i++)
            {
                if(this.AssDoc[i].avalible === avail)
                {
                    console.log("your doctor.")
                    console.log("id         Dr. Name        specilization      availibility")
                    console.log(`${this.AssDoc[i].Did} --------- ${this.AssDoc[i].Dname} --------- ${this.AssDoc[i].special} --------- ${this.AssDoc[i].avalible}`)
                }
            }
        }

    }
/**
 * PrintDoc function will use for print all doctor list which are stored into json object.
 */
    PrintDoc()
    {
        console.log("doctor list: \n-------------------------------------------------------")
        console.log("Sl.No.    name    id    Specialization   Availability");
        console.log("-------------------------------------------------------");

        
        for(let i=0;i<this.AssDoc.length;i++)
        {
            console.log(`${i}         ${this.AssDoc[i].Dname}   ${this.AssDoc[i].Did}    ${this.AssDoc[i].special}        ${this.AssDoc[i].avalible}`);
        }
        console.log("=======================================================\n");
    }
/**
 * PrintPatient function will use for print all patient list which are stored into json object.
 */
    PrintPatient()
    {
        console.log("patient list: \n------------------------------------------------------")
        console.log("Sl.No.    name    id    Mobile No.     age");
        console.log("------------------------------------------------------");
        for(let i=0;i<this.AssPat.length;i++)
        {
            console.log(`${i}         ${this.AssPat[i].Pname}   ${this.AssPat[i].Pid}    ${this.AssPat[i].ph}    ${this.AssPat[i].age}`);
        }
        console.log("======================================================\n");
    }
/**
 * appointment function will use for appointment with doctor.
 * in this fuction first print the patient list
 *  1) first select the patient the show the doctor list
 *  2) after showing the doctor list select the doctor
 *  3) then check condition if doctor have less than five appointments then intialize 
 *     the appointment with that doctor otherwise it will show appointment is full.
 */
    appointment()
    {
        this.PrintPatient()
        let pch = ValInput.questionInt("select any Sl.No patient to appoint with doctor\n")
        this.PrintDoc()
        let Dch = ValInput.questionInt("select doctor with Sl.No for appointment\n")
       
        if(this.AssDoc[Dch].count<5)
        {
            
            var Pname = this.AssPat[pch].Pname;
            var Pid = this.AssPat[pch].Pid;
            var ph = this.AssPat[pch].ph;
            var age = this.AssPat[pch].age;

            var Dname = this.AssDoc[Dch].Dname;
            var Did = this.AssDoc[Dch].Did;
            var special = this.AssDoc[Dch].special;
            var avalible = this.AssDoc[Dch].avalible;
            this.AssDoc[Dch].count++;
            var Appo = new Apoint(Dname,Did,special,avalible,Pname,Pid,ph,age);
            this.Appoint[this.app++] = Appo;
           
        }else{
            console.log("appointment is full")
        }

    }
    /** 
     * this function will use for print all appointments.
    */
    Print_Appointments()
    {
        
        console.log("appointments:\n--------------------------------------------------------------------------------------")
        console.log("Sl.No.  Doctor_ID    Doctor_name   specialization    availibility  ||  Patient_id    patient_name    patient_mob   patient_age");
        console.log("-----------------------------------------------------------------------------------------------------");
        
        for(let i=0;i<this.Appoint.length;i++)
        {
            console.log(`${i}       ${this.Appoint[i].Did}        ${this.Appoint[i].Dname}      ${this.Appoint[i].special}    ${this.Appoint[i].special}      ${this.Appoint[i].avalible}      ${this.Appoint[i].Pid}  ${this.Appoint[i].Pname}  ${this.Appoint[i].ph}       ${this.Appoint[i].age}`);
            console.log("-----------------------------------------------------------------------------------------------------");
        }
        console.log("==================================================================================================\n");
    }
/**
 * this function is called write doctor json file after performs all operations.
 */
    writeDoctorJson(){
        
       
        var obj = {
            Doctor : []
        }
        for(let i = 0;i<this.AssDoc.length;i++)
        {
            obj.Doctor.push(this.AssDoc[i])
        }

        oop_utility.data.writeFile("../JsonFiles/doctor.json",obj)

    }

/**
 * this function is called write patient json file after performs all operations.
 */
    writePatientJson(){
        var obj = {
            Patients : []
        }
        for(let i = 0;i<this.AssPat.length;i++)
        {
            obj.Patients.push(this.AssPat[i])
        }
        oop_utility.data.writeFile("../JsonFiles/patient.json",obj)
    }

/**
 * this function is called write appointment json file after performs all operations.
 */
    writeAppointJson(){
        
        var obj = {
            appoint : []
        }
        for(let i = 0;i<this.Appoint.length;i++)
        {
            obj.appoint.push(this.Appoint[i])
        }
       
        oop_utility.data.writeFile("../JsonFiles/appointment.json",obj)
    }
    


}


const obj = new DocPat()

obj.Doc()
obj.Pat()

loop:
while(true)
{
    var choice = ValInput.questionInt("\npress 1 for Search Doctor\npress 2 for add Doctor\npress 3 for Doctor list\npress 4 for Patient List\npress 5 for take Appointment\npress 6 for print appointment list\npress 7 for add Patient\npress 8 for exit\nEnter choice: ");
    switch (choice) {
        case 1:
                 obj.search_Doc()
                break;
        case 2:
                 obj.add_doctor()
                break;
        case 3:
                 obj.PrintDoc()
                break;
        case 4:
                 obj.PrintPatient()
                break;
        case 5:
        
                obj.appointment()
                break;
        case 6:
        
                 obj.Print_Appointments()
                break;
        case 7:
        
                obj.add_patient()
                break;
       
        case 8:  
            obj.writePatientJson()
            obj.writeDoctorJson()
            obj.writeAppointJson()
               break loop;
        default:
            console.log("Enter Valid Choice: ");
            break;
    }
}


