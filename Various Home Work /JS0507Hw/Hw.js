// question no 1** write a Code to create  basic calculator in JavaScript using functions.
let print = document.getElementById("output");

let num1 = parseInt(prompt("Enter the 1st number:"));
let num2 = parseInt(prompt("Enter the 2nd  numner:"));
function add(num1, num2) {
   let result = num1 + num2;
   console.log(`addition is ${result}`);
   print.innerText = ` Your  Addition Result is  ${num1} & ${num2} of : ${result}`;
}
function sub(num1, num2) {
   let result = num1 - num2;
   console.log(`Substraction is ${result}`);
   print.innerText = ` Your Subtraction Result is ${num1} & ${num2} of  : ${result}`;
}
function mul(num1, num2) {
let result =  num1 * num2;
   console.log(`multiplecation  is ${result}`);
   print.innerText = ` Your Multiplecation Result is ${num1} & ${num2} of  : ${result}`;
}
function div(num1, num2) {
   if (num2 == 0) { // Check if dividing by zero
        print.innerText = " Cannot divide by zero" ;
   }
   else { 
       let result = num1 / num2;
       console.log(`divition is : ${result}`);
       print.innerText = ` Your Divition Result is  ${num1} & ${num2} of : ${result}`;
   }
}

let exp=prompt("Enter expression:"); // use switch case 
switch(exp){
 case '+':
   add(num1,num2);
   break;
 case '-':
   sub(num1,num2);
   break;
 case '*':
   mul(num1,num2);
   break;
 case '/':
   div(num1,num2);
   break;
   default:
   console.log("invalid input");
}
  
// question no 2** Write a program to check a number prime or not.

 let number =prompt("Enter number:"); 
let p = 0;
for (let i = 2; i <= number / 2; i++) { 
   if (number % i === 0) {
       p = 1;
       break;
   }
}

if (p === 0 && number > 1) { 
   console.log(`${number} is prime number`);
} else {
   console.log(`${number} is not prime number`);
} 

   // question no 3** Write a program to find 2nd smallest from 3 numbers.
   let num1 = parseInt(prompt("Enter the 1st number:"));
   let num2 = parseInt(prompt("Enter the 2nd  number:"));
   let num3 = parseInt(prompt("Enter the 3rd  number:"));

function secondSmallest(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return Math.min(num2, num3);
    } else if (num2 <= num1 && num2 <= num3) {
        return Math.min(num1, num3);
    } else {
        return Math.min(num1, num2);
    }
}

console.log(secondSmallest(num1,num2,num3));





