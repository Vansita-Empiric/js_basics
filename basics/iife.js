// Immediately Invoked Function Expression(IIFE)

(function one() {
    //named iife
    console.log(`DB Connected`)
})();

( (name) => {
    console.log(`abcd ${name}`);
} )('vini')