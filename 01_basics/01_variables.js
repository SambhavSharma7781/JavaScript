const accountId = 2200820100134
let accountEmail = "sambhav7717@gmail.com"
var accountPassword = "12345"
accountCity = "Sambhal"
let accountstate;

// accountId = 2  can't update the value as it already defined with const(i.e not allowed)
accountEmail = "sam7717@google.com" // allowed
accountPassword = "54321" // allowed 
accountCity ="Moradabad" // allowed 

console.log(accountId);

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountstate])

