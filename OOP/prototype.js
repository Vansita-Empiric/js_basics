// let myName = "Vansita     "

// console.log(myName.trim().length);

let myHero = ["Thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.vansita = function() {
    console.log("Vansita is present in all objects");
}

Array.prototype.v1 = function() {
    console.log("Hello");
}

// heroPower.vansita()

// myHero.vansita()

// myHero.v1()

// heroPower.v1()       //this will give error because array can access property of object but object can not access the property of array

// inheritance

const User = {
    name: "Vansita",
    gmail: "vansita@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Disha     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"Vansita ".trueLength()
"tea".trueLength()