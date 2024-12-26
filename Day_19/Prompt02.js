const prompt = require('prompt-sync')()

// make an array of numbers and take input from user

let array1 =[];
let len = parseInt(prompt("Enter length of array :"))

for(let i=0; i<len ;i++){
    array1[i] = parseInt(prompt(`Enter number for ${i} index :`))
}

console.log(array1)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Exit when 0 enters
 array1 =[];

let num
do{

    num = parseInt(prompt("Enter number :"))
    array1.push(num);
    
}while(num != 0 );
console.log(array1);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Filter numbers divisible by 10

let arr = [26,35,30,60,85,90,6]

let new_arr = arr.filter((i) => {
    return i%10 == 0 
})
console.log(new_arr)