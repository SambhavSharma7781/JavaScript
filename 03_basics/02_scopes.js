//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "sam"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
    
}


if(true ){
    const username = "sambhav"
    if(username === "sambhav"){
        const website = " google"
        // console.log(username +  website);
     }
}

// *************************** Interesting ***************************


console.log(addTwo(7)); // when u store the function in a expression then you cannot access it before its initialisation
const addTwo = function (num) { 
    return num + 7
}

console.log(addOne(7)); //  here it will work fine 
function addOne(num) {
    return num + 7 
}

