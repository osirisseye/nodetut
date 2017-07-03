//Sending an HTML website to the user in a server response object

//After creating your basic index.html we need to modify our server function
//1. change content type, 2.file we want to read from

var http = require('http');
var fs = require('fs');
//RECAP:Let's use pipe to send data to our users - we will recycle code from prev tutorial (app5)
//RECAP:!!Knowing that createServer takes 2 obejcts in its function - req, and res; We can write into them
var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	//in head of our response we have to specify the type of content
	//previously we used plain text but now we deal with html thus: 'text/html'
	res.writeHead(200,{'Content-Type':'text/html'});

	//Our file must conform to the data type we set up above. index.html is spot on!
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
	//with our readable stream we pipe this stream into our response object to the user.
	myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('yo people, now we all listen to the dj at port 3000!');
//We just send an html file (content-type, file name we read from) to our server!!! 