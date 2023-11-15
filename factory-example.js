// factory-example.js

const { CarFactory } = require('./factory');

// Create instances of the CarFactory
const carFactory = new CarFactory();

// Create different types of cars using the factory
const saloon = carFactory.createCar('Saloon');
const suv = carFactory.createCar('SUV');
const truck = carFactory.createCar('Truck');

// Display the types of cars created
console.log(saloon.type); // Saloon
console.log(suv.type);   // SUV
console.log(truck.type); // Truck
