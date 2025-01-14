// //Promise 4 => Simple Interest Calculator Program
//Run this file with html file

function calculate() {
    let p = parseFloat(document.getElementById("principal").value)
    let t = parseFloat(document.getElementById("time").value)
    let r = parseFloat(document.getElementById("rate").value)
    
    if (isNaN(p) || isNaN(t) || isNaN(r)) {
        document.getElementById("simpleInterest").innerHTML = "Please enter numeric value in all of the above"
        
    } else {
        console.log(p);
        let si = (p * r * t) / 100
        document.getElementById("simpleInterest").innerHTML = si
    }
}