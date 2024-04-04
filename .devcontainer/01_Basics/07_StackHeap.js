//Memory Types =>Stack(Primitive),Heap(Non-Primitive)/
//Stack is make a copy and Heap we get value refereence not copy 
let myYoutubename="ShwetaRatnapure"
let anothername=myYoutubename
anothername="SOMA"
 console.log(myYoutubename);
 console.log(anothername);

userOne={
    email:"shweta@gmail.com",
    upi:"user@ybl"
}
let  userTwo= userOne
userTwo.email="abc@gmail.com"
console.log(userOne.email);//make the changes inside original values
console.log(userTwo.email);
console.log(userTwo);

