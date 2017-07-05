//How to handle static files and middleware

//IMPORTANT!!! We changed path to our stylesheet (from inline, in the head to '/assets/style.css')
//Our index.ejs file will request it and so we will deliver what he asks for (because without it we wont have any stylesheet - 404)! 

//1.Why static files are a "problem", 2.Why middleware can be useful for us?,3.Writing our middleware

//1.When our app was responding to user's actions we only rendered views but never accessed an external file.
//When outsourcing our styles to the external css file user will send different kind of request - a static file req.
//This is why we have to either create routing handlers (for each request = not efficient) or use "MIDDLEWARE"

//2. Middleware is a function(s) executing between sent request and response. Our render functions are example of those.
// they execute after user sends request and before we send the response.
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

//3. Let's create our middleware to bring style to our website!

//---------EXAMPLE for better understanding what is middleware
//we are using inbuild '.use' method of express.js - whenever a request is made containing our first argument (here'/')
//we fire a callback function with req, res paramenters and 'next'. 'Next' which basically queues another piece of code after
//we finish whatever we wrote before it. We have to also include in our body of a function 'next();'! Because we promised it in the parameters
/*
app.use('/assets', function(req, res, next){
	//start of middleware
	next();
	//end of middleware
});
-------END OF THE FIRST EXAMPLE*/

//---- THE CLEANER WAY TO SOLVE MIDDLEWARE PROBLEM----------------
//We again listen for (in this example) our index.ejs file to make request css file from /assets dir
//This is when we use express.js method '.static' and designate the folder from which our static file will be drawn
app.use('/assets', express.static('assets'));
//-----END OF THE CLEANER WAY TO SOLVE MIDDLEWARE PROBLEMS--------

//This is how we created a handler for our static resoruces. Whenever a request is made which uses designated part of url (here '/assets')
// We are firing callback function which maps our folder with external css file in directory of 'assets'


app.get('/', function(req, res){
	res.render('index');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.get('/profile/:name', function(req, res){
	var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'sleeping'] };
	res.render('profile', {person: req.params.name, data: data});		
});

app.listen(3000);