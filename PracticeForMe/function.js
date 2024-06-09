//  practice function & methods   

// this is just a simple function examples 

function sum(a, b) {
    console.log("this is a sum calculation:" + (a + b));
}
//sum(2,5);
// use return 
function product(a, b) {
    var c = a * b;
    return c;
}
// console.log( " the product between two numbers  : " + product(3,6));
// arrow funtion example 
const addition = (a, b) => {
    var c = a + b;
    return c;
};
// console.log( addition(4,5));

// question no : 1 =>>> find the number of  vowels in a single strings  using ARROW FUNCTION 
// let countVowels = 0;
// const vowels = (str) => {
//     for (let value of str) {
//         if (value === "a" || value === "e" || value === " i" || value === "o" || value === " u") {
//             countVowels++;
//         }
//     }
//     return countVowels;
// };

//  console.log( ` the number of vowels are : ${vowels("mahadeb Maity")}`);


//  same question  will be solve using simple function 
//   let countVowel=0;
//   function vowels(str){
//     for (let value of str) {
//         if (value === "a" || value === "e" || value === " i" || value === "o" || value === " u") {
//             countVowel++;
//         }
//     }
// console.log(countVowel);
//   }
// vowels("mahadeb  maity");

// practice forEach loop to print value of  an array
// let num = [2, 3, 4, 5];
// num.forEach(
//     function printvalue(val) {
//         console.log(val);
//     }
// )
// using arrow funtion 
// let numbers = [1, 2, 3, 4, 5, 6];
// let string = ["mahadeb","jayanta","debotosh"];
//  string.forEach((val) => {
//     console.log(val);
// });

// for a given array of numbers , print the squere of each value using foreach loop
// / solution 
// let value = [ 54,56,78];
// value.forEach( (val)=> {
//     console.log(val *val);
// });
  
// // array methods map()
// let   numbers = [34,54,32];
//  let store = numbers.map((val)=>{
//     // console.log(val);
//     let  squere= val*val;
//     return squere;
// });
//  console.log(store);

 // another example 
//   let name = [" mahadeb maity", " jayanta samanta", " tilak sen ", " debotosh mana"];
//   name.map((value)=>{
//     console.log( `${value} length is ${value.length}`);
//   });
  // output  will be -- 
/** mahadeb maity length is 14
 jayanta samanta length is 16
 tilak sen  length is 11
 debotosh mana length is 14
 */
//  array filter method  which is return  filter value
//  let  value = [ 1,2,3,4,5,6,7,8,9];
//  let storeValue = value.filter((val)=>{
//     // return  val % 2===0; return odd value 
//     return val / 2!==5;
//  });
//   console.log(storeValue);
//  example of Reduce method 
//  let number = [34,23,54,56];
//  const output = number.reduce((pre,curr)=>{
//     return pre + curr;
//  });
//  console.log(output);

 //  home task question : we are given array of marks students ,filter out of the marks of students that scored 90+
 let mark = [ 90,67,89,94,95,91,45];
 let storeMarks = mark.reduce((pre,curr)=>{
    // return pre > curr? pre: curr;
    
 });
//  console.log(" heighest  marks is : " + storeMarks);

let marks =[45,67,89,90,93,92];
 let store = marks.filter((val)=>{
    return val >= 90;
});
// console.log(store);


