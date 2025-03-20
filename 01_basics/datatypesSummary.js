//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);




// *************************** Memories ***************************

// Stack(Primitive) & Heap(Non-Primitive)

let myYtName = "Possible"
let anothername  = "Sambhav"
anothername = myYtName  

anothername ="Sam"
console.log(myYtName);
console.log(anothername);

let userOne = {
    name: 'sambhav',
    age: '15',
    email: 'sambhav@google.com'
}

let userTwo = userOne

// console.log(userTwo);

userTwo.email="possible@google.com"

console.log(userOne.email);
console.log(userTwo.email);


