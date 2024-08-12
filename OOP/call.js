function setUsername(username) {
    this.username = username 
    console.log("called");
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const vansita = new createUser("vansita", "v1@gmail.com", "123")

console.log(vansita);