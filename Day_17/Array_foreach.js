let lokiverse = ["Rolex","leo","Vikram","Kaithi"];

// forEach() method is an iterative method.

lokiverse.forEach( function(movie){
    console.log(`Movie:${movie}`)
})

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//Use Arrow function

lokiverse.forEach((abc)=>{
    console.log(`Picture:${abc}`)

})

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// Function pass in for each

function cinema(film){
    console.log(film)
}
lokiverse.forEach(cinema) // do not execute funtion by putting () at the end of function name

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//for each can print other things too 

lokiverse.forEach((value,index,array)=>{
    console.log(value,index,array);
})

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// Ojects inside the Array

const myarr= [{
    name:"Deepak",
    age:24
    },
    {
    name:"Pardeep",
    age:42
    }, 
    {
    name:"Puspa",
    age:18
    }]

myarr.forEach((i)=>{
    console.log(`${i.name} saw ${i.age} diwali`)
})