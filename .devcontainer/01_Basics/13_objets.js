//const tinderUser= new Object()
const tinderUser= {}
tinderUser.id="abc123"
tinderUser.name ="Shweta"
 tinderUser.isLoggedIn =false


 //console.log(tinderUser);

 const regularUser ={
    email :"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:"shweta",
            lastname:"ratnapure"
        }
    }
 }
// console.log(regularUser.fullName.userfullname.firstname);

const obj1={1:"a ", 2:"b"}
const obj2={ 3:"a ", 4:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)
//const obj3=Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}//spread operator
//console.log(obj3);


const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h1@gmail.com"
    },

]
users[1].email
//console.log(users[2].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));