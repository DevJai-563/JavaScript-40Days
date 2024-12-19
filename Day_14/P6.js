// Program Even or Odd**************************************************************1****************************

function checker(num){
    if(typeof num === "number" ){
        if(num%2 !== 0){
            console.log("it is an Odd number")
        } else {
            console.log("it is an Even number ")
        }
    } else {
        console.log("Please enter Number!!!!")
    }
}
checker(25);

//Program Maximum of Two Numbers****************************************************2*****************************
const max = (n1,n2) => (console.log( "Max number is",Math.max(n1,n2)));
max(56,5);

//Reverse a String******************************************************************3******************************
let wrd1 = "JO_BHI"
let Reversed = wrd1.split("").reverse().join("")
console.log(`Orignal wrd : ${wrd1} \n Reversed wrd: ${Reversed} `)

//Program Palindrome Check**********************************************************4*********************
function Palindrome(word) {
    if(typeof word == "string"){

        wrd2 = word.split("").reverse().join("").toLowerCase();
        
        if(word.toLowerCase()==wrd2){
            return console.log("This is a Palindrome")
        } else{
            return console.log("This is NOT a Palindrome")
        }
    }else{
        console.log("Please enter word")
    }
    
}
Palindrome("Nitin")