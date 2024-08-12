let myArr = [3, 4, 5, 7, 9, 0, 1];
console.log(myArr);

var done = false;
while (!done) {
  done = true;
  for (i = 1; i < myArr.length; i++) {
    if (myArr[i - 1] > myArr[i]) {
      done = false;
      let temp = myArr[i - 1];
      myArr[i - 1] = myArr[i];
      myArr[i] = temp;
    }
  }
}

console.log(myArr);
