//+++++++++++++++++++++++++++++++++++ Do While Loop+++++++++++++++++++++++++++++++++++++
// do {
    
// } while (condition); // in this loop condition to stop loop is after the statement execute.
//which mean statement execute first then check cvondition


let arr = ["AP", "Diljit", "Karan"]
let i = 0
do{
    arr[i] = "Dillon";   
    i++;
}while(i<0);

console.log(arr);