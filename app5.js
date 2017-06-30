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

});