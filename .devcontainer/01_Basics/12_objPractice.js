
const mySym =Symbol("key1")

//object
const JsUser={
   name:"Shweta",
   "full name":"Shweta Ratnapure",
   [mySym]: "mykey1", 
   age: 18,
   location:"Jaipur",
   email:"shweta@google.com",
   isLoggedIn:false,
   lastLoginDays:["Monday","Saturday"]
}

//  console.log(JsUser.email);
// console.log(JsUser["email"]);
//  console.log(JsUser["full name"]);
//   console.log(JsUser[mySym]);
//   console.log(typeof mySym);//symbol

  JsUser.email ="shweta@chatgpt.com"
//   console.log(JsUser);

//Object.freeze(JsUser)
JsUser.email="shweta@google123.com"
//console.log(JsUser);//o/p=>
/**name: 'Shweta',
'full name': 'Shweta Ratnapure',
age: 18,
location: 'Jaipur',
email: 'shweta@chatgpt.com',
isLoggedIn: false,
lastLoginDays: [ 'Monday', 'Saturday' ],
[Symbol(key1)]: 'mykey1'
}*/

JsUser.greeting =function(){
   console.log("Hello JS user");
}
//console.log(JsUser.greeting());
 //console.log(JsUser.greeting);
JsUser.greetingTwo =function(){
   console.log(`Hello JS user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
