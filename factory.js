// factory.js

class SaloonCar {
  constructor() {
    this.type = 'Saloon';
  }
}

class SUVCar {
  constructor() {
    this.type = 'SUV';
  }
}

class TruckCar {
  constructor() {
    this.type = 'Truck';
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case 'Saloon':
        return new SaloonCar();
      case 'SUV':
        return new SUVCar();
      case 'Truck':
        return new TruckCar();
      default:
        throw new Error('Invalid car type');
    }
  }
}

module.exports = { SaloonCar, SUVCar, TruckCar, CarFactory };
