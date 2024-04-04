//Array

const  myArr =[0,1,2,3,4,5,6]
const myHeros =["Shaktiman","Batman","Marvel"]

const myArr2= new Array(1,2,3,4)
//console.log(myArr[1]);

//Array Methods

//myArr.push(6)
//myArr.push(7)//[0,1,2,3,4,5,6,7]
//myArr.pop()//[0,1,2,3,4,5,6]
//myArr.unshift(9)//[9,0,1,2,3,4,5,6] shifting values adding values first index
//myArr.shift()//[0,1,2,3,4,5,6] deleting first value 
// console.log(myArr.includes(9));//false result in boolean
// console.log(myArr.indexOf(9));//-1 not exist value
// console.log(myArr.indexOf(3));//o/p =2 // 3 in 2 nd index

//const newArr = myArr.join()// join coverts array into string
// console.log(myArr);//[1,2,3,4,5,6] array format
// console.log(newArr);//1,2,3,4,5,6 convert an array to string
// console.log(typeof newArr);//string


//slice ,splice
//const  myArr =[0,1,2,3,4,5,6]
console.log("A",myArr);

const myn1= myArr.slice(1 , 3)

console.log(myn1)//[1,2]
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);//C[0,,4,5,6] splice portion remove by array
console.log(myn2);//[1,2,3]










