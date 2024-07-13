/*
The fetch() Method in JavaScript

The `fetch()` method is a modern way to make network requests in JavaScript. 
Think of it as a way to ask for data from a server, 
like ordering food from a restaurant. When you use `fetch()`, 
you're asking the server to give you some data, and the server responds with that data.

Let's go through some examples to understand how it works.
*/

// Basic fetch example
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        // Check if the response is okay (status is 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Convert the response to JSON format
        return response.json();
    })
    .then(data => {
        // Log the data we received to the console
        console.log(data);
    })
    .catch(error => {
        // Log any errors that occur during the fetch
        console.error('There was a problem with the fetch operation:', error);
    });

/*
In this example, we're making a GET request to a placeholder API. Here's what happens step-by-step:

1. We call `fetch()` with the URL of the data we want.
2. `fetch()` returns a Promise, which is like a box that will eventually contain the response.
3. We use `.then()` to open the box and check if the response is okay.
4. If the response is okay, we convert it to JSON format.
5. We use another `.then()` to log the data to the console.
6. If there's an error at any point, we catch it with `.catch()` and log the error.
*/

// POST request with fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // We're making a POST request
    headers: {
        'Content-Type': 'application/json' // We're sending JSON data
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }) // The data we're sending
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

/*
In this example, we're making a POST request to send data to the server. Here's what happens:

1. We call `fetch()` with the URL and an options object.
2. The options object specifies that we're making a POST request and that we're sending JSON data.
3. We include the data we want to send in the `body` property, converting it to a JSON string with `JSON.stringify()`.
4. The rest of the process is similar to the GET request: we handle the response and any errors.
*/

// Handling errors with fetch
fetch('https://jsonplaceholder.typicode.com/invalid-url')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

/*
In this example, we're making a request to an invalid URL to show how error handling works. If the URL is wrong or the server is down, the `.catch()` block will handle the error and log it to the console.
*/

// Using async/await with fetch. don't worry we will learn more about async/await later on
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchData();

/*
In this example, we're using `async/await` to make the code easier to read. Here's what happens:

1. We define an `async` function called `fetchData`.
2. Inside the function, we use `await` to wait for the `fetch()` call to complete.
3. We check if the response is okay and convert it to JSON.
4. If there's an error, we catch it with a `try/catch` block and log it to the console.

Using `async/await` makes the code look more like synchronous code, which can be easier to understand.
*/