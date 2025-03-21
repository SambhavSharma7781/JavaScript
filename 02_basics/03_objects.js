// singleton
// Object.create


// object literals 

const mySymb = Symbol("key1")

const js_user = {
    name: "sambhav",
    "full name ": "sambhav sharma",
    [mySymb] : "passkey",
    age : 21 , 
    location : "london",
    email : "sambhav@google.com",
    isLoggedIn : true,
    lastLogingDays:["wednesday" , " friday"]
}

// console.log(js_user.email);  // ❌ don't use this syntax to access , does'nt work all the time
console.log(js_user["email"]);
console.log(js_user["full name "]);
console.log(typeof mySymb);
console.log(js_user[mySymb]);


js_user.email ="possible@google.com"
// Object.freeze(js_user)
js_user.email ="possible@apple.com" // did'nt change as the object got freeze earlier
console.log(js_user["email"]);
console.log(js_user);

js_user.greeting = function() {
    console.log("Hello JS User ");
}

js_user.greeting2 = function() {
    console.log(`Hello JS User, ${this["full name "]}`);
}
console.log(js_user.greeting());
console.log(js_user.greeting2());




