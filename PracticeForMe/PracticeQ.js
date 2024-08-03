// question no :: write a program to check if a numbers is  positive,negative,or zero, & log the result 
 const num = prompt("enter the number:");
 if(num > 1){
    console.log(num,"  your input number is positive.");
 }
 else if(num == 0){
    console.log(num,"  your input number is zero");
 }
 else {
    console.log(num,"  your input number is nagetive");
 }

//write a program  to check  if a  person is eligible for vote & log the result 
 const name = prompt(" PLEASE  ENTER YOUR NAME");
 const age = prompt(" PLEASE ENTER YOUR AGE:");
 if(age >= 18 && age <= 75 ){
    console.log(`Congratulation:${name} you are Eligible for vote 2025 . your age is: ${age} thank you ${name}`);
 }
 else if(age<18){
    console.log(`Sorry :${name} you are not  Eligible for vote 2025, your age under 18 years thanks ${name}`);
 }
 else {
    console.log(`WE ARE REALLY SORRY TO INFORM THAT ,${name} you  have to take rest at home . your age is over 75 years : thanks ${name}`);
 }


//nested if else statement 
//question:: find the largest three numbers  using nested if else statement 

// javascript 
let number1 = 45;
let number2 = 23;
let number3 = 67;

if (number1 > number2) {
   if (number1 > number3) {
      console.log(` ${number1} is a largest of a three numbers `);
   } else {
      console.log(`${number3} is a largest of three numbers `);
   }

} else {
   if (number2 > number3) {
      console.log(`${number2} is the largest numbers of three numbers  `);
   } else {
      console.log(`${number3} is the largest of all three numbers `);
   }
}


// Switch case 
// question:: determine the day of the week based on a numbers (1-7).

const input = prompt("please enter your days code like Monday=1,tuesday=2,or due to 7 days");
let dayname;

switch (parseInt(input)) { // after compile this code i realise that my written code is wrong 
   case 1:                  // wrong : all time javascript prompt return the string value of a input 
      dayname = " Monday ";  // so  i need to implement parseInt method and solve this problem 
      break;
   case 2:
      dayname = "Tuesday";
      break;

   case 3:
      dayname = " wednesday";
      break;

   case 4:
      dayname = " thursday";
      break;
   case 5:
      dayname = " Friday";
      break;

   case 6:
      dayname = " saturday";
      break;
   case 7:
      dayname = "Sunday";
      break;

   default:
      dayname = " sorry Invalid input day code , please  reinput right day code:  ";

}
alert(" the day is " + dayname);


//question : assign a grade base  on score 

let score = prompt(" Enter your stream score : ");
let grade;
switch (true) {
   case (score >= 90):
      grade = 'A';
      break;
   case (score >= 80):
      grade = 'B';
      break;
   case (score >= 70):
      grade = 'C';
      break;
   case (score >= 60):
      grade = 'D';
      break;
   default:
      grade = 'Fail';
}

alert("your score grade is " + grade);

// question :: check odd even number using conditional statement 

let Numbers = prompt(" Enter the  numbers ");
let result = ( Numbers % 2 == 0) ? `Number is even` : `${ Numbers} is odd`;
alert(result);

 // check leap year using combining condition 

let year = prompt(" Enter the year");
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(year + " is" + ( isLeapYear ? "  leap year " : " not a leap year "));

