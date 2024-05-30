/* 1-->> Function and Rest Parameters

What will be the output of the following function call?
function print(a, b, ...others) {
    console.log( " output will be " a, b, others);
}
print(10, 30, 60, 40, 80, 888, 99);
*/
/*output::-->> 

output will be 10,30,60,40,80,888,99 
*/
/*2-->> Object Creation and Access

:: Create an object named student with properties name, age, and grade.

:: Access and print the name property of the student object using both dot notation and bracket notation.

</code>
*/
let student = {
    name : "Mahadeb",
    age : 21,
    grade : 'A'
  }
 
  console.log(student.name)
  console.log(student['name'])
  
 /*   Output will be :: 
Mahadeb
Mahadeb
 both are same output */
 
 /*3-->> Updating Object Values

Given the following object:
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    year: 2022
};
:: Update the title property to "Advanced JavaScript" using both dot notation and bracket notation.

:: Print the updated title property.
*/

/* </code> */ 
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    year: 2022
}
book.title="Advanced JavaScript";
console.log(book.title)
console.log(book)

book['title']="Advanced JavaScript";
console.log(book.title)
console.log(book)

/* Output: 
{title:" Advanced JavaScript"}
{ title:"Advanced JavaScript" , auther: "John Doe", 2022}

{title:" Advanced JavaScript"}
{ title:"Advanced JavaScript" , auther: "John Doe", 2022}

 both Output will be  same ,  
*/

 /* 4-->> Deleting Object Properties

Consider the following object:
let employee = {
    name: "Alice",
    position: "Developer",
    salary: 50000
};
Delete the position property.

Print the object before and after deleting the property.
*/ 

/* </code> */
let employee = {
    name: "Alice",
    position: "Developer",
    salary: 50000
};
console.log(employee)
delete employee.position
console.log(employee)

/* Output: 
Before delete : 

{  name: "Alice", position: "Developer" , salary: 50000}
 After delete: 
 { name:"Alice", salary:50000}*/ 
 
/*  5 -->> Methods in Objects

Create an object car with properties brand, model, year, and a method getCarAge that calculates the age of the car based on the current year (2024).

Call the getCarAge method and print the result.*/ 

/* </code> */
let car = {
    brand : "BMW",
    model : "BMWB68B0A12",
    year : 2019,
    getCarAge : function(){
        return 2024 - this.year;
    } 
}
console.log(car.getCarAge());
 
 /*  6-->> 
 Using this Keyword

Explain what the this keyword refers to in the following code:
let user = {
    name: "Bob",
    birthYear: 1990,
    getAge: function() {
        return 2024 - this.birthYear;
    }
};
console.log(user.getAge());

Definition:: 

This” keyword refers to an object that is executing the current piece of code. 
here we call getAge function() which returns  value calculate user birthday using this keyword 

 */
  
  /* 7-->> Nested Objects

Create an object house with properties address, size, and a nested object owner with properties name and age.

Access and print the name property of the owner object.
  */
 /*  
  </code> */
  let house = {
    adress : " Balai panda",
    size : " 32Sqft",
    owner :  {
        name : "Mahadeb",
        age : 21    
    }
};
console.log(house.owner.name);

  
  /* 8-->> 
  Object Method Binding

Explain how the call, apply, and bind methods work with examples from the provided code.

  */
 /*  Implement Call method */ 
  
  const obj = {
    name: 'Mahadeb',
    greet: function(greeting) {
        console.log(greeting + ', ' + this.name);
    }
};

const anotherObj = {
    name: 'Tom&jerry'
};

obj.greet.call(anotherObj, 'Hello'); 

/* implement Apply method */

const obj = {
    name: 'Mahadeb',
    greet: function(greeting) {
        console.log(greeting + ', ' + this.name);
    }
};

const anotherObj = {
    name: 'Tommy'
};

obj.greet.apply(anotherObj, ['Hi']); 

/* implement Bind method */
const obj = {
    name: 'Subha',
    greet: function(greeting) {
        console.log(greeting + ', ' + this.name);
    }
};

const anotherObj = {
    name: 'Sutrishna'
};

const boundGreet = obj.greet.bind(anotherObj);
boundGreet('Hey'); 

/* 9-->> 
Given the object person:
let person = {
    name: "Sani",
    age: 20,
    city: "Dhaka"
};
Use a for...in loop to print all the keys and values of the person object.
*/
let person = {
    name: "Sani",
    age: 20,
    city: "Dhaka"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

/*
10-->> 
 Object Methods (Object.keys, Object.values, Object.entries)

Explain the difference between Object.keys, Object.values, and Object.entries methods with examples.

  */
  const person = {
    name: "Sani",
    age: 20,
    city: "Dhaka"
};

const keys = Object.keys(person);
console.log(keys); 
// Output: ["name", "age", "city"]
// Returns an array contains  the keys of the object.
 const values = Object.values(person);
console.log(values); 
// Output: ["Sani", 20, "Dhaka"]
// Returns an array contains  the values of the object.
const entries = Object.entries(person);
console.log(entries); 
// Returns an array of arrays, where each inner array contains a key-value pair.
// Output: [["name", "Sani"], ["age", 20], ["city", "Dhaka"]]


/*
11-->> Explain the difference between Object.freeze and Object.seal with examples from the provided code.
*/
const person = {
    name: "Sani",
    age: 20,
    city: "Dhaka"
};
// object freeze example : 

Object.freeze(person);
//  Object.freeze means :: 
/*  we cannot add new properties, remove existing properties, or change the values of existing properties.cannot be modified in any way the object. 
*/
person.age = 21;       
person.country = "BD"; 
delete person.city;   
console.log(person); 
// Output: { name: "Sani", age: 20, city: "Dhaka" }

// object seal example : 

Object.seal(person);
// object seal means : 
// we cannot add new properties or delete existing properties. However, we can still modify the values of existing properties.
person.age = 21;      
person.country = "BD"; 
delete person.city;   

console.log(person); 
// Output: { name: "Sani", age: 21, city: "Dhaka" }

// 11>> What will be the output of the following code?

let obj = {
    id: 1
};
Object.freeze(obj);
obj.id = 2;
console.log(obj.id); 
// What will this print and why?
output will be 1, because object.freeze   can't change the  any keys or values 
// What will be the output of the following code?

let obj = {
    id: 1
};
Object.seal(obj);
obj.id = 2;
delete obj.id;
console.log(obj.id); 
// What will this print and why?
output will be 2, because object.seal  can modify  the existing  value but not delete any values 
