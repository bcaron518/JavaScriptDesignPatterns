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

const carFactory = new CarFactory();
const saloon = carFactory.createCar('Saloon');
const suv = carFactory.createCar('SUV');
const truck = carFactory.createCar('Truck');
