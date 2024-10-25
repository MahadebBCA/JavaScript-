// console.log("This is my first program in js!");
// for(let i=0;i<=5;i++){
//     console.log("this is loop ");
// }
// let name = "Mahadeb Maity ";
// for(let i of name){
//     console.log(i);
// }

// let student = {
//     name: "Mahadeb Maity",
//     age: 21,
//     address: "Manikara"
// };
// for (let i in student) {
//     console.log(`${i}::${student[i]}`);
// }
// for (let i=0; i <= 100; i++) {
//     if(i%2==0){
//         console.log("This is a even number:", i);
//     }
// }


// const guessNum = 25;
// let userNum = Number(prompt("Guess the number:")); // Convert to a number
// while (userNum != guessNum) { // Use strict equality for comparison
//     userNum = Number(prompt("Oh no, guess again bro? ")); // Convert to a number
// }
// console.log("Congratulations bro, you won the game! Let's party!");

// let str = "Mahadeb Maity";
// console.log(str[6]);
// let count = str.length;
// console.log(count);

// let str = "Mahadeb Maity";
// let str2 = "Debotosh Mana";
// console.log(str.slice(3,9));
// console.log(str.concat(str2));
// console.log(str.replace( "Mahadeb Maity","Jayanta samanta"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// generate gmail address for the user 

// let username = prompt("Enter you name :");
// let countlength = username.length;
//  const gmail = `@${username}${countlength}`;
//  alert(`Here your gmail is ready now watch , Gmail:${gmail}`);

// calculate average of the array marks

// let marks = [56,89,98,67,78,45,66,83];
// let sum = 0;
// for(let val of marks){
//     sum +=val;
//     console.log(`The value is ${val}`);
//     console.log(`sum of each value is ${sum}`);
// } 
// let avg = sum / marks.length;
// console.log(`marks length is : ${marks.length}`);
// console.log(`The total sum is ${sum}`);
// console.log(`average of the marks array is : ${avg}`);

// discount 10% of any shoping product 

// let product = [345,567,876,999,435,500];
// for(let i=0; i<product.length; i++){
//     let value = product[i];
//     let offer = product[i]/10; 
//     product[i] -= offer;
//     console.log(` total price is: ${value}, discount price is: ${product[i]}, 10% discount is: ${offer}`);
// }

// arrow function 
// let values = (a,b)=> {
//     console.log(a + b);
// };
// values(43,54);
// this is normal function call 
// function sum(a,c){
//      let b = a*c;
//      return b;
// }
// console.log(sum(20,45));

// count vowels 
// using normal function 
// function countvowels(str) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "a") {
//             let vowel = char;
//             count++;
//             console.log(`vowel is ${vowel} number of ${count}`);
//         }
//     }
//     return count;
// }
// console.log(`Number of vowels are present in this string:${countvowels(" My name is Mahadeb maity and your name ?")}`);


// to perform same condition using arrow function 

// use for each loop 

// let arr = [1,2,3,4,5];
// arr.forEach((val,idx,arr)=>{
// console.log(`${val} index of ${idx}, whole array is : ${arr}`);
// });


// DOM MANIPULATION 

// document.getElementsByClassName("firstheading")[0].style.color = "red";

// this is another process to change the text color 

// let headings = document.getElementsByClassName("firstheading");
// for (let i = 0; i < headings.length; i++) {
//   headings[i].style.color = "yellow";
// }

// let heading = document.querySelector("heading1");
// heading.innerText =" apna collage";
// console.log(heading);

// try to change  inner text of child node 

// document.querySelector("body").firstElementChild.innerText = "Mahadeb maity";
// document.querySelector("body").firstElementChild.innerText = "Mahadeb Maity";

// let heading = document.getElementsByClassName("heading1")[0];
// heading.innerText = heading.innerText + " from apna collage";

// let box = document.querySelectorAll(".box");
// this is simple concept
// box[0].innerText ="this is box 1";
// box[1].innerText ="this is box 2";
// box[2].innerText ="this is box 3";/

