//= Basic event listeners & importing node.js module
//first let's make it possible for us to emitt an event 
//we do this by importing this bad boy 'events' is core node.js module
var events = require('events');

//now, we create our emitter
var myEmitter = new events.EventEmitter();

//we define the event we will be listening to: 'listen'
//and callback funciton to fire up after we spot 'listen'
myEmitter.on('listen', function(mssg){
	//let's make it simple and log paramenter ('mssg') 
	//of our 2nd argument ('function(mssg)')
	console.log(mssg);
});

//now we test our emitter by .emit method and passing two arguments
myEmitter.emit('listen', 'the event was emitted');

//**in cmd we move to the directory of our file
//**and run this app by writing 'node app'

//Here we learnt 
//1. importing core module known to node.js - 'events'
//2. how to create a new event emitter 'myEmitter'
//3. follow an event with event listener 'function(mssg)'