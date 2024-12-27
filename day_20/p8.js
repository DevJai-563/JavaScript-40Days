//******************************************Program to check if any person eligible for driving***************
// prompt = require("prompt-sync")();

let color = prompt("enter color name like red , green or yellow") 
document.body.style.background = color   //to change background color of site

function chk(age){
    if(age >= 18 && age<=65){
    alert("You can drive.");
    }
    else if(age < 18 && age > 0){
        alert("You can't drive before 18")
        }
    else if(isNaN(age)){
        alert("you entered something wrong")
    }
    else if(age<0){
        alert("you entered age in negative")
        console.error("you entered age in negative")
    }
    else if(age>65){                      //redirect to google if age is more than 65
        alert("Uncle please search , is it possible or not ")
        location.href = "http://google.com"
    }
}

do{
    let personAge = parseInt(prompt("Enter Your age : ")); //age input
    chk(personAge);
    var again = confirm("You wanna retry")  //to restart program
}while (again)




