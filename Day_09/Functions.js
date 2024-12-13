//*****************************Functions*****************************
// function abc(/* Parameter */){
//     return 
// }                         //abc is name of Function //return is what function gives when you call function.
// console.log(abc);         // call func to print .
console.log("***************************************Sum Function**************************************");

function sum(a,b){
    if(typeof a == "number" && typeof b == "number"){
    return a+b;
    }
    else{
        return "Sorry Babu -- Please enter numeric value !!"
    }
}
console.log(sum(5,"En")); // 5,4 are argument which pass function to perform

console.log("***************************************Rest Operator*************************************");

function values(a,...val){          // ...val ->is Rest operator here not Spread beacause it is in parameter now.
    return val
}                                 // here function returns val 100 store in a
console.log(values(100,200,300,400));

console.log("*********************************Object Pass in function*********************************")

function Rajnigandha(obj){
    return `Detnal checkup Phn no.: ${obj.contact}`
}                                                            //function return contact number from object
let dr = {
    Dr_name: "Father Ji",
    address: "Home",
    contact: 52565445
}
console.log(Rajnigandha(dr));                                 //call function and arguement is dr(object)

console.log("*********************************Array pass in function**********************************")

function Selector(arr){
    console.log(arr[2]);
}                                                              // return index 2 value
let myarr = [25,65,45,87]
Selector(myarr);