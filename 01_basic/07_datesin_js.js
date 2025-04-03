// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let createdDate = new Date(2023, 0, 23)
// let createdDate = new Date("2023-01-14") //yymmdd
// let createdDate = new Date("01-14-2023") 
// console.log(createdDate.toDateString());  //month start from 0 in javascript
// console.log(createdDate.toLocaleString()); 


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/100));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleDateString('default',{
    weekday: "long",
})