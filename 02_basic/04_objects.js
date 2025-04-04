// const tinderUser = new Object()  (singleton object)

// const tinderUser = {}     // (non-singleton object )

// console.log(tinderUser); 


const tinderUser = {}

tinderUser.id = "23223"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shubham",
            lastname:"thakur"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

//combining object 


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)  // {} all value are combined  

const obj3 = {...obj1, ...obj2}  // spreadout latest way to use for combining the objects

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "one@gmail.com"
    },
    {
        id: 2,
        email: "one@gmail.com"
    },
    {
        id: 3,
        email: "one@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //output :=> making the array and give keys and values 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
