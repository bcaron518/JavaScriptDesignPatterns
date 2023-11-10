function createCar(type) {
  if (type === 'Saloon') {
    return new SaloonCar();
  } else if (type === 'SUV') {
    return new SUVCar();
  } else if (type === 'Truck') {
    return new TruckCar();
  } else {
    throw new Error('Invalid car type');
  }
}
