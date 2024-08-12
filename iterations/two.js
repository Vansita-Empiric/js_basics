// const coding = ["js", "py", "cpp", "swift", "java"]

// const value = coding.forEach( (val) => {
//     console.log(val);
//     return val
// })

// console.log(value);

// filter

// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter( (num) => num > 5)

// const newNum = myNum.filter( (num) => (num > 5))

// const newNum = myNum.filter( (num) => {
//     return num > 5
// })

// const newNum = []
// myNum.forEach((num) => {
//     if(num > 5) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((item) => item.genre == 'History')
const userBooks = books.filter((item) => item.publish <= 2008 && item.genre == 'History')

// console.log(userBooks);

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(acc)
//     return acc + currVal
// }, 0)

// const myTotal = myNums.reduce( (acc, currVal) => acc + currVal,0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js',
        price: 999
    },
    {
        itemName: 'python',
        price: 899
    },
    {
        itemName: 'c++',
        price: 399
    }
]

const price = shoppingCart.reduce( (acc,item) => (acc + item.price),0 )
console.log(price);