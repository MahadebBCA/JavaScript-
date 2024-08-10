//  /* Days 6 home work js course  */

//  // only practice 
// // use filter method of array 
// const  numbers = [1,2,3,4,5];
// const store = numbers.filter( (num) => {
//     //return num ;
//    // console.log(num + num);
// });
// //console.log(store);

// /* this is another process  of  filter method 
// */
//  const number = numbers.filter( (val) => (val > 3)
// //    {
// // if( val > 3){
// //     console.log(val);
// // }
// //}
// );
//console.log(number);

//  use forEach loop
// const array = [22,44,66,77,11,99,78];
// const storing = [];
// const removeItems = [];
// const num = array.forEach( (value)=> {
// if(value >= 50 ){
//     storing.push(value);
// }
// else {
//     removeItems.push(value);
// }
// });
 //console.log( "correct value : ",storing);
 // console.log( " Remove items : " , removeItems);

 
// use map method 

 const array = [22,44,66,77,11,99,78];
 const store1 = array.filter((add)=> add + add);
 const store = array
 .map((add)=> add + add )
 .map((add) => add - 20)
//   console.log(store1);
  //console.log(store);
  /* here we note that filter method can not return operation  result just return only  storing value  of the array  as the same condition we apply map method & successfully get a output 
   */
  const array2 = [5,10,20];
  const store2 = array2.reduce((acc,val)=> acc + val, 10);
  // console.log(store2);
 


 //  practice  topic :- 

const name = [" Mahadeb", " manish ", " mahir ", " dipak " ];
  let store3 =  name.push("debatosh");
//console.log(name);
const newarray =[" Mahadeb", " manish ", " mahir " ];
 let remove = name.pop();
 //console.log(remove);
//console.log(name);
 let string = name.toString();
// console.log(string);
 let store4 = name.concat(newarray);
//console.log(store4);

name.unshift("jayanta");
// console.log(name);
name.shift();
// console.log(name);

 let name1 = name.slice(1,3);
//console.log(name1);


// solve  question :-- ARRAY WITH  METHOD 

// question 1 :- create an array of numbers  from 1 to 5  and log the array  to the console 
// question 2 :- Access the first & last element of the array  & log the result 

const  Array =[ 1,2,3,4,5];
// console.log(Array);
// using template leterals 
// console.log(` The first element of the array :- ${Array[0]} , The last element of the array :- ${Array[Array.length - 1]}`)

//  question 3 :- use the push() method of array at the end of the array 
// Array.push(8,4,6);
//  console.log(Array);
// question 4 :- use the pop method  to remove the last element of the array 
// console.log(Array.pop());
// console.log(Array);
// question 5:- use the shift() method to remove the  first element of the array
// console.log(Array.shift());
// console.log(Array); 
// question 6 :- use unshift method of the array to add first  of the array 
// console.log(Array.unshift(10,29));
// console.log(Array);

// question 7 :- use the map method of array to create a new array where each number is doubled & log  them 
 
const  numbers =[ 2,3,6,5,7,9];
 const store6 = numbers.map( (num)=>  num + num);
  // console.log(store6);

// question 8:- use filter method to print only even numbers of the array & log them 
 const store7 = numbers.filter((val)=> {
if(val % 2 == 0){
  // console.log(val);
  return val;
}
 })

//  console.log(` Even numbers is :- ${store7}`);

 // question 9 :- use the reduce method in the  array to sum of the all array value & log them 
const value = [ 1,2,3,4,5,6,7,8,9,];
const sum = value.reduce((acc,val)=> acc + val );
// console.log( " the sum of all numbers :- " , sum);

/* Array iteration  */
// question 10:- use a for loop  to iterate over the array & log each element of  the array
 const num = [ 1,2,3,4,5];
 for(let i =0;i<num.length ;i++){ // here iterate that means print value serialy 
  // console.log( num[i]);
 }

// question 11 :- use a forEach loop to iterate over the array & log each element of the array
// using function  
 num.forEach(function(element) {
// console.log(element);
 });
 // using arrow function 
// forEach loop can not return value only console them within a body
   num.forEach((val)=> {
    // console.log(val);
   } )

   // question 12 :- create a two dimentional array ( matrix) & log them  
 let value2 = [ 
  [1,2,3],
  [4,5,6],
  [7,8,9]
 ];
 console.log(value2);
   // question 13:- access & log a specific element from the  two dimentional array .

   let specificmatrix = value2[1][2]; // access specific element from the array  
   console.log(specificmatrix) ;

