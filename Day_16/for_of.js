//+++++++++++++++++++++++++++++++=> For of Loop <=++++++++++++++++++++++++++
//******Syntax*******
    /*    for (const iterator of object) {          // Iterator ->a way to access elements of a collection
    
        }*/                                         //again it is a smart loop, no need conditions

//how for of loop work on an Array.
const spares = ["Side mirror","Windshield","Head lamps","Fander"]

for (const i of spares) {                           // i is iterator here.
    
    console.log(i);                               

}
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//how for of loop work on an String.
const vowels = "aeiou"

for (const j of vowels) {

    console.log(j);
    
}

//how for of loop work on an Object.

let team = {
    Frntend: "Delhi Decorators",
    Backend: "Delhi Decoders",
    Dev: "Delhi Decolonize"
}

// for(const i of team){
//     console.log(i)
// }      // error ->team is not iterable , team is object.