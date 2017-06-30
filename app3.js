// Reading and writing ASYNCHRONOULSY!

//First import new module;
var fs = require('fs');

//1 - reading ASYNCHRONOUSLY
//because it is asynchronous we need a callback function to fire it! - our 3rd parameter
fs.readFile('readme.txt','utf-8',function(err, data){
// our callback function 'funciton(err, data)' takes 'err' argument telling it what to do if an error is encountered
// second argument is the data we read from a file

	//let's log the  data [cmd - node app]
	console.log(data);
});

			
console.log('I will be logged first because other function is async!')
//We learnt how to read/log file contents asynchronously
//this method DOES NOT block rest of the code form executing

