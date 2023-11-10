let instance;

function createInstance() {
  if (!instance) {
    instance = new MyClass();
  }
  return instance;
}

const obj1 = createInstance();
const obj2 = createInstance();
console.log(obj1 === obj2); // true (same instance)
