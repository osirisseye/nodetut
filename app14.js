//Express.js - extending our reach even further - template engines & ejs

//How to pass a template, how to render a template, how to pass data to rendered view?

//Steps: 1. require express module, 2.setting up express app, 
//3. listen to a port, 
//4. setup routes with app.get requests,
//5. setup responses with app.sendFile 
//6. setup a view engine to EJS (new dir + *.ejs template file)

//1.express is another module we have to import 
var express = require('express');

//2.we make sure express itself is initiated whenever we need it
var app = express();

//6. settign up a view engine - 
//IMPORTANT (new folder in the same dir 'views' with filename 'profile.ejs' -> this is our template for profile sites
app.set('view engine', 'ejs');


//4.when sending a request: '/', we respond by sending our response object
app.get('/', function(req, res){
	//5. here we will respond by sending an index.html file with app.sendFile() 
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
	//5. here we will respond by sending an contact.html file with app.sendFile() 
	res.sendFile(__dirname + '/contact.html');
});

//6. two set of examples:
/*-----------Simple example----------
//!!! Route parameter - with parameter name after a colon ':name' you can access it with 'req.params.name' method
app.get('/profile/:name', function(req, res){
	res.send('You requested to see a profile with the name of ' + req.params.name);
});
-----------End of simple example*/
//---------Complex example------
app.get('/profile/:name', function(req, res){
	//random data example - read below!
	var data = {age: 28, job: 'ninja'};

	//By using res.render() method we will create our dynamic template (in views folder we need our profile.ejs file)
	//to show the :name of the render dynamically in our profile.ejs file we add second argument
	res.render('profile', {person: req.params.name, data: data });	
	// to pass data to the render we add second argument (object) 
	// this is when you also have to modify a template file:
	// use '<%= xxxxx %>' where xxxx is data you want to pass on 
	// -> here we have ':name' data which will be used in profile.ejs file and dynamically present the content
	/*<from ejs file> : <!-- to dynamically inject data with '<%= DataYouWantToUse %>' -->
		<h1>Welcome to the profile of <%=person %> </h1>
		<p><strong>Age:</strong> <%= data.age %> </p>
		<p><strong>Job:</strong> <%= data.job %> </p> */

	

});
//--------End of complex example----
//3. setup a listener
app.listen(3000);