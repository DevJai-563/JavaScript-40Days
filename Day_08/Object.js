//________________________________Object________________________

const my_aloo = Symbol("Mine Aloo")

const userJD = {
    name: "Aloo",
    [my_aloo]: "JD Aloo",
    reci_count: +999,
    pro_in: "Paratha",
    "address": "Har Ghar",
    
} // Object Literal

//+++++++++++Different ways to access or add string and array ++++++++++++++++++++++++
console.log("A",userJD.pro_in); //normally
console.log("B",userJD["pro_in"]); // key as string
console.log("C",userJD["address"]); // only way if key defined in array as string

userJD.bestin = ["Brkfst","Lnch","Dinner"]; //add new string,array or function in object from outside

userJD.property = function(){
    console.log("Infinity Combos can made with it");
}
userJD.property(); // calling function

console.log("After added Array and Function from outsiide : ",userJD);


Object.freeze(userJD); // after this line object's data can not change 
userJD.address = "Can i change it - no";
console.log(userJD.address);