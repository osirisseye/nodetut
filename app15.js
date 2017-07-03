//Express.js - extending our reach even further - template engines & ejs CONTINUED

// with this example use adress 127.0.0.1:3000/profile1/ryu

//How to pass a template, how to render a template, how to pass data to rendered view?

//Steps: 1. require express module, 2.setting up express app, 
//3. listen to a port, 
//4. setup routes with app.get requests,
//5. setup responses with app.sendFile 
//6. setup a view engine to EJS (new dir + *.ejs template file)

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html');
});

//---------Complex part------
app.get('/profile1/:name', function(req, res){
	//random data example - read below!
	var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'sleeping'] };

	//Recap: used res.render() method to create our template from 'profile.ejs' file (in views folder)
	//We specify it in first parameter 'profile'
	// next we injected object with properties - both inline[person: req.params.name] and from a variable [data]
	//to show the :name of the render dynamically in our profile.ejs file we add second argument
	res.render('profile1', {person: req.params.name, data: data});	
	
});
//--------End of complex example----
//3. setup a listener
app.listen(3000);