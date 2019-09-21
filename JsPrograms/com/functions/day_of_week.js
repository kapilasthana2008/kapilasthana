// m (month), d (day), and y (year). For m use 1 for January, 
// const 

const util = require("./utility")


const d = parseInt( process.argv[2])
const m = parseInt( process.argv[3])
const y = parseInt( process.argv[4])

if((m>12)||(d>31)||y<1000)
{
    console.log("wron input.")
}
else{ 
		var day = util.three(d, m, y);
        console.log(day)
		switch (day) {
		case 0:
			console.log("sunday");
			break;
		case 1:
        console.log("monday");
			break;
		case 2:
		console.log("tuesday");
			break;
		case 3:
		console.log("wednesday");
			break;
		case 4:
        console.log("thursday");
			break;
		case 5:
        console.log("friday");
			break;
		case 6:
        console.log("saturday");
			break;

		default: console.log("wrong input");
			break;
		}
   

}


