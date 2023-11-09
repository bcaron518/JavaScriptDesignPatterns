// observer.js

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(data) {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}

class Observer {
  update(data) {
    // Default update method, can be overridden by concrete observers
    console.log(`Received: ${data}`);
  }
}

module.exports = { Subject, Observer };
