// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// add(5,3)

function add(num1, num2) {
    return num1 + num2;
}
const result = add(5,3)
// console.log("result: ", result);

function msg(username= "vyg") {
    if(!username)
        {
            console.log("enter username");
            return
        }
    return `${username}, hello`
}

// console.log(msg("vini"))

function calc(...num1) {
    return num1
}

// console.log(calc(100,200,300));


// const course = {
//     courseName: "js",
//     price: 999
// }

// function handleObj(any) {
//     console.log(`Course name is ${any.courseName} and price is ${any.price}`);
// }

// // handleObj(course)
// handleObj({
//     courseName: "python",
//     price: 799
// })

const arr = [10,20,30,40,50]
function secValue(getArray) {
    return getArray[1]
}

// console.log(secValue(arr))
console.log(secValue([50,60,70]));