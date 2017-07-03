//Sending a JSON OBJECT to the user in a server response object

//1. change content type, 2.create JSON object, 3.Make JSON obj into stream/buffer format accessible by our res.end() method

var http = require('http');
var fs = require('fs');
//
var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	//1.in head of our response we have to specify the type of content
	//previously we used 'text/html'; Now we set it to 'application/json'
	res.writeHead(200,{'Content-Type':'application/json'});
	//2.We have to create our JSON object 
	var myObj = {
		//let's populate it with some key:value pairs
		name: 'Ryu',
		job: 'Ninja',
		age: 29
	};
	//RECAP!! we can send data back to the client by useing 'res.end()'!
	//BUT!! .end expects stream or buffer! JSON ain't those. 
	//3. Make JSON (Great Again!) into streamable/bufferable object.
	res.end(JSON.stringify(myObj));
	

});

server.listen(3000, '127.0.0.1');
console.log('yo people, now we all listen to the dj at port 3000!');
//We just send JSON object (content-type, obj we read from) to our server!!! 