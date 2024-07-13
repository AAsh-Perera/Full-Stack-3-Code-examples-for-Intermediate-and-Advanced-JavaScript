// Welcome to today's topic: Asyncronus functions and the await keyword!

/*
In Javascript we have a type of function called Async functions.
Async functions are functions running in parallel with other functions

so basically async functions will start and keep running till it finishes,
while other functions will continue to run.

a good example of async functions is setTimeout().

*/

function myFunc() {
    // the bellow function is an async function
    setTimeout(()=>{
        console.log('while the other functions got executed, this function was runnig.')
    }, 3000);
    // the bellow code is not async and will exicute while the top function runs.
    console.log('While i got executed, the setTimeout() is running.');
}

/* 
copy and pasete the following two lines of code in your index.js file to see this in action
import { myFunc } from "./units/unit14-AdvancedTopics/async-Functions-And-Promises/asyncAwait.mjs";
myFunc();
*/

// ----------------------------*****------------------------------------

/*
Now let's see what the 'async' keyword is.

'async' is a keyword that we can use in front of a function to make it into an async function.
Doing so will create an AsyncFunction object.

Async functions also make it so that the function returns a promise.
Let's see it in action.
*/

// This whole function is now an async function.
async function myAsyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('This function is a custom async function');
            resolve('After three seconds, my promise got resolved');
        }, 3000);
    });
}

myAsyncFunction().then((result) => {
    console.log(result);
    console.log('then it got logged');
});

console.log('Since myAsyncFunction is an async function, I got executed while it was running.');

/*
Now let's see what the 'await' keyword is.

'await' is used inside an async function to pause the execution of the function until a promise is resolved.
It makes the code look synchronous and allows us to write asynchronous code in a more readable manner.
Let's see it in action.
*/

async function myAsyncAwaitFunc () {
    let myPromise = new Promise ((resolve) => {
        setTimeout(()=> {
            resolve('This promise took 2 seconds to resolve');
        }, 2000);
    });

    // the function will now stop till the promise is resolved
    let result = await myPromise;
    // once it's done the function will continue
    console.log(result);
    console.log('this line of code waited till the promise got resolved');
    
    return 'the async function finished';
}

// Calling the async function and handling the returned promise.
myAsyncAwaitFunc().then((message) => {
    console.log(message);
});

console.log('This line is executed immediately, before the async function finishes.');