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
  others question solved later 
