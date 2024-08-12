
// object literals

const mySymbol = Symbol("key1")

const user = {
    name: "Vansita",
    [mySymbol] : "mykey1",
    "full name": "Vansita Gajjar",
    age: 21,
    location: "Surat",
    isLoggedIn: false,
    email: "v1@gmail.com"
}

// console.log(user.email);
// console.log(user["full name"]);
// console.log(user[mySymbol])

user.email = "v2@gmail.com"
// Object.freeze(user)
user.email = "v3@gmail.com"
// console.log(user);

user.greeting = function() {
    console.log("hello");
}

user.greeting2 = function() {
    console.log(`hello ${this.name}`);
}

console.log(user.greeting())
console.log(user.greeting2())