// Reading and writing contents of a file, new module 'fs'!

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

			


