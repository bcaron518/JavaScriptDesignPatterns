# JavaScript Design Patterns Showcase

This repository demonstrates the implementation of three common design patterns in JavaScript: Singleton, Observer, and Factory. Design patterns are reusable solutions to common problems in software design, and they help improve code organization, maintainability, and reusability.

## Table of Contents

1. [Design Patterns Included](#design-patterns-included)
2. [Usage](#usage)
3. [Examples](#examples)
4. [Folder Structure](#folder-structure)
5. [Contributing](#contributing)
6. [License](#license)

## Design Patterns Included

### 1. Singleton Pattern

The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It's useful when exactly one object is needed to coordinate actions across the system.

- [Pattern/singleton.js](/Pattern/singleton.js): Example implementation of the Singleton pattern.
- [Pattern-Example/singleton-example.js](/Pattern-Example/singleton-example.js): Demonstration of using the Singleton pattern.

### 2. Observer Pattern

The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. It's useful for implementing distributed event handling systems.

- [Pattern/observer.js](/Pattern/observer.js): Example implementation of the Observer pattern.
- [Pattern-Example/observer-example.js](/Pattern-Example/observer-example.js): Demonstration of using the Observer pattern.

### 3. Factory Pattern

The Factory pattern is used for creating objects without specifying the exact class of object that will be created. It allows subclasses to alter the type of objects created. It's useful for abstracting object creation.

- [Pattern/factory.js](/Pattern/factory.js): Example implementation of the Factory pattern.
- [Pattern-Example/factory-example.js](/Pattern-Example/factory-example.js): Demonstration of using the Factory pattern.

## Usage

To use these design patterns in your JavaScript application, you can follow the examples provided in the respective files (`*-example.js`). Clone this repository and integrate the patterns into your own codebase as needed.

## Examples

You can find example implementations and demonstrations for each design pattern in the following files:

- [Pattern-Example/singleton-example.js](/Pattern-Example/singleton-example.js)
- [Pattern-Example/observer-example.js](/Pattern-Example/observer-example.js)
- [Pattern-Example/factory-example.js](/Pattern-Example/factory-example.js)

Feel free to run these examples to see the design patterns in action.

## Folder Structure

- `Pattern/singleton.js`: Singleton pattern implementation.
- `Pattern-Example/singleton-example.js`: Example usage of the Singleton pattern.
- `Pattern/observer.js`: Observer pattern implementation.
- `Pattern-Example/observer-example.js`: Example usage of the Observer pattern.
- `Pattern/factory.js`: Factory pattern implementation.
- `Pattern-Example/factory-example.js`: Example usage of the Factory pattern.

## Contributing

If you'd like to contribute to this repository or improve the code examples, please feel free to open an issue or submit a pull request. Your contributions are welcome.

## License

This repository is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as needed for your projects.
