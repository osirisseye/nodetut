//Creating a writable stream on our server!

//Recap from previous tutorial:
//There are 2 types of streams. Writable (node.js writing to a stream), Readable (node is reading from it)
//think about netflix - when playing a film you don't wait for it to FULLY load, instead film BUFFERS
//buffer is literally taking small amount of data and sending it which allows you to act without waiting for
//operation which could take long time to finish. You could draw a parallel with sync and async functions!

var http = require('http');
var fs = require('fs');

//so let's create a readable stream with fs.createReadStream()
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
//------> we start here by creating new WRITABLE stream, we can send data to it.
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//this function we know from previous tutorial, we listen to any data coming our way
//taking this 'data' and passing it to our buffer as a chunk and to the user
myReadStream.on('data',function(chunk){
	console.log('new chunk received:');
	//previously, every time chunk was received from the buffer we logged it to the user
	//now, we will send buffered chunk to our writable stream created in line15
	myWriteStream.write(chunk);
});

//In this tutorial we created our readable stream which takes small chunks of data
//and buffers them, while another WRITEABLE stream is listening for these chunks and writes them