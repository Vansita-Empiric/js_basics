const user = {
    username: "vyg",
    price: 999,

    welcomemsg: function() {
        console.log(`Welcome ${this.username}`);
        console.log(this)
    }
}

// user.welcomemsg()
// user.username = "vini"
// user.welcomemsg()

// function one()
// {
//     let username = "v1"
//     console.log(this.username)
// }
// one()

// const one = function()
// {
//     let username = "v1"
//     console.log(this.username)
// }
// one()

// const one = () =>
// {
//     let username = "v1"
//     console.log(this)
// }
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "vini"})


console.log(addTwo(5, 3))