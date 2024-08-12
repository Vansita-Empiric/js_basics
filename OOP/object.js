function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`Username is ${this.username}`);
    console.log(`Price is ${this.score}`)
}

const a1 = new createUser("chai",25)
const a2 = new createUser("tea",250)

// a1.printMe()

console.log(a1);
console.log(a2);