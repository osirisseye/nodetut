//Partial views - inserting reusable partials and rendering files instead of sending them

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
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
	// next we injected object with properties - both inline[person: req.params.name] and from a variable [data]
	//to show the :name of the render dynamically in our profile.ejs file we add second argument
	res.render('profile', {person: req.params.name, data: data});	
	
});
//--------End of complex example----
app.listen(3000);