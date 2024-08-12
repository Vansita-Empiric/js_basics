let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())

// let myCreatedDate = new Date(2024, 0, 25)
// let myCreatedDate = new Date(2024, 0, 25, 15, 25)
// let myCreatedDate = new Date("2024-01-25")
let myCreatedDate = new Date("01-01-2024")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));