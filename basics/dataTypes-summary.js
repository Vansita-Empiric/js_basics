// primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3    

const isLoggedIn = false
const abc = null
let state;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId)

const bigNumber = 987456321023651478901254789n

// Reference (Non Primitive)
//3 types: Array, Objects, Functions

const heros = ["abc", "pqr", "xyz"]
let myObj = {
    name: "Vansita",
    age: 22
}

const myFunction = function() {
    console.log("Hello");
}

//console.log(typeof bigNumber);

// stackmemory(primitive) , heap(non-primitive)

let name = "vansita"
let anotherName = name
anotherName = "vini"

//console.log(name)
//console.log(anotherName)

let userOne = {
    email: 'user1@gmail.com',
    upi: 'user1@ybl'
}

let userTwo = userOne

userTwo.email = "v1@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)