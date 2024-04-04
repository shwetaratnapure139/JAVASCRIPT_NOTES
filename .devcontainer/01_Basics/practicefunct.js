function sayMyname() {
    console.log("S");
    console.log("O");
    console.log("M");
    console.log("A");
    
}
// sayMyname()
// function addTwoNumbers(num1,num2) {
//     console.log(num1+num2);
    
// }

function addTwoNumbers(num1,num2) {
//  let result =num1 + num2
//  return result
 return num1 + num2
    
}
const result = addTwoNumbers(3,5)
//console.log("Result=",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return  `${username} just logged in`
}

//console.log(loginUserMessage("Shweta"));
console.log(loginUserMessage("shweta"));