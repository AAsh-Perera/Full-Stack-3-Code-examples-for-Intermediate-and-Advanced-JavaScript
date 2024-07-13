/*
Typescript is basically javascript but a statically typed version of it.
do you remember we learned about what static and dynamically typed languages are?

javascript is a dynamically typed language or, its basically a loosely typed language.

but Typescript on the other hand is a statically typed language, 
which basically allows us developers to add and specify the types in our code.

lets look at some examples
*/

let fName = "Lemon";

// here we use explicit type to declare that the variable 'lName' is of type String.
let lName: String = "Grab";

// here we specify that the variable 'myVar' can be any type.
let myVar: any = 18;

// we can also specify the type for function parameters and return types.
function addNumbers(a: number, b: number): number {
    return a + b;
}

let sum = addNumbers(5, 10); // sum will be of type number

// using interfaces to define the structure of an object
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

let person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// using enums to define a set of named constants
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Green;

// using generics to create reusable components
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(["a", "b", "c", "d"]);

// TypeScript also supports classes and inheritance
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

let dog = new Dog("Buddy");
dog.bark();
dog.move(10);
dog.bark();

// using readonly to create immutable arrays
const names: readonly string[] = ["Dylan"];

// trying to modify the array will result in a compile-time error
// names.push("John"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// using type aliases to create custom types
type StringOrNumber = string | number;

let sample: StringOrNumber;
sample = "Hello";
sample = 123;

// using union types to allow a variable to hold multiple types
function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}

printId("ABC123");
printId(789);