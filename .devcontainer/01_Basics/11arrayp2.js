const marvel_heros= ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
 
//marvel_heros.push(dc_heros)

// console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);//flash ['superman','flash','batman'] =>this is third index 
const allHeros =marvel_heros.concat(dc_heros)
console.log(allHeros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator

const all_new_heros=[...marvel_heros,...dc_heros]
 console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

 const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);
  // o/p:/** [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]*/

  console.log(Array.isArray("shweta"));//false
  console.log(Array.from("Shweta"));//[ 'S', 'h', 'w', 'e', 't', 'a' ]
  console.log(Array.from({name:"shweta"}))//[]  this is  imp

 
 let score1 = 100
 let score2 =200
 let score3 = 300
 console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
 
 

 
    
 
