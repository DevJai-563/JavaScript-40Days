//********************************THIS Keyword***********************
const jar = {
    product: "pickle",
    netweight: "500 gm",

    Detail: function (){
            console.log(`Weight of ${this.product} is ${this.netweight}`) // this keyword is use to access variable inside scope.
            console.log("This inside scopes :",this); // contail values inside the scope
    }
    }

jar.Detail();
console.log("This outside scope :",this);  //{} contain nothing
//this keyword can not work in functions


// //*****************************Arrow Function******************************
const remainder = (n1,n2) => {
    return n1%n2                                         // 01 Simple and Easy syntax as always
}
console.log("Remainder is :",remainder(25,7));

const remainder2 = (n1,n2) => (n1%n2)                      //02  Mintos Zindagi . if you have one line code like this
console.log("Remainder2 is :",remainder2(25,7));
