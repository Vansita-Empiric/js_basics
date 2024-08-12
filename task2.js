let data = [
    {"id": 1, "name": "Alice", "age": 25, "city": "New York", "score": 85, "active": true},
    {"id": 2, "name": "Bob", "age": 30, "city": "Los Angeles", "score": 92, "active": false},
    {"id": 3, "name": "Charlie", "age": 28, "city": "Chicago", "score": 78, "active": true},
    {"id": 4, "name": "David", "age": 35, "city": "Houston", "score": 88, "active": false},
    {"id": 5, "name": "Eve", "age": 22, "city": "Phoenix", "score": 95, "active": true},
    {"id": 6, "name": "Frank", "age": 27, "city": "Philadelphia", "score": 82, "active": false},
    {"id": 7, "name": "Grace", "age": 32, "city": "San Antonio", "score": 90, "active": true},
    {"id": 8, "name": "Hank", "age": 29, "city": "San Diego", "score": 76, "active": false},
    {"id": 9, "name": "Ivy", "age": 26, "city": "Dallas", "score": 89, "active": true},
    {"id": 10, "name": "Jack", "age": 31, "city": "San Jose", "score": 84, "active": false}
  ]

//Filter the array to get the names of all active users and map their names to an array of strings.

// let newArr = []
// data.filter( (val) => val.active ).map( (val) => newArr.push(val.name) )
// const newArr = []
// data.forEach( (val) => {
//     if(val.active) {
//         newArr.push(val.name)
//     }
// })
//  console.log(newArr);




//Calculate the average score of users who are older than 25 and are active.
// const n1 = []
// data.forEach( (val) => {
//     if(val.age > 25 && val.active == true) {
//         n1.push(val.score)
//     }
// })
// console.log(n1);
// sum = 0
// for (let i = 0; i < n1.length; i++) {
//     sum += n1[i]
// }
// let avg = sum/3
// console.log(avg)

//Filter out users who live in cities that start with the letter 'S' and map their details to include only id, name, and city.
let d2 = []
data.filter( (val) =>  val.city.toString().startsWith("S") ).map( (val) => d2.push(val.id, val.name, val.city) )
    
console.log(d2)


// Create a new array of objects that includes users' name, and double score (score multiplied by 2) for users with scores above 80.
//  let d3 = []
//  data.filter( (val) => val.score > 80).map( (val) => d3.push(val.name,val.score*2) )
// data.forEach( (val) => {
//     if(val.score > 80) {
//         d3.push(val.name)
//         d3.push(val.score*2)
//     }  
// })

// console.log(d3)  





//Filter the users who are inactive and map their details to an array that includes only id, name, and a boolean highScore indicating if their score is above 85.

// const newArr = []

// data.filter( (val) => val.active == false).map( (val) => newArr.push(val.id,val.name) )
// data.forEach( (val) => {
//     if(val.active == false) {
//         newArr.push(val.id)
//         newArr.push(val.name)
//         if(val.score > 85) {
//             newArr.push(val.score = "True")
//         } else {
//             newArr.push(val.score = "false")
//         }
//     }
// })
//  console.log(newArr);

