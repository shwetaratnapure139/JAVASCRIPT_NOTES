// function sum(num1,num2){
//     console.log(num1+num2);

// }
// const result=sum(3,4)
// console.log("Result=",result);

// function sum(num1,num2){
//     let result = num1+num2
//     return result
// }
// const result = sum(3,4)
// console.log("result=",result);

function sum(num1,num2){
        //let result = num1+num2
        return num1 +num2
     }
    const result = sum(3,4)
    // console.log("result=",result);

    function logged(username){

        return `${username} just logged in`
    }
    //console.log(logged("Shweta"));//Shweta just logged in
    //console.log(logged(""))//just logged in
    //console.log(logged())//undefined just logged in

    // function loginUserMessage(user1="sam"){
    //     if(!user1){
    //         let name="amu"
    //         console.log(`please enter a ${name}`);
    //         return
    //     }
    //     return`${user1} just logged in`
    // }
    // //console.log(loginUserMessage("Shweta"));


    // function calculate(num1){
    //     return num1
    // }
    // console.log(calculate(2,3,4));//2

// function calculate(val1,val2,...num1){
//     return num1
// }
//console.log(calculate(200,400,500));//[ 200, 400, 500 ] on ...num1
//console.log(calculate(200,400,500,2000))//[ 500, 2000 ]

const user={
    user:"Shweta",
    price:199
}

function handleObject(anyObj){
//console.log(`user is ${anyObj.user} and Price is ${anyObj.price}`);
}
//handleObject(user)
handleObject({

    user:"sam",
    price:399

})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));
console.log([200,400,500,1000]);


