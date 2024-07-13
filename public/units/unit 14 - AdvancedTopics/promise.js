/*
Let's talk about the Promise object and how it works in Async functions.

Promise objects in java are a lot like promises irl
the promis is either kept or is broken.

the Promise obejct takes in a function whoch takes in two callbacks, where one represents that the promise was kept,
and the other represents the promise was broken. 

when the producting code with in the Promise
object excutes and gets the resut, it will call one of these callbacks

lets look at these callbacks
1. resolve - means Success, the promise was kept.
2. reject - means Error or Rejected, the promise was not kept.

let's look at an exaple of a promise
*/

let string1 = "Hey I think Rayquaza is the coolest Pokemon";
let string2 = "Hey I think Rayquaza is the coolest Pokemon";

let myPromise = new Promise((resolve, reject) => {
    // I'm going to make a promise to you now.
    // I promise that these two strings say the same thing.
    // So let's make the promise
    if (string1 === string2) {
        resolve('See, what did I tell you? The two strings are the same.');
    } else {
        reject('I\'m sorry, I broke my promise to you :(');
    }
});

/* 
now when this promise is called, it will either reject it or resolve it.
*/

// ----------------------------------*****----------------------------------------------

// Promises can also be used in Async functions as well. lets see how that works.

// we will first use the .then() and .catch() functions
/*
there are two types of code in a promise, "Producing code" and "Consuming code"
Producing code - this code that takes time, it is the part of the code that creates and returns a Promise. 
It performs some operation that might take time.

Consuming code - this is code that waits for a result. 
It is the part of the code that uses the result of the Promise, 
once it is resolved or rejected. 
It waits for the Promise to complete and then performs some action based on the result.

let's look at how this works in action.
*/

let producingCodeEx = new Promise ( (resolve, reject) => {
    // this is the producing code
    setTimeout(() => {
        return resolve('This promise took 2 seconds to complete');
    }, 2000);
});

producingCodeEx.then((result) => {
    console.log(result);
    console.log('This code waited for the promise to complete before being executed.');
}).catch((err) => {
    //this is used to catch if the promise is rejected.
});
console.log("this code didn't wait for the promise to execute.");

/* 
the code in the .then() and .catch() are consuming code, that wait for a result.
*/

