// for of

// arr=[" " ," "," "]
// arr=[{},{},{}]

const arr=[1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

const greetings ="Hello World!"
for (const greet of greetings) {
    if(greet!= " "){
    // console.log(`each character is ${greet}`);
    }
}

// maps

const map = new Map()
map.set('IN'  , "INDIA")
map.set('USA'  , "UNITED STATES OF AMERICA")
map.set('UK'  , "UNITED KINGDOM")
map.set('PAK'  , "PAKISTAN")
// console.log(map);

for (const [key , value] of map) {
    // console.log(value );
    
}

const games ={
    'game1':'GTA5',
    'game2':'GTA6'
}
for (const game of games) {
    console.log(game);
    
 
}
