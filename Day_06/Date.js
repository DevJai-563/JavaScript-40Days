//********************************Date and Time**********************
let myDate = new Date() //assign date 
console.log(myDate); //there is some additional information

console.log(myDate.toString()); //convert into string so user can read easily  
console.log(myDate.toDateString()); // when user want only date in normal format
console.log(myDate.toLocaleString());// to convert into mm/dd/yyyy format , time

let newdate = new Date(2024,0,25,15,25) // given date and time

console.log(newdate.toLocaleString()); 
console.log(newdate.toLocaleDateString());
console.log(newdate.getTime());

let mytimestamp = Date.now() //get time in  mili seconds
console.log(mytimestamp);
console.log(Math.floor(Date.now()/1000)); //get time in seconds
console.log(newdate.getMonth()+1); //get normal month number 
