//Express.js - extending our reach even further - route variables and parameters

//Steps: 1. require express module, 2.setting up express app, 
//3. listen to a port, 4. setup routes with app.get responses

//1.express is another module we have to import 
var express = require('express');

//2.we make sure express itself is initiated whenever we need it
var app = express();

//4.when sending a request: '/', we respond by sending our response object
app.get('/', function(req, res){
	//express.js extends response and we can use .send method
//!! We didnt specify our data type in the 'head' - this is done by Express! (express identified that 'this is homempage' is a string)
	res.send('this is the homepage');
});

app.get('/contact', function(req, res){
	//express.js extends response and we can use .send method
//!! We didnt specify our data type in the 'head' - this is done by Express! Here '***' = string
	res.send('this is the contact page');
});

//!!! Route parameter - with parameter name after a colon ':name' you can access it with 'req.params.name' method
app.get('/profile/:name', function(req, res){
	res.send('You requested to see a profile with the name of ' + req.params.name);
});

//3. setup a listener
app.listen(3000);