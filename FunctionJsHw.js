/*  javaScript Function Hw)) ... Question 1: Default Parameters
1. Write a javascript programe function `greet` that takes a parameter `name` and logs "Hello, [name]" to the console. If no name is provided, it should default to "Guest".*/
console.log("HomeWork -->> 1 ");
function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}

greet("John"); 
greet();       

/*  javaScript Function Hw))...Question 2: Function Overloading 
2. Create two functions `calculateArea`. The first one takes two parameters `length` and `width` and returns the area of a rectangle. The second one takes one parameter `radius` and returns the area of a circle.
 */ 

// Function to calculate the area of a rectangle
console.log("HomeWork -->> 2 ");
function calculateArea(length, width) {
    return length * width;
}

// Function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
 // here in this  program we implement javascript Function overloading  these function  is calculatearea 
console.log("Area of rectangle:", calculateArea(3, 2));
console.log("Area of circle:", calculateArea(2));       

/*javaScript Function Hw))... Question 3: Anonymous Functions

3. Write javascript program  anonymous function that takes two numbers and returns their product. Assign it to a variable named `multiply` and call it with the arguments 4 and 5 */
console.log("HomeWork -->> 3 ");
let Anonymous = function(x,Y){
    return x*Y;
}
 let multiply = Anonymous(4,5)
 console.log(multiply)

 /*javaScript Function Hw))... Question 4: Arrow Functions
write a javascipt program Create an arrow function `isOdd` that takes a number and returns `true` if the number is odd and `false` otherwise */ 
console.log("HomeWork -->> 4 "); 
const isOdd= (number) => {
    if (number % 2==0){
        return true
    }
    else {
        return false 
    }
 }

let result =isOdd(6)
let Result=isOdd(5)
console.log(result)
console.log(Result)

 
/*javaScript Function Hw))... Question 5: Higher-Order Functions

5. Write a javascript program higher-order function `applyOperation` that takes two numbers and a function as arguments, and applies the function to the numbers. Demonstrate this with an `add` and a `subtract` function.
 */
// Define the higher-order function
console.log("HomeWork -->> 5 ");
function applyOperation(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

console.log(applyOperation(5, 3, add));       
console.log(applyOperation(5, 3, subtract));  


/*javaScript Function Hw))... 
Question 6: Immediately Invoked Function Expression (IIFE)

6. write a javascript program Create an IIFE that logs "This is an IIFE" to the console*/
console.log("HomeWork -->> 6 ");
(function(name) {
    console.log("This is an  "+ name);
})('IIFE');


/*javaScript Function Hw))...Question 7: setTimeout

7. Use `setTimeout` to log "Hello after 2 seconds" to the console after a delay of 2 seconds.
 */

setTimeout(() => {
    console.log("HomeWork -->> 7 ");
    console.log("print hello after 2s delay");
},2000);

/* javaScript Function Hw))... Question 9: Function Hoisting
9. Write a js  function `hoistedFunction` that logs "This function is hoisted" to the console. Call this function before its declaration to demonstrate hoisting. */
// Call the function before its declaration
console.log("HomeWork -->> 9 ");
hoistedFunction();

// Declaration of the function
function hoistedFunction() {
  console.log("This function is hoisted");
}
/* javaScript Function Hw))... Question 8: setInterval
8.  write a js program to Use `setInterval` to log "Repeating every second" to the console every second. */
// setInterval that means repeat print just like a loop system 
console.log("HomeWork -->> 8 ");
setInterval(() => {
    console.log("Repeating every second");
  }, 2000);
  
// /* javaScript Function Hw))... Question 10: Arrow Function and Hoisting
// 10. Write a js  arrow function `notHoisted` that logs a message to the console. Try calling this function before its declaration and observe what happens. */
// // Call the arrow function before its declaration
// console.log("HomeWork -->> 10 ");
// notHoisted();
// // Arrow function declaration after its call 
// const notHoisted = () => {
//     console.log("This is an arrow function");
// };
// //  above this notHoisted function  can't run because--->>>  ReferenceError: Cannot access 'notHoisted' before initialization
