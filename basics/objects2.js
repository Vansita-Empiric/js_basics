
const user = {}

user.id = "123abc"
user.name = "vini"
user.isLoggedIn = false

// console.log(user);

const user1 = {
    email: "user1@gmail.com",
    fullname: {
        username: {
            firstname: "user",
            lastname: "1"
        }
    }
}

// console.log(user1.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = { 5: "a", 6: "b"}

// const obj4 = Object.assign({},obj1, obj2)
const obj4 = {...obj1, ...obj2}

// console.log(obj1);
// console.log(obj4);

// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js",
    price: "999"
}

const {courseName: cname} = course

// console.log(courseName);
console.log(cname);