 //Objects are declaring two methos 1 literals and 2 sigleton
//If we make in constructor then it is declaring like singleton otherwise literals
//singletin=>constructor it is only in single form object
//literals=>multiple instances form object

/*Object Literals*/



// Object.create //it is like constructor declaring in singleton 

/*Declaring symbol*/

const mySym =Symbol("key1")

//object
const JsUser={
   name:"Shweta",
   "full name":"Shweta Ratnapure",
   [mySym]: "mykey1", //declaring symbol in keyvalue pairs
   age: 18,
   location:"Jaipur",
   email:"shweta@google.com",
   isLoggedIn:false,
   lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
//  console.log(JsUser[mySym]);
 //for changing values in keyvalue pairs

JsUser.email="shweta@chatgpt.com"

//for freezing after that not make change changeis not propogate 
//  Object.freeze(JsUser)
JsUser.email="shweta@microsoft.com"
// console.log(JsUser);

//adding function in js in js fuction is treated like a variable there is no descrimination

//adding greeting in JsUser
//If we refere  method(JsUser.greeting) in greeting we got o/p as Undefined 
JsUser.greeting = function(){
   console.log("Hello Js User");

 }

console.log(JsUser.greeting()); 

console.log(JsUser.greeting);//we got o/p as funtion reference [Funtion(anonymous)] funtion is not executed here

/*++++++Declare another function++++*/

//+++++Coverts the string in backtext we called it as a string interpolasion+++++++


//for referece same object we using this using this we got all the properties inside the objects 
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);//for accesing the value key value pair we using this keyword

 }
 console.log(JsUser.greetingTwo());
 console.log(JsUser.greeting());
