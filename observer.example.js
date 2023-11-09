// observer-example.js

const { Subject, Observer } = require('./observer');

// Create instances of Subject and Observer
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

// Add observers to the subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Notify observers
subject.notifyObservers('Hello, observers!');
