const mydate = new Date()

// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2004 , 11, 27  )
// let myCreatedDate = new Date(2004 , 11, 27 , 5 , 27 , 7 )
let myCreatedDate = new Date("2004-12-27")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // to get the seconds 

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1 );

newDate.toLocaleString('default' ,{
    weekday: "long",
})





