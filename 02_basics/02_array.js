const marvel_heroes = ["thor" , "ironman", "hulk"]
const dc_heroes = ["batman" , "flash", "superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); 
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes , ...dc_heroes]
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Sambahv"));
console.log(Array.from("Sambhav"));
console.log(Array.from({name: "Sambhav"})); // it cannot convert directly like this first we have to mention that create array from keys or array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2, score3));


