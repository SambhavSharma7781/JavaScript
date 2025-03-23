const user ={
    username : "sambhav",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to pubg mobile!`);
        console.log(this);
        
    }    

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage() 

// function sam (){
//     const name = "sam"
//     console.log(this.name);
    
// }
// sam()

const sam = () => {
    const name = "sam"
    console.log(this);    
}
sam()

// arrow function

// const addTwo = (num1 , num2) => { // this is basic arrow function
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2  // Implicit Return
// const addTwo = (num1 , num2) => (num1 + num2) 
const addTwo = (num1, num2) => ({username :"sambhav"} )

console.log(addTwo(8,7));
