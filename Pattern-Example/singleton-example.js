// singleton-example.js

const Singleton = require('./singleton');

// Create instances of the Singleton class
const instance1 = new Singleton();
const instance2 = new Singleton();

// Check if both instances refer to the same object
console.log(instance1 === instance2); // true
