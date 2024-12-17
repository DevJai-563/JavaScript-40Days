//***********************************if / else / else if *************************************
/*    if (condition) {                        //if condition is truthy - statement executes
             statement
    } 
    else if (condition){                      // if there are more conditons.
            statement
    }
    else{                                     // if no other condition matched.
        statement
    }          */
// ****************Example: Maths Calculation -->> 2 numbers , 1 operation 

const n1 = 10
const n2 = 5
const sign = "*"

if(sign == "+" ){
    console.log(n1+n2)
}
else if(sign == "-"){
    console.log(n1-n2)
}
else if(sign == "*"){
    console.log(n1*n2)
}
else if(sign == "/"){
    console.log(n1/n2)
}
else{
    console.log("Please enter +/-/*/ /");
}
//*************Lets see which conditions considered as false or true***********

let num = 0
if (false){                                                           //1
    console.log("I am not going to print")         
}
else if (num){                                                        //2
    console.log("I am not going to print") 
}
else if(""){                                                        //3
    console.log("I am not going to print")
}
else if(null){                                                        //4
    console.log("I am not going to prin")
}
else {
    console.log("False Values : False , 0 , empty string , -0, null , undefined , Nan")
}
// // True value : Other than false value all are True either they are empty or white space
// // Now lets see how to detect an empty object

let user1 = {}  
if(Object.keys(user1).length == 0){
    console.log("m hoon zero")
}