// singleton
// Object.create


// objects literals
const symb = Symbol("mykey1")
const jsUser = {
    name:"shubham",
    [symb] : "this is key",
    age : 18,
    location:"hp",
    email:"abc.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser)
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(typeof jsUser.symb)
// console.log(jsUser[symb])

// jsUser.email = "shubham.chatgpt.com"

// Object.freeze(jsUser)
// jsUser.email = "sssss.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
};

console.log(jsUser.greeting);

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
