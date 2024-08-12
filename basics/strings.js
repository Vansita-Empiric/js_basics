const name = "vansita"
const age = 22

// console.log(name + count + " value");

// console.log(`My name is ${name} and age is ${age}`)

const gameName = new String('abcd-efghi-jklmno')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('d'));

// const newString = gameName.substring(0,4)
// console.log(newString)

// const anotherString = gameName.slice(-9,4)
// console.log(anotherString)

// const newStringOne = "      vansita     "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://v1.com/vansita%20gajjar"
console.log(url.replace('%20','-'))

console.log(url.includes('vansita'));

console.log(gameName.split('-'))