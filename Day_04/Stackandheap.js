//++++++++++++++++++++++Stack and Heap Memory++++++++++++++++++++++
//Stack Memory used by Premative data types :- String, Number, Boolean, Null, Undefined , Symbol and Bigint.
//Heap Memory used by Non-premetive data types :- Array, Object and Function.

// *********************Stack Memory example************************
let user01 = "QT<3" //String
let user02 = user01 //String 
    user02 = "PUKI" ; // change value of 'user02'.
console.log(user01); //-> QT<3 , because  value of 'user01' copied in 'user02' , Not the refer .
console.log(user02);

//***********************Heap Memory example**********************
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
let Obj1 = {   //Object
    name:"Sid",
    age:25,
    email:"siddumznwala@gmail.com"
}
let Obj2 = Obj1 //Object
    Obj2.name = "Himgiri" //change name in Obj2.

console.log(Obj1.name); //->Himgiri , because value of 'Obj1' nor copied in 'Obj2', it refers to 'Obj2'
console.log(Obj2.name);

