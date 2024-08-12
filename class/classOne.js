 export default class classA {
  constructor() {
      this.users = []; 
  }

  register(name, age, email, password) {
      const user = { name, age, email, password };
      this.users.push(user);
      console.log(`Registered successful`);
  }

  login(email, password) {
      const user = this.users.find(user => user.email === email && user.password === password);
      if (user) {
          console.log(`User matched`);
          return true;
      } else {
          console.log('Invalid email or password.');
          return false;
      }
  }
}


