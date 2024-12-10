//Program 2: Age Calculator (Variables, Datatypes, Math, Date)
//This program calculates a person's age based on their birth year.

let curr_year = new Date().getFullYear()
let birth_year = 2001
const age = curr_year-birth_year
console.log(`If you were born in ${birth_year},your age is ${age}.`);