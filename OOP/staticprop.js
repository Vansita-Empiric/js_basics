class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createId() {
    return `123`
  }
}

const vansita = new User("Vansita")
// console.log(vansita.createId())      //can not be accessed because it is static

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone);

iphone.logMe()