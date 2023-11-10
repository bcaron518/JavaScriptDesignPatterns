class CarFactory {
  createCar(type) {
    switch (type) {
      case 'Sedan':
        return new SedanCar();
      case 'SUV':
        return new SUVCar();
      case 'Truck':
        return new TruckCar();
      default:
        throw new Error('Invalid car type');
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.createCar('Sedan');
const suv = carFactory.createCar('SUV');
