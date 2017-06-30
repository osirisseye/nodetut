//Creating a stream on our server!

//There are 2 types of streams. Writable (node.js writing to a stream), Readable (node is reading from it)
//think about netflix - when playing a film you don't wait for it to FULLY load, instead film BUFFERS
//buffer is literally taking small amount of data and sending it which allows you to act without waiting for
//operation which could take long time to finish. You could draw a parallel with sync and async functions!

var http = require('http');
var fs = require('fs');

//so let's create a readable stream with fs.createReadStream()
var myReadStream =fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
//'fs.createReadStream(__dirname + '/readme.txt')' creates a stream which reads contents of our designated file - here 'readme.txt'

//since the function above has many inherited methods we can use one here - 'data'.
// We will use a method which will allow us to fire a function whenever a chunk of data is buffered and sent.

//this is what happens here: 1.Read file, 2.fill up buffer, 
//3.send data and 4. pass it as 'chunk' to a funct() 
myReadStream.on('data',function(chunk){
	console.log('new chunk received:');
	console.log(chunk);
});

//data received is only a buffer data since our fs.createReadStream(__dirname + '/readme.txt')
//didn't specify what kind of encoding we would like to use to decrypt our binary data 
// we can add 3rd argument 'utf-8' and read the text inside the readme.txt

//difference between this method (buffer/stream) and using fs.readFile() is we are not waiting
//for server to read WHOLE file, but rather sending small chunks of data to the user much quicker!