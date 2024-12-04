// Assign Variables and Constant
const userId=251053
var username="dinesh ji"
let userMarks=98
userGrade="A+"
// Print values
console.log("Values unchanged");
console.table([userId,username,userMarks,userGrade]);

// Reassign Values
// userId = 321025 can't be change
username="danish"
userMarks=57
userGrade="C"
console.log("Individual changed value",username); //thats how we print individual value.
console.log("Changed value in table");
console.table([username,userId,userMarks,userGrade]);
