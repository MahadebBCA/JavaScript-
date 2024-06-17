// let store = document.getElementById("divid1");
// console.dir(store);
// divid1.innerText= " inner text formate ";
// let  store1 = document.getElementsByClassName("paragraph");
// console.log(store1);
// console.log(paragraph.innerText.firstchild= " first para ");
//  let store = document.getElementsByClassName("para");
// console.log(store[1].innerText);
// store[0].innerText = " this is first child";

//  let heading = document.querySelector("h1");
//  heading.getAttribute("class");
 
// heading.setAttribute("class","newHeading");
// let button = document.createElement("button");
// button.innerText= "click me!";
// button.style.color = "red";
// console.log(button);
//  let div = document.querySelector(".divbox");
//  div.append(button);
//  div.prepend(button);
//   let unorderedlist = document.querySelector(".unorderedlist");
//   unorderedlist.style.color= " yellow";
//  let div = document.querySelector(".subdivition");
//  div.before(button);

// Dom manipulation question - create a new button element using only js 
// give it a text " click  me " background color "red ", text color "white",
// then insert button on web pages in html body tag 


let newBtn= document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.color ="white";
newBtn.style.backgroundColor = "red";

 document.querySelector("body").prepend(newBtn);
// create eny random text & insert the  body tag 
 let text = document.createElement("h2");
 text.innerHTML= " <b> <i> Mahadeb Maity </i></b>";
text.style.color ="blue";
 document.querySelector("body").prepend(text);

 // Dom question --   create a paraggraph tag in html .give it a class & styling 
 // now create a new class in css try  to append this class paragraph  
 
 let newClass =document.createElement("newClass");
 newClass.innerText ="access by javascipt";
  let accesspara = document.querySelector(".para");
  // accesspara.append(newClass);
 // here is  this one process to implement new class
  //  accesspara.appendChild(newClass);
  // newClass.classList.add("new-Class");
// here is this 2nd process to implement new class 
  accesspara.append(newClass);
