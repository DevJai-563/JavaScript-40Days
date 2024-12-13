//Program 4: A Grade Calculator.
//  It will take students marks as input and return their grade based on the marks.
function Grade_cal(marks){
    if(typeof marks == "number"){
    
        if(marks<=100 && marks>=80){
            return "A"
        }
        else if(marks<80 && marks>=70){
            return "B"
        }
        else if(marks<70 && marks>=40){
         return "C"
        }
        else if(marks<40 && marks>=0){
            return "F"
        }
        else if(marks>100 || marks<0){
            return "Please enter the Marks between 0 to 100!!"
        }
    }
    else{
        return "Please Enter numeric value!!"
    }
}                                                      

function call(std){
    let gr = Grade_cal(std.marks)
    if(gr == "A" || gr== "B" || gr== "C" || gr== "F"){
        console.log(std.name,"got Grade",Grade_cal(std.marks))
    } 
    else{
        return console.log(Grade_cal(std.marks));
    }


}

let std1 ={
    name: "Chutki",
    marks: 10
}
let std2 ={
    name: "Bheem",
    marks: 75
}
let std3 ={
    name: "Kaalia",
    marks: 101
}
let std4 ={
    name: "Raju",
    marks: "Kaju"
}

call(std1);
call(std2);
call(std3);
call(std4);