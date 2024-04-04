"use strict"; //treat all JS cide as newer version


// alert(3+3)
//for standard using ecmascript

/**Datatypes
 * let name= "Shweta"
 * let age=18
 * number= 2 to powe 53
 * bigint
 * string=""
 * boolean=True/false
 * null=standalone value(special type/empty)
 * undfined=let state
 * symbol= used for finding uniqueness more used in react or figma tools
 * 
 * object
 * 
*/

console.log(typeof"shweta");
console.log(typeof null);
console.log(typeof 34);
console.log(typeof undefined);

let id=Symbol('123')
//console.log(typeof(id))
let accountId=Symbol('123')//false

const bignum= 234485848438n
console.log(typeof(bignum))//bigint

//Reference or non primitive data types

const heros=["shaktiman","doga","batman"];
//objects=> Key value pairs
let myObj={
    name:"Shweta",
    age:"22",
}
console.log(typeof(myObj));

const myFunction=function(){
    console.log("shweta");
}
console.log(typeof myFunction);
