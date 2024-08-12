//if

// let temperature = 41

// if(temperature <= 50) {
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User's power: ${power}`)
// }
// console.log(`User's power: ${power}`)

// const balance = 1000
//  if(balance > 800) console.log("test"), console.log("test2");

// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750")
// } else if(balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const DebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && DebitCard && 2==3) {
    console.log("Allowed");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}