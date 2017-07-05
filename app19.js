//Handling POST Requests - sending data to the server

//In this tutorial we will accomplish: When POST request is fired <submit button> of our contact form, 
//POST request handler - 'urlencodedParser' will store data of this request (who, dept, email)
//We will access this data in 'req.body' propperty in req object.
//we then pass this data back to the newly created 'contact-success' view.


//1.What is POST request, 2.how to send data to our server. (see also contact.ejs file! adding: method="POST" action="/contact")


//1.POST is a way to ask server to store data - just like when we send data from a form to a server.
//data which is going to be stored is in the body of the POST request - this is important!
//!IMPORTANT - data normally can be stored in our res to the request but as we said before: 
//POST data is stored in POST body! - therefore: MIDDLEWARE comes into play again!

//2.a We will use another module - Body-parser (again install with 'npm install body-parser -s' https://www.npmjs.com/package/body-parser)
// there we can find 'Express route-specific' 
var bodyParser= require('body-parser');
var express = require('express');
var app = express();

//2.b We copy paste variable to handle our url specific request for us
//Now we have to use this middleware in our POST handler
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
	res.render('index');
});

//2.c - right now we are using app.get handling our POST request with app.post and variable of our middleware
//and example code of this (don't worry if it looks frightening):
/* 'POST /login gets urlencoded bodies'

app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
}) */

//compare code below to the above example!
app.post('/contact', urlencodedParser, function(req, res){
//-----BASIC EXAMPLE-----
	//knowing that our urlencodedParser stores our data - we can access it with '.body' property on the req. object! - 
	console.log(req.body);//After filling the contact form console will return e.g. {who: 'ryu', department:'marketing', email:'ninja@ninja.com'}
//-----END OF BASIC EXAMPLE
// before we just rndered contact page after successful submission of the form - let's create new view 'contact-success' for that instance! 
//we also storing our object in 'data: req.body' enabled by our middleware!
//we will use this data to present it in our contact-success.ejs view
	res.render('contact-success', {data: req.body});

});

app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res){
	var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'sleeping'] };
	res.render('profile', {person: req.params.name, data: data});		
});

app.listen(3000);