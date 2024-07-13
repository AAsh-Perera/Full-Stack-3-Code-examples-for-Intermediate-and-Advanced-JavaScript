/*
Arrow Functions in JavaScript

Arrow functions, introduced in ECMAScript 2015 (ES6), 
provide a much more simple way to write a function. 
They also have some unique properties compared to traditional functions, 

Let's explore arrow functions with some examples.
*/

// Basic syntax of an arrow function
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 10)); // Output: 15

// If the function body contains only a single expression, you can omit the curly braces and the `return` keyword
const multiply = (a, b) => a * b;

console.log(multiply(5, 10)); // Output: 50

// Arrow functions with no parameters
const greet = () => console.log("Hello, world!");

greet(); // Output: Hello, world!

// Arrow functions with a single parameter do not require parentheses
const square = x => x * x;

console.log(square(5)); // Output: 25

// Arrow functions and lexical `this` binding
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

let person = new Person();

/*
In the example above, the arrow function inside `setInterval` uses `this` from the `Person` object.
Traditional functions would use `this` from the global context or be `undefined` in strict mode.
*/

// Arrow functions cannot be used as constructors
const Animal = () => {
    this.type = "Dog";
};

// let myAnimal = new Animal(); // Error: Animal is not a constructor

/*
Arrow functions do not have their own `this`, `arguments`, `super`, or `new.target` bindings. 
Therefore, they cannot be used as constructors and will throw an error if you try to use them with the `new` keyword.
*/

// Arrow functions and the `arguments` object
const showArguments = () => {
    console.log(arguments);
};

// showArguments(1, 2, 3); // Error: arguments is not defined

/*
Arrow functions do not have their own `arguments` object. If you need to access the `arguments` object, you should use a traditional function or rest parameters.
*/

// Using rest parameters with arrow functions
const sumAll = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(sumAll(1, 2, 3, 4)); // Output: 10

/*
In the above example, we used rest parameters to collect all arguments into an array and then used the `reduce` method to calculate the sum of all numbers.
*/

