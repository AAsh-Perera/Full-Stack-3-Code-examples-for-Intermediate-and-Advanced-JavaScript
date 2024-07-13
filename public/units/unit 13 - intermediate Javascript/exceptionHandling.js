/*
Exception Handling in JavaScript

Exception handling is a mechanism to handle runtime errors in a controlled way. In JavaScript, this is done using the `try...catch` statement. This allows you to catch errors and handle them gracefully without stopping the execution of your program.

Let's explore how exception handling works with some examples.
*/

// Basic try...catch example
try {
    // Code that may throw an error
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.log("An error occurred:", error.message);
}

// Example with a custom error
try {
    let age = -5;
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    console.log("Age is valid");
} catch (error) {
    console.log("An error occurred:", error.message);
}

// Using finally block
try {
    let data = JSON.parse('{"name": "John"}');
    console.log(data);
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This block always executes");
}

/*
In the above examples, we demonstrated the use of `try...catch` to handle errors. 
The `try` block contains code that may throw an error, and the `catch` block contains code to handle the error. 
The `finally` block, if present, contains code that will always execute, 
regardless of whether an error occurred or not.
*/

// Nested try...catch blocks
try {
    try {
        let data = JSON.parse('{"name": "John"');
    } catch (error) {
        console.log("Inner catch: Invalid JSON format");
        throw error; // Rethrow the error to be caught by the outer catch
    }
} catch (error) {
    console.log("Outer catch: An error occurred:", error.message);
}

/*
In the above example, we used nested `try...catch` blocks. 
The inner `catch` block handles the specific error and then rethrows it to be caught by the outer `catch` block.
*/

// Custom error classes
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("This is a custom error");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

/*
In the above example, we created a custom error class by extending the built-in `Error` class. 
This allows us to create and throw custom errors with specific names and messages.
*/

