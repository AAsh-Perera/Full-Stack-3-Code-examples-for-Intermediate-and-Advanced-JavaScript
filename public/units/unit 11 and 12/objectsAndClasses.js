/*
Classes and Objects in JavaScript

JavaScript classes, introduced in ECMAScript 2015 (ES6)

Let's dive into some examples to understand how classes and objects work in JavaScript.
*/

// Defining a class
class Person {
    // The constructor method is called when a new instance of the class is created
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Method to get the full name of the person
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Method to get the age of the person
    getAge() {
        return this.age;
    }
}

// Creating an instance of the Person class
let person1 = new Person("Mark", "Rober", 30);

// Accessing properties and methods of the object
console.log(person1.getFullName()); // Output: Mark Rober
console.log(person1.getAge()); // Output: 30

/*
Did you know that classes can inherit properties and methods from other classes?

a new class (the child class) can inherit methods and fields from an existing class (parent class)
*/

// Inheritance in JavaScript
class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        // Call the parent class constructor usig 'super' 
        super(firstName, lastName, age);
        this.grade = grade;
    }

    // Method to get the grade of the student
    getGrade() {
        return this.grade;
    }
}

// Creating an instance of the Student class
let student1 = new Student("Jane", "Smith", 20, "A");

// Accessing properties and methods of the object
console.log(student1.getFullName()); // Output: Jane Smith
console.log(student1.getAge()); // Output: 20
console.log(student1.getGrade()); // Output: A

/*
In the above examples, we defined a `Person` class with a constructor 
and two methods: `getFullName` and `getAge`. 
We then created an instance of the `Person` class and accessed its properties and methods.

We also demonstrated inheritance by creating a `Student` class that extends the `Person` class. 
The `Student` class has an additional property `grade` and a method `getGrade`. 
We created an instance of the `Student` class and accessed its properties and methods, 
including those inherited from the `Person` class.
*/

// Using static methods
class MathUtil {
    // Static method to add two numbers
    static add(a, b) {
        return a + b;
    }
}

// Calling the static method without creating an instance of the class
console.log(MathUtil.add(5, 10)); // Output: 15

/*

an easy way to remember static from non static properties and methods is;
static methods and properties belong to the class.
non static ones belong to an object.

Static methods are called on the class itself, not on instances of the class. 
In the above example, we defined a static method `add` in the `MathUtil` class 
and called it without creating an instance of the class.
*/

// Using getters and setters
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Getter for the area of the rectangle
    get area() {
        return this.width * this.height;
    }

    // Setter to set the width and height of the rectangle
    set dimensions(dimensions) {
        this.width = dimensions.width;
        this.height = dimensions.height;
    }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50

// Using the setter to update the dimensions
rect.dimensions = { width: 20, height: 10 };
console.log(rect.area); // Output: 200

/*
Getters and setters allow you to define methods that are accessed like properties. In the above example, we defined a getter `area` and a setter `dimensions` in the `Rectangle` class. We accessed the `area` property and used the `dimensions` setter to update the width and height of the rectangle.
*/