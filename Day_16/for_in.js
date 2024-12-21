//*************************************=>> For in loop<<=******************************
//how for in loop work with Object.
let team = {
    Frntend: "Delhi Decorators",
    Backend: "Delhi Decoders",
    Dev: "Delhi Decolonize"
}

for (const key in team) {
    console.log(key);
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

for (const key in team) {
    console.log(`Team of ${key} is ${team[key]}`);
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//With array, iterator returns index value
let arr =["Music","Dance","Enjoy"]

for(const i in arr){
    console.log(i);
    console.log(arr[i]);
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//With maps , For in loop not work

// let web = new Map()
// web.set('Cam',"Click");
// web.set('Sound',"Check");

// for(const i in web){
//     console.log(i);

// }