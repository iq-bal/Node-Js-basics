//package , module , dependency are all same 

// npm - global command , comes with node
// npm -v

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


// package.json - manifest file(stores imp info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash'); // not a default module, we must install it first

const items = [1,2,[3,[4]]];

const newItems = _.flattenDeep(items);

console.log(newItems);

console.log('hello world');

// when we clone the repo from git
// we just run npm install
// it will download all the dependencies 



// npm i nodemon -D 
// devDepencies: 
// for test purpose, before we make it actual dependencies of the project 