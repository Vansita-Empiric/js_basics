const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const a1 = another_array.flat(Infinity)
console.log(a1);

console.log(Array.isArray("Vansita"));
console.log(Array.from("Vansita"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))