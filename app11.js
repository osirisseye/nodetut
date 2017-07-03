//Basic Routing tutorial - how to differentiate between different requests

//1. make sure to send appropriate content type, 
//2. create a stream to read the particular file - here index.html and pipe it to the res object
//3. create a conditional to differentiate between /home etc requests

var http = require('http');
var fs = require('fs');
//
var server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	//1.in head of our response we have to specify the type of content
	//previously we used 'application/json'; Now we set it to 'text/html'
	// --> res.writeHead(200,{'Content-Type':'text/html'});
	//2. create a stream to read the particular file - here index.html
	//we then have to pipe our index.html website down to the response object 
	// --> fs.createReadStream(__dirname + '/index.html', 'utf-8').piple(res);

	//3.Conditional will route designated content when particular adress is entered by the user
	//Using simple conditional we will show our index.html when user types '/' or '/home' etc
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else if(req.url === '/contact'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}
	else if(req.url === '/api/ninjas'){
		//let's show off and add some known JSON example below
		var ninjas = [{name: 'Ryu', age:29}, {name: 'Mario', age:23}];
		res.writeHead(200,{'Content-Type':'application/json'});
		res.end(JSON.stringify(ninjas));
	}
	else {
		//catch-all default 404 to make sure that we are covered on every end even if we don't have a designated html file
		res.writeHead(404,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}

});

server.listen(3000, '127.0.0.1');
console.log('yo people, now we all listen to the dj at port 3000!');
//We just made sure our user can browse different extensions/adresses and get content according to desired adress!!