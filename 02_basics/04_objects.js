// const tinderuser = new Object()

const tinderuser = {}

tinderuser.name = "sambhav"
tinderuser.id = "123abc"
tinderuser.email="sambhav@google.com"

// console.log(tinderuser);

const regularUser = {
    isLoggedIn: true ,
    fullname: {
        userFullName:{
            first_name:"vaibhav",
            last_name:"sharma"
        }
    }
}
// console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj5 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2) // {} is target and obj1 & obj2 are source

const obj3 = {...obj1 , ...obj2}


console.log(obj3);

const users = [
   {
    id:1,
    email: "s@gmail.com"
   }, 
   {
    id:2,
    email: "t@gmail.com"
   }, 
]

console.log(users[0].email);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("email"));


const course = {
    name: "js in hindi",
    price: 999,
    instructor: "striver"
}

// console.log(course.instructor); // we can use this but what if we have to print it more than two times it is still right but we more often use the below one 

// const {instructor}=course 
const {instructor: ins}=course 
console.log(ins);

// API 

// {
//     "coursename": "js in hindi",
//     "name " :  " sambhav",'
//     "price' : "free"
// }

[
    {},
    {},
    {}
]









