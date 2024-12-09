//+++++++++++++++++++++++++++++++++++++++Numbers++++++++++++++++++++++++++++++++++++++++++++
const num = 541231.65455454

console.log(num);
console.log(num.toFixed(2)); //use to fixed digits after decimal
console.log(num.toString()); //number to string
console.log(num.toPrecision(6));//set the number of digit you want in result
console.log(num.toLocaleString('en-IN')); //comma-separated format
console.log(num.toExponential(2)); //exponential (scientific) notation

//++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math); //object Maths
console.log(Math.abs(-6)); // ->6
console.log(Math.round(3.45)); // ->3
    console.log(Math.ceil(3.45)); // take higher value
    console.log(Math.floor(3.45)); //take the lower value
console.log(Math.min(22,25,5,99,87));
console.log(Math.max(55,99,2,4,5,88));
 //***************************Random******************

 console.log(Math.random());
 console.log((Math.random()*10)+1); //*10 to get number b/w 0 and 10, +1 to avoid 0 as result.
 console.log(Math.floor((Math.random()*10)+1)); // use floor to get integer.

 //*****Random Range set*******
let min = 10
let max = 20

console.log(Math.floor(Math.random()*(max-min)+1)+min);
