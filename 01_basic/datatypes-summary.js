 //there are twotypes of datatypes primitive and non-premetives


 //Primitive (call by value)
 // 7 types: string, number, boolean , null, undefined, symbol(kisi bhi value ko unique bnane ke liye use hota h), BigInt(syntific value use in bigInt)

const score = 100
const scoreValue = 100.3 //number type

const isLoggedIn = false //booleantype

const outsideTemp = null //null type

let userEmail; //undefined
// let userEmail = undefined //undefined

// const id = symbol('123')
// const anotherId = symbol('123')
// console.log(id === anotherId);

// const bigNumber = 2232323223323n //bigInt




 
 //Refrence Type(Non Primitive)

 //Array, Objects, Functions

 const heros = ["abc","cfg","dfdffd"];  //array

 let myobj = {
    name: "fdf",
    age: "33",
    location:"trt"
 };  // objects

 const myfunction = function (){
    console.log("gkfg")
 }

 console.log(typeof myfunction)



//  ---------------------------------------


// stack memory use in  (Primitive type) , Heap memory use in (Non-primitive type) 


let myName = "thakarmandyal" 

let anotherName = myName
anotherName = "tytytyt"
console.log(myName)
console.log(anotherName)

let user = {
   email : "rrrr.com",
   upi : "yyy@ybl"
}
let userTwo = user
userTwo.email = "ytytyyttyty@gmail.com"

console.log(user.email)
console.log(userTwo.email)