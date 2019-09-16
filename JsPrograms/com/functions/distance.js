
//storing arguments in x and y which passed through command line
var x = process.argv[2]
var y = process.argv[3];
//calculatiing power of x and y.
var powx = Math.pow(x,2)
var powy = Math.pow(y,2)

// printing sqrt 
console.log("distance from "+x+" & "+y+" is "+(Math.sqrt(powx+powy)))