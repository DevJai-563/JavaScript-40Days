//**********************How do Scopes works****************** 
// Check behaviour of let , const and var inside and outside the scopes .
let v1 = "A1"
const v2 = "A2"
var v3 = "A3"  

if(true){

    let v1 = 25 
    const v2 = 26
    var v3 = 65 

    console.log(`INNER::v1 =${v1} , v2 =${v2} , v3=${v3}`); // print values re-assign in between {SCOPE} . BLOCKSCOPE 

}

console.log(`OUTTER::v1 =${v1} , v2 =${v2} , v3=${v3}`);// print values assign outside scope. GLOBALSCOPE
                                           //Except var type variable .Which is not follow scope rule.

//**********************************************************************************************************************
//**************Function indside function*********************
function f1(){

    const username = "Deepak"

    function f2(){

        const web = "dee.com"
        console.log(username)

    }
    // console.log(web) // *CLOSURES* a function that has access to the variables and parameters of its outer function, even after the outer function has finished executing.  
    f2()

}

f1()
//*********************************************************************************************** */
//****************Function as variable known as Expresion**************
const fun3 = function(num){

    return ++num

}

console.log(fun3(5));