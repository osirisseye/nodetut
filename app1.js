//Event Listeners, emitters and inheritance = Let's inherit event emitter!

//events module let's us create new events
var events = require('events');
//utilities module allows us to (et al) inherit!
var util = require('util');

//we create new object constructor taking 'name' as paramenter
var Person = function(name){
	//we give new Person a name as a property of our obj
	this.name = name;
};

//we have our Person object so now we have to give our object
//ability to inherit event emitters
//-we use our util module and pass two arguments
//who: Person, what: inheriting event emitters
util.inherits(Person, events.EventEmitter);

//since we have our object constructor - let's create PEOPLE!
//note the syntax of 'Person('name')' fires up our constructor (line9)
//and assigns a name to it
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
// since 3 is already a crowd let's put them into an array
var people = [james, mary, ryu];


//using people.forEach (js method) we want to give everyone in our array new ability
people.forEach(function(person){
//we push every person in array through the function
//assigning everyone an event listener '.on'
//it listens to 'speak' and will initiate a callback 'function(msg)'
	person.on('speak',function(msg){
		//function(msg) logs name prop of a person from our array
		//and concatenates with 'said' and our msg.
		console.log(person.name + ' said: '+ msg);
	});
});

//finally compare both lines below:
//"person.on('speak',function(msg)" 
   james.emit('speak','hey');
