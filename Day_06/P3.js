//Program 3: Days Left in the Year (Date, Operators)
// Calculate the number of days left in the current year.

let today = new Date();
let lastday = new Date(today.getFullYear(),11,31)
let time_stamp = lastday-today;
let days_left = Math.ceil((time_stamp)/(1000*60*60*24));
console.log(`There are ${days_left} days left in this year.Today is ${today.toLocaleDateString()} `);