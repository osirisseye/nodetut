//Handling Query Strings + prepopulating a form with query data

//1.Query string in server request (url) - wat?, 2.How to pass data from query to THE VIEW! (back at you, user!)

//1.When a query string is send we can i) take data from this query, ii) present data based on this query string
// consider: '/contact?dept=marketing&person=joe'
//we start a query with '?' and then key-value pairs, we concatenate queries with '&'

//There is also a way to extract data (object) from a query with express.js method.
//req.query - does exactly that. We can for example log it 'console.log(req.query)' 
//and if user writes a query we will receive an object.
// this query '/contact?dept=marketing&person=joe' - will give us this object {dept: 'marketing', person: 'joe'}


var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
	res.render('index');
});

//2. We know from previous tutorial how to pass data into the view with i/our renders and ii/ejs' <%= %>
app.get('/contact', function(req, res){
//just like the example with 'app.get('/profile/:name', function(req, res){...' below we do the same.
//We store the object which we later will use when rendering our view (contacct.ejs file [line14 in contact.ejs]
//knowing that req.query gives back the object of {dept: marketing, person: joe},
//we can access particular information with 'obj.key' js method - here it will be our queryString or qs followed by a dot
//and property we want to show. E.g. qs.dept -> will show 'marketing', qs.person -> will result in 'joe'
	res.render('contact', {qs: req.query});
	//compare above line of code to line38 below.
});

app.get('/profile/:name', function(req, res){
	var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'sleeping'] };
	res.render('profile', {person: req.params.name, data: data});		
});

app.listen(3000);