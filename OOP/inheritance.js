class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const vansita = new Teacher("Vansita", "v1@gmail.com", "123")

// vansita.addCourse()
// vansita.logMe()

const v1 = new User("v1")

// v1.logMe()

console.log(vansita === v1);        //false
console.log(vansita === Teacher);        //false
console.log(vansita instanceof Teacher);        //true
console.log(Teacher instanceof User);        //false
console.log(vansita instanceof User);        //true