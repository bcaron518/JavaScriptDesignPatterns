const observers = [];

function addObserver(observer) {
  observers.push(observer);
}

function removeObserver(observer) {
  const index = observers.indexOf(observer);
  if (index !== -1) {
    observers.splice(index, 1);
  }
}

function notifyObservers(data) {
  for (const observer of observers) {
    observer.update(data);
  }
}

// Usage
addObserver({ update: data => console.log(`Observer 1 received: ${data}`) });
addObserver({ update: data => console.log(`Observer 2 received: ${data}`) });

notifyObservers('Hello, observers!');
