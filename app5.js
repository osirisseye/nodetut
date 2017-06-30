//NODE ON THE SERVER: create a server, make node listen to particular port, make it respond to user's action

//First we have to use a module which allows us to do exactly that
var http = require('http');

//now we can use a method given by http module to create a server!
var server = http.createServer();
//right now our server is not alive - rather in vegetation stage.
// it can't respond to any requests so next task will be to make it ALIVE!

//now we can use a method given by http module to create a server!
var server = http.createServer(function(req,res){
	//after creating a server we write a function taking 'req' obj- requests, and 'res' obj reponses
	console.log('request was made: ' + req.url);//this line is explained later(line34), don't worry it's just a ping to our console
	//after creating a server we write a function taking 'req' obj- requests, and 'res' obj reponses
	//Server response has very particular format and its type is e.g. HTML (note <doctype:HTML> inthe header of any html file!)
	res.writeHead(200,{
		//response header takes a status - here 200 [ btw 404 is 'Page not found' status]
		//below we set the type of the content/response
		'Content-Type':'text/plain'
	});
	//Next thing - ending the response object. Here we can send some data/info according to content type set above
	res.end('Hey freethinkers!');
});

//Server has to listen to a particular port to respond
// server.listen(<port number>, <ip adress of the server>);
server.listen(3000, '127.0.0.1');
//its worht to make sure we are listening to the port - we can log sth to do this
console.log('yo people, now we all listen to the dj at port 3000!');

//you just setup a server with node.js!!!

//Let's create a way to keep our fingers on the pulse and show us if someone is making a request on our server
//console.log('request was made: ' + req.url); //on line10
//this way we will knwo if someone is making a request and its url with req.url method (enabled by http module)