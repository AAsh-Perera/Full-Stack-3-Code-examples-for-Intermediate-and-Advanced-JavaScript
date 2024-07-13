/*
Storage and Cookies in JavaScript

JavaScript provides several ways to store data on the client side, including cookies, localStorage, and sessionStorage. 
These methods allow you to save data that can be accessed across different pages or sessions.

Let's explore how to use these storage methods with some examples.
*/

// Cookies
// Setting a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
// a cookie is basically string of key:value pairs, but its actually an object.

// Getting all cookies
console.log(document.cookie);

// Function to get a specific cookie by name
function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

console.log(getCookie("username")); // Output: JohnDoe

// Deleting a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

// localStorage
// Setting an item in localStorage
localStorage.setItem("username", "JohnDoe");

// Getting an item from localStorage
let username = localStorage.getItem("username");
console.log(username); // Output: JohnDoe

// Removing an item from localStorage
localStorage.removeItem("username");

// Clearing all items from localStorage
localStorage.clear();

// sessionStorage
// Setting an item in sessionStorage
sessionStorage.setItem("sessionUser", "JaneDoe");

// Getting an item from sessionStorage
let sessionUser = sessionStorage.getItem("sessionUser");
console.log(sessionUser); // Output: JaneDoe

// Removing an item from sessionStorage
sessionStorage.removeItem("sessionUser");

// Clearing all items from sessionStorage
sessionStorage.clear();

/*
In the above examples, we demonstrated how to use cookies, localStorage, and sessionStorage to store and retrieve data.

- Cookies: Used to store small amounts of data that can be sent to the server with each HTTP request. Cookies have an expiration date and can be set to expire at a specific time.
- localStorage: Used to store data with no expiration date. Data stored in localStorage persists even after the browser is closed and reopened.
- sessionStorage: Used to store data for the duration of the page session. Data stored in sessionStorage is cleared when the page session ends (e.g., when the browser tab is closed).

These storage methods provide different ways to manage client-side data depending on your needs.
*/
