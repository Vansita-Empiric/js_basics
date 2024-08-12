import classA from './classOne.js'

class classB {
    constructor() {
        this.classA = new classA(); 
    }

    register(name, age, email, password) {
        this.classA.register(name, age, email, password); 
    }

    login(email, password) {
        return this.classA.login(email, password);
    }
}

const v1 = new classB();
v1.register('Vansita', 22, 'vansita@gmail.com', '123');
// v1.login('vansita@gmail.com', 'password123'); 
v1.login('vansita@gmail.com', '123'); 
