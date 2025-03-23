function sayMyName () {
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName()

// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);
// }  
function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}  

const result = addTwoNumbers(10 , 78)
// console.log("Result :" , result);

function loginmessage (username){
    if (username === undefined || !username) {
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginmessage("sambhav"))
// console.log(loginmessage()) // output -> undefined user just logged in

function calculateCartPrice (...num1) { // (...)it's called rest operator it's spread as well
    return num1
}

function calculateCartPrice2 (val1 ,val2, ...num1) { 
    return num1
}

console.log(calculateCartPrice(11,2,3,4,556))
console.log(calculateCartPrice2(1,2,3,4,5));

const user ={
    username : "sambhav ",
    price : 999
}
function handleObject (anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username: "sam",
    price: 199
})


const myArray = [121,343,565,323,997]

function returnSecondValue(getArray){
return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([121,343,565,323,997]));



