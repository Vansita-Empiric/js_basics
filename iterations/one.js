// for

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i} is:`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
        
//     } 
// }

// while

// let i = 0
// while (i <=10) {
//     console.log(`Value of i is : ${i}`);
//     i +=2
// }

// let myArray = ['abc', 'pqr', 'xyz']
// let arr = 0
// while (arr< myArray.length) {
//     console.log(myArray[arr])
//     arr++
// }

// do...while

// let score = 11

// do {
//    console.log(`Score is: ${score}`) 
//    score++
// } while (score<=10);

// for of

// let arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// let greetings = "Hello"
// for (const i of greetings) {
//     console.log(i);
// }

// map

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")

// // console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// for in

// const myObj = {
//     js : 'JavaScript',
//     cpp : 'C++',
//     rb: 'Ruby',
//     swift: 'Swift by Apple'
// }

// for (const key in myObj) {
//     console.log(`${key} is shortcut of ${myObj[key]}`);
// }

// const programming = ["js", "py", "cpp", "swift", "java"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

// foreach

// const coding = ["js", "py", "cpp", "swift", "java"]

// coding.forEach(function(val) {
//     console.log(val)
// })

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printme(val) {
//     console.log(val);
// }

// coding.forEach(printme)

// coding.forEach( (val, index, arr) => {
//     console.log(val, index, arr);

// } )

// let myCoding = [
//     {
//         langName: 'javascript',
//         langFile: 'js'
//     },
//     {
//         langName: 'java',
//         langFile: 'java'
//     },
//     {
//         langName: 'python',
//         langFile: 'py'
//     }
// ]

// myCoding.forEach( (val) => {
//     console.log(val.langName, val.langFile);
// })