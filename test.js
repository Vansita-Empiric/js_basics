const myArr = []
// %DebugPrint(myArr)

// continious, Holey

// SMI(small Integer)
// Packed Element
// Double (float, String, function)

const arrTwo = [1,2,3,4,5]          // PACKED_SMI_ELEMENTS

arrTwo.push(6.0)                // PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')            // PACKED_ELEMENTS

arrTwo[10] = 11             // HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// Bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)            //just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '1'    // downgrade to HOLEY_ELEMENTS
arrFour[1] = '2'    // downgrade to HOLEY_ELEMENTS
arrFour[2] = '3'    // downgrade to HOLEY_ELEMENTS

const arrFive = []          // SMI

arrFive.push('1')           // PACKED_ELEMENTS
arrFive.push('2')           // PACKED_ELEMENTS
arrFive.push('3')           // PACKED_ELEMENTS

const arrSix = [1,2,3,4,5]          // PACKED_SMI_ELEMENTS
arrSix.push(NaN)        // PACKED_DOUBLE_ELEMENTS
arrSix.push(Infinity)        // PACKED_DOUBLE_ELEMENTS
