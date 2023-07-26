// Modules

const names = require('./name');
const sayHi = require('./utility')
const data = require('./other-names');
console.log(data); 

require('./mind-grenade'); 

sayHi('susan'); 
sayHi(names.john);
sayHi(names.peter); 

// CommonJS , every file is module by default
// Modules - encapsulated code (only share minimum)

  