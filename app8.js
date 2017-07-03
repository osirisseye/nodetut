//PIPES - a quicker way to pass data between streams

//since we manually send data from readable stream and manually write data to our writable stream
//it takes a lot of manual labour, don't you think?
//Pipe allows us to replace 'manually' and make our actions automatic.

var http = require('http');
var fs = require('fs');

//We still have to create both read and write streams
//so let's create a readable stream with fs.createReadStream()
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
//creating writable stream, we can send data to it.
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//Now we should finally build our Pipe
//-------------Simple example-----------------
//our pipe connects READABLE to WRITEABLE (important! not the other way around)
myReadStream.pipe(myWriteStream);
//one, beutiful line of code.
//-------------End of simple exmaple----------



//-----More complex example!

var http = require('http');
var fs = require('fs');
//Let's use pipe to send data to our users - we will recycle code from prev tutorial (app5)
//!!Knowing that createServer takes 2 obejcts in its function - req, and res; We can write into them
var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	res.writeHead(200,{'Content-Type':'text/plain'});

	//instead of just logging data, we reading the content of the file we specify + encode it
	var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
	//with our readable stream we pipe this stream into our response object to the user.
	myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('yo people, now we all listen to the dj at port 3000!');
// go to 127.0.0.1:3000 in your broswer after you type 'node app' in your temrinal to see it working
//-----------more copmlex example ends here