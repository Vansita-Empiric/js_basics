class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password.toUpperCase()}vansita`
    }

    set password(value) {
        this._password = value
    }
}

const v1 = new User("v1@gmail.com", "abc")
console.log(v1.password);
console.log(v1.email);