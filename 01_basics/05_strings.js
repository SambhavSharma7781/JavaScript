const name = "sambhav"
let repocount = 50

console.log(name + repocount); // ❌ outdated syntax

console.log(`my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('sam-bhav')
// console.log(gamename[14]);
// console.log(gamename.__proto__);
 console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename);
console.log(gamename.charAt(4));
console.log(gamename.indexOf('b'));

const newString = gamename.substring(0,10)
console.log(newString);

const anotherstring = gamename.slice(-6 ,4)
console.log(anotherstring);

const newStringOne = "    possible     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://sambhav.com/sambhav%77sharma'
console.log(url.replace('%77','-'));

console.log(url.includes('sambhav'));
console.log(url.includes('possible'));

console.log(gamename.split('-'))


