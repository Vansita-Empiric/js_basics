const user = {
    username: "Vansita",
    loginCount: 8,
    signedIn: true,
    getUserDetail: function () {
        // console.log("Got user details");
        console.log(`Username: ${this.username}`);
    }
}

// user.getUserDetail()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this
}

const userOne = new User("Vini", 1, false)
const userTwo = new User("Keshvi", 3, true)

console.log(userOne);
console.log(userTwo);