// this is logical concept using simple for loop 
// for(let i=0;i<3;i++){
//     box[i].innerText = `new box with js ${i+1}`;
// }
// this is logical concept using for of loop 
// let idx =0;
// for( let val of box){
//     val.innerText = `this is a new box ${idx}`;
//     idx++;
// }

// let value = document.querySelector("div");
// console.log(value);
// let value = document.querySelector(".attributes");
// console.log(value);
// let clas= value.setAttribute("class","newclass");
// console.log(clas);
// let id = value.getAttribute("class");
// console.log(id);

// let el = document.createElement("h1");
// el.innerHTML = "<h1> My name is Mahadeb maity </h1>";

// let access = document.querySelector("body");
// access.append(el);
// el.remove();

/* Q) create a new button element & give it a text . "click me!" 
 background color red and text color white . 
and insert the button as the first element of the body tag .*/

/*let button = document.createElement("button");
button.innerText = "Click me!";
button.style.backgroundColor = "red";
button.style.color = "white";
button.style.height ="50px";
button.style.width = "95px";

let access = document.querySelector("body");
access.append(button);
*/

/*Q) create a paragraph tag in html and give it a class and some styling . now create a new class in css and try 
to append the class to the paragraph element  .did you notice how you overwrite the class name when you add the
 new class using class list property  */

//  let paragraph = document.querySelector("p");
//  paragraph.classList.add("newclass");
//  here we use new peoperty in js this is a very usefull property in js so check mdn docs and study this above this 

let access = document.querySelector(".button");
// access.onclick = (evt) => {
//     console.log("HI i am was click ")
//     console.log(evt);
//     console.log(evt.type);
// }

// here evt is a object in this function(callback function)
/*access.addEventListener( "click" , (evt) => { 
    console.log("HI i am was click  using addEventlistener 1st time ");
});
access.addEventListener( "click" , () => { 
    console.log("HI i am was click using addEventlistener 2nd time ");
});
let handler3 = () => { 
    console.log("HI i am was click using addEventlistener 3rd time ");
}
access.addEventListener( "click" , handler3);

access.addEventListener( "click" , () => { 
    console.log("HI i am was click using addEventlistener 4th time ");
});

access.removeEventListener( "click" , handler3);
*/

// let boxs = document.querySelector(".box");
// boxs.onmouseover = () => {
//     console.log('This is a event handiling  and click dblclick in js mouse hover then works it ');
// }

// Q) create a toggle button that change the background color dark and white when click the button again and again. 

let togglebutton = document.querySelector(".toggle");
let currentmode = "light";
let body = document.querySelector("body");
togglebutton.addEventListener("click", () => {
    if (currentmode === "light") {
        currentmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currentmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentmode);
});
// end change background color 

// discuss about prototype  
const employee = {
    dress: "lehenga",
    calctax() {
        console.log("tax of each product 10% ");
    },
    discount: function () {
        console.log("15% discount for all product");
    }
};

const salary = {
    EmpName: "Mahadeb Maity",
    salary: 35000,
    calctax() {
        console.log("tax of each product 30% ");
    },
    details: {
        employee_details() {
            console.log(`employee name:${this.EmpName} and salary:${this.salary}`);
        }
    }
};// here we use object of object create , that mean object create inside the another object it's posible 
salary.__proto__ = employee;

// let tax = salary.calctax();// if object and proptotype have same method ,then object method will be used  this is heighest priority 
// console.log(tax);

// console.log(salary.calctax());
// end prototype 

// basic about class in javascript here are some example  with constructor  invoked (constructor invoked automatically)
class Toyota {
    constructor(brand) {
        console.log("this is a constructor invoked");
        this.brand = brand;
    }
    start() {
        console.log("START THE CAR ");
    }
    stop() {
        console.log("STOP THE CAR");
    }
    // setbrand(brand) {
    //     this.brand = brand;
    // }
}
// let fortuner = new Toyota("tayota");
// console.log(fortuner);
// fortuner.setbrand("fortuner");
// let lexus = new Toyota();
// lexus.setbrand("lexus");
// console.log(lexus);

// concept of inheritance with example super keyword 

