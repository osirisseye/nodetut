//Adding and removing directories (sync and async!)

//first include fs module 
var fs = require('fs');

//to delete a file we use fs.unlink('') method
fs.unlink('writeme.txt');

// to remove use 'rmdir' (rm - remove)
fs.rmdirSync('stuff');

//------------------
//we create a directory asynchronously - therefore we need a callback function
fs.mkdir('stuff', function(){
	//our callback function reads what is in the readMe.txt file and 
	//since it is async we give the 3rd argument- function with 2 args 'err' and 'data'
	fs.readFile('readMe.txt', 'utf-8', function(err, data){
		//err is useful if function fails to read the file,
		//data is the argument we will store contents of 'readMe.txt' file
		//After we read the file we create a new one in new directory. 
		fs.writeFile('./stuff/writeMe.txt',data);
		//we create a file 'writeMe.txt' in the ./stuff directory (created on line14)
		//and populate the file with 'data' received from reading 'readMe.txt' line17
	});
});