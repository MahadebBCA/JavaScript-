 /*  Function in js */

//  write a function to check if a numbers is  even or odd  & log the result 
function OddEven(numbers) {
    if (numbers % 2 == 0) {
        console.log(`${numbers} is EVEN`);
    } else {
        console.log(`${numbers}  is ODD`);
    }
}

//OddEven(78);

// write a function to calculate the squre ofa numbers  7 log the result 
function squre(number) {

    let squre = number * number;
    console.log(` ${number}  squre is ${squre}`);
}
//squre(5);

// write a funtion expression to find the maximum of two numbers & log that 
/* function expression that mean implement by function keyword or arrow funtion with the help of variable 
 */
 const maximum =(a,b) => { // using ARROW FUNCTION with variable 
    return a > b ? a : b;
 }
 //console.log(maximum(8,2));
// write a function  to expression to concate two string & return value the result 
  const concatenate = function(str1,str2){ // using function keyword with variable 
    return str1 + str2;
  }
 // console.log(concatenate('Mahadeb  ','jayanta'));

// write an  arrow function to calculate of two numbers  &  return to log the  result 

const sum = (d,h) => {
 return d+h;
}
//console.log(sum(4,8));
// write an  arrow function to check  if a  string contains  a specific character  & return to log 
  const String = (str,char)=>{
    return str.includes(char); // apply new javascript method includes() that is check the condition is true or false 
} 
 //console.log(String('mahadeb','m'));


 //  function parameter & default value 
 // write a function  that takes two   parameters & return their product &  provide a default value  for the second   parameter 
 const multiply = (a, b = 1) => {
    return a * b;
};

console.log(multiply(5, 10)); // Logs 50
console.log(multiply(5)); // Logs 5 (5 * 1)

 // write a function  that takes a person name & age  & retern a gretting massages . & provides a default value of age 

 const greet = (name, age = 30) => {
    return `Hello, my name is ${name} and I am ${age} years old.`;
};

console.log(greet('Alice', 25)); // Logs 'Hello, my name is Alice and I am 25 years old.'
console.log(greet('Bob')); // Logs 'Hello, my name is Bob and I am 30 years old.'

// write a Higher order function  that takes a function  and  a numbers , and calls the function  that   many times 
 const numbers = [1,2,3,4,5];
 const doubles = num => num * 2;
 const doublenumbers = numbers.map(doubles);
console.log( `${numbers}  * 2 = ${doublenumbers}`);

// write a higher order function that takes two function  and a value applies  the first function  to the value , and then applies the second  function to  the result 

function multiplir(factor){
    return function(numbers){
        return numbers * factor;
    };
}

const double = multiplir(2);
const triple = multiplir(3);
console.log(double(5));
console.log(triple(5));
