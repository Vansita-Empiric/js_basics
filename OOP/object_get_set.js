// const user = {
//     email: 'v@v1.com',
//     password: 'abc',

//     get email() {
//         return this._email.toUpperCase()
//     },

//     set email(value) {
//         this._email = value
//     },

//     get password() {
//         return this._password.toUpperCase()
//     },

//     set password(value) {
//         this._password = value
//     }
// }

const user2 = {
    email: 'v@v1.com',
    password: 'abc',

    getEmail: function email() {
        return this.email.toUpperCase()
    },

    setEmail: function email(value) {
        this.email = value
    },

    // get password() {
    //     return this._password.toUpperCase()
    // },

    // set password(value) {
    //     this._password = value
    // }
}

let a = user2.getEmail();
console.log("a", a);
// const tea = Object.create(user)
// console.log(tea.email);
// console.log(tea.password);