class person {
    constructor(name) {
        this.name = name;
        console.log("I am a person and invoked by the constructor");
    }
    eat() {
        console.log("eating veg and non both dishes");
    }
    sleep() {
        console.log("sleep at night 8 hours");
    }
    work() {
        console.log("work do nothing");
    }
}
class engineer extends person {
    constructor(name) { /// here invoked won constructor with parent constructor with the help of  super keyword
        super(name);
        // this.name = name;

    }

    work() {
        super.eat(); // here we implement super keyword because we accessing parent class method eat so without super keyword this is not possible 
        console.log("building a flat 9BHK");
    }
}
//  let engobj = new engineer("Mahadeb Maity");
//  engobj.work();

// class doctor extends person {
//     work() {
//         console.log("treatment patients");
//     }
// }

// let engobj = new engeneer();
// let docobj = new doctor();
// invoked from console

// // let's practice question:: 
// // question number 1 :: you are create a new website for your collage , create a class user with 2 properties ,name and email . 
// // it also has a  method called view data that allow to view website data.
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewdata() {
        console.log("data is secrete inform...");
    }
}
// let student1 = new user("Mahadeb", "Mahadeb@gmail.com");
// console.log(`${student1.name} and ${student1.email}`);

// question number 2:  create a new class  called admin which inherit from user ,add a new method called edit data to admin allow it to edit website data 
class admin extends user {
    constructor(name, email) {
        super(name, email);
    }
    editdata() {
        console.log("edit some data from user");
    }
}
// let adminobj = new admin("debu", "debu@gmail.com");
// console.log(`${adminobj.name} and ${adminobj.email}`);
// adminobj.viewdata();
// adminobj.editdata();
//  this is first atempt excercise above 



// second atempt excercise 
// Question 1: Create a class 'user' with properties name and email, and a method to view data.
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Viewing website data...");
    }
}

// let student2 = new User("Mahadeb", "Mahadeb@gmail.com");
// console.log(`Student Name: ${student2.name}, Email: ${student2.email}`);
// student2.viewData();

// Question 2: Create a class 'admin' that inherits from 'user' and adds an edit data method.
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        console.log("Editing website data...");
    }
}

// let adminObj = new Admin("Debu", "debu@gmail.com");
// console.log(`Admin Name: ${adminObj.name}, Email: ${adminObj.email}`);
// adminObj.viewData();
// adminObj.editData();

// same task perform second time 

// now we discuss about error handling  + // asynchronous programming 
// let a = 3;
// let b = 5;
// console.log(a + b);
// setTimeout(() => {// this is asynchornous programming process 
//     console.log("hello world");
// }, 2000);
// try {
//     console.log(a + c);
// } catch (error) {
//     console.log(error);
// }
// console.log(a - b);
// console.log(a * b);
// end of error handling 

// callback function 
// function sum(a,b){
//     console.log(a+b);
// }
// function callback(a,b,sumcallback){
//     sumcallback(a,b);
// }
// callback(1,2,sum);

// settimeout 
// const print = ()=>{
//     console.log("settimeout process delay 3s");
// }
// setTimeout(print,3000);

// callback hell ( that means problem of the code )
/*function getdata(dataid) {
    setTimeout(() => {
        console.log("hello world ", dataid);
    }, 2000);
}*/
// this is one process to write the code 
/*getdata(1);
setTimeout(() => {
    getdata(2);
}, 2000);
*/
//  and this is the another process   to write the callback hell process 
function getdata(dataid,getnextdata) {
    setTimeout(() => {
        console.log("hello world ", dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}
getdata(1, ()=>{
    getdata(2, ()=>{
        getdata(3, ()=>{
            console.log("All data almosts loaded");
        });
    });
});

// then learn more about callback hell problem, learn promise condition better then callback hell to solve it 
// learn about async function with await  its called async await this is better then promise to solve it 
// to check mdn docs for more about this topic 
// learn IIFE = stands for immediate invocked function expression , this is the part of advanced javascript 
// API fatching api docs mdn what's about api call , which this api?
// practice project == currency converter 
// practice project == game build  stone paper cizer 
