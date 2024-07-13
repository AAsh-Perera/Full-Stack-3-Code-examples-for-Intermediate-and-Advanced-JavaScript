/*
Array Methods in JavaScript

JavaScript provides a variety of methods to work with arrays. 
These methods make it easier to perform common tasks such as adding, removing, and manipulating elements.

Let's explore some of the most commonly used array methods with examples.
*/

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];

// Adding elements to an array
fruits.push("Orange"); // Adds "Orange" to the end of the array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

fruits.unshift("Mango"); // Adds "Mango" to the beginning of the array
console.log(fruits); // Output: ["Mango", "Apple", "Banana", "Cherry", "Orange"]

// Removing elements from an array
fruits.pop(); // Removes the last element ("Orange")
console.log(fruits); // Output: ["Mango", "Apple", "Banana", "Cherry"]

fruits.shift(); // Removes the first element ("Mango")
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Finding elements in an array
let index = fruits.indexOf("Banana"); // Finds the index of "Banana"
console.log(index); // Output: 1

let hasCherry = fruits.includes("Cherry"); // Checks if "Cherry" is in the array
console.log(hasCherry); // Output: true

// Iterating over an array
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry

// Transforming an array
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

// Filtering an array
let filteredFruits = fruits.filter(fruit => fruit.startsWith("B"));
console.log(filteredFruits); // Output: ["Banana"]

// Reducing an array to a single value
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // Output: 16

// Sorting an array
let sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ["Apple", "Banana", "Cherry"]

// Reversing an array
let reversedFruits = fruits.reverse();
console.log(reversedFruits); // Output: ["Cherry", "Banana", "Apple"]

// Slicing an array
let slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to 2
console.log(slicedFruits); // Output: ["Banana", "Apple"]

// Splicing an array
fruits.splice(1, 1, "Blueberry", "Kiwi"); // Removes 1 element at index 1 and adds "Blueberry" and "Kiwi"
console.log(fruits); // Output: ["Cherry", "Blueberry", "Kiwi", "Apple"]