const ssc_cgl = {
    Quants: {
        Arthmetic:{
            Chapter1: "Percentage",
            Chapter2:"Ratio"
        },
        Algebra:{
            Chapter1: "Linear Equations",
            Chapter2: "Polynomials"
        }
    },
    English: "Vol. 1"
} //objects inside the object
console.log(ssc_cgl.Quants.Arthmetic.Chapter1); //value of individual property
console.log(ssc_cgl);

//++++++++++++++++Object Merging++++++++
const obj1 = {name: "Vicky Don", age:32}
const obj2 = {name2: "Bintu", age2:36}

//******M1*******
let M1_obj = Object.assign({},obj1,obj2)
console.log("M1: ",M1_obj);

//******M2*******
let M2_obj = {...obj1,...obj2}
console.log("M2: ",M2_obj);

//++++++++++++++++Key, Values and Entries+++++++++
console.log("Keys: ",Object.keys(ssc_cgl.Quants));
console.log("Values: ",Object.values(obj1))
console.log("Enteries: ",Object.values(ssc_cgl))

//*******To check property in object***********
console.log(ssc_cgl.Quants.Arthmetic.hasOwnProperty('Chapter1'));
console.log(obj1.hasOwnProperty('age1'));