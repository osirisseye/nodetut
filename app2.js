// Reading and writing contents of a file, new module 'fs'!

//First import new module;
var fs = require('fs');

//1 - reading
//fs.readFileSync() function is SYNChronous - it will fire first and finish before anything below it executes
//When reading a file we deal in binary data (zeros and ones)- 
//thus we have to tell our machine HOW to read it - what encoding to use = second argument
var readme = fs.readFileSync('readme.txt','utf-8');

//we check if it worked by logging results/contents of a file
console.log(readme);

//2. - writing 
//fs.writeFileSync() takes 2 arguments:
//first argument is the name of our new file. 
//2nd argument is the content we want to write in it, either in literal form of 'xyz' or a variable
fs.writeFileSync('writeMe.txt', readme);

//let's read it again in our console (compare with line10)
var readme2 = fs.readFileSync('writeMe.txt','utf-8');
console.log(readme2);