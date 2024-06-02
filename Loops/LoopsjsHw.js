//Question: Write a for loop that prints the numbers from 10 to 1 in descending order.
for (var i = 10; i>0; i--) {
    console.log(i);
}

// Question: Write a while loop that prints the first 5 even numbers starting from 0.
var even=0;
var check= 0;
while (check < 5) {
    console.log(even);
    even +=2;
    check++;
}
// Question: Write a do-while loop that prints the numbers from 1 to 5.
let number  = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);
// Question: Write a for loop that prints numbers from 0 to 10, but stops the loop when the number 7 is reached.
for (let i = 0; i <= 10; i++) {
    if (i == 7) {
      break;
    }
    console.log(i);
  }
// Question: Write a for loop that prints numbers from 0 to 10, but skips the number 5.
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
}
// Question: Write an if-else statement that checks if a given number x is positive, negative, or zero, and prints an appropriate message.
let x = 10; 
if (x > 0) {
  console.log("The number is positive");
} else if (x < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}
// Question: Write a switch statement that takes a variable day (with values from 0 to 6)
//  and prints the corresponding day of the week (e.g., 0 for Sunday, 1 for Monday, etc.).

let day = 3; 

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

//  question : Ternary operator to check if a given number y is even or odd
let y = 10;
console.log(y % 2 === 0 ? "Even" : "Odd");

//  question: For loop printing numbers from 1 to 20 with conditions
for (let num = 1; num <= 20; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

// question:  If-else statement for variable temperature
let temperature = 20;
if (temperature < 15) {
    console.log("Cold");
} else if (temperature >= 15 && temperature <= 25) {
    console.log("Warm");
} else {
    console.log("Hot");
}
