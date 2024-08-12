let u1 = []

class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
  save() {
    let details = {
        name: this.name,
        age: this.age,
        email: this.email,
        password: this.password,       
    }
    u1.push(details)
  }
  get() {
    console.log(u1);
  }
  getMe() {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Email is ${this.email}`);
    console.log(`Password is ${this.password}`);
  }
}
let arr = []

class User2 {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    // this.e1 = new User("v1", 22, "v1@gmail.com", "123");
    this.e1 = v1;
  }
  getMe() {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Email is ${this.email}`);
    console.log(`Password is ${this.password}`);
  }
  signUp() {
    let details = {
        name: this.name,
        age: this.age,
        email: this.email,
        password: this.password,       
    }
    arr.push(details)
    console.log(arr)
    console.log(`Data stored successfully`);
  }
  login() {

    if(this.e1.email === this.email && this.e1.password === this.password) {
        console.log("correct");
    } else {
        console.log("Incorrect");
    }
    console.log(`Email of User: ${this.e1.email}`);
    console.log(`Email is ${this.email} and password is ${this.password}`);
  }
}

const v1 = new User("v1", 22, "v1@gmail.com", "123");
v1.save()
v1.get()
const vansita = new User2("vansita", 22, "vansita@gmail.com", "123");
//   vansita.signUp()
//   vansita.getMe()

// vansita.signUp()
