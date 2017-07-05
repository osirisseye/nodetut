//Partial views - inserting reusable partials and rendering files instead of sending them
//1. include module, 2.set view engine (handler of our views), 3. Render desired views

//1.As always we insert module we will use - here it is 'express.js'
var express = require('express');

var app = express();
//2.
app.set('view engine', 'ejs');

//3.Previously when user requested our homepage we were sending him THE WHOLE FILE but not today!
//today we will render desired site only when it is clicked - being eco/sustainable etc.
app.get('/', function(req, res){
	//this is when we will RENDER these views. with .render mathod we are passing name of the view (because ejs knows its extension)
	res.render('index');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

//---------Complex part------
app.get('/profile/:name', function(req, res){
	//random data example - read below!
	var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'sleeping'] };

	//Recap: used res.render() method to create our template from 'profile.ejs' file (in views folder)
	//We specify it in first parameter 'profile'
	// next we injected object with properties - both inline[person: req.params.name line31] and from a variable [data line25]
	//to show the :name of the render dynamically in our profile.ejs file we add second argument
	res.render('profile', {person: req.params.name, data: data});	
	
});
//--------End of complex example----
app.listen(3000);