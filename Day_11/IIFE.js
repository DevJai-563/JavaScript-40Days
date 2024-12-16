// ********************Immediately Invoked Function Expressions (IIFE)************************
//function that runs just after it defined.

(function () {
    console.log("IIFE")       //01 
})(); // fisrst parenthese contain function and  second one is for execution 
//************************************************************************************************* */
(() => {
    console.log("IIFE_02")    //02. use => instead of writing 'function'
})();
//************************************************************************************************* */
//****************how to pass value in IIFE***************** */

((num1,num2) => console.log("IIFE_03 : ",num1*num2))(4,6);  // YE HAI MINTOS ZINDAGI