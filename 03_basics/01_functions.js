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
console.log(loginmessage()) // output -> undefined user just logged in


