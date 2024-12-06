//*************************OPERATIONS**********************************
 let wrd1="Paaji"
 let wrd2="ki haal "
 console.log(wrd2 + wrd1);
//**************************not clean codes*********************
console.log("A: ",3+3); //->6
console.log("B: ","1"+ 2);//->12
console.log("C: ",1 + "2");//->12
console.log("D: ",1+1+"1");//->21
console.log("E: ","1"+2+3);//->123

/***************************Arithmetic Operators******************/
console.log("******************Arthmetic Operators******************");
const tab = [
    {Operator: "+,-,/,*" ,Description:"Add, Substract, Divide, Multipl" , Example:"2+2,6-5,4/2,6*2"},
    {Operator:"%" ,Description:"Modulus(remainder)" , Example:"7%5(Result 2)"},
    {Operator:"++" ,Description:"Increase by 1", Example:"++5(Result 6)"},
    {Operator:"--" ,Description:"Decrease by 1", Example:"--8(Result 7)"},];

console.table(tab);
/***************************Comparison Operators*******************/
console.log("******************Comparison Operators******************")
const tab2 = [
    {Operator:"==",Description:"Equal to",Example:"25==25(True),26==27(False)"},
    {Operator:"===",Description:"Equal to (Strict,compare typeof also)",Example:"'10'===10 (False)"},
    {Operator:"!=",Description:"Not equal",Example:"25 != 31(True)"},
    {Operator:"!==",Description:"Not equal(strict)",Example:"'25' !== 21(True)"},
    {Operator:"'>' and '<'",Description:"'Greater than' and 'less than'",Example:"3<5 and 8>5(True)"},
    {Operator:"'>=' and '<='",Description:"'Greater or equal'and'Less or equal'"}
];
console.table(tab2);
/**************************Logical Operators*********************/
console.log("******************Logical operators******************")
const tab3 = [
    {Operator:"&&",Description:"And operator(Both condition must be true)"},
    {Operator:"||",Description:"OR operator(One condition must be true)"},
];
console.table(tab3);
//example
console.log("----->Example:<-----");
let a=true
let b=false
let c=true
let d=false
console.log(a && c);
console.log(a && b);
console.log(a || b);
console.log(d || b);

/*************************Assignment Operators************/
console.log("**********Examples of Assignment Operators*********");
let x = 25 // = simple assign operator
x += 5; // is equal to a= a+5; add and assign //result x=30
x *= 10; // multiply and assign //result x=300
console.log(x);

/***************************Ternary Operator*******************/
console.log("**************Ternary Operator*********");
let age = 15 
let respond = (age>=18) ? "Allowed" :"Not Allowed";
console.log(respond);

