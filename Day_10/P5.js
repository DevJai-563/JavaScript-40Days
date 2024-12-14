//Factorial of a Number	                                   5

const f_num = 10


let facto = 1;

if (typeof f_num == "number") {
	if (f_num == 0 || f_num==1){
	    console.log(`Factorial is :${facto}`);            // 5
	    
	} else{
	    for (i = 2; i <= f_num; i++) {
	        facto *= i;       
	    }
    }
} else {

    console.log("Please enter numeric value !!")	

}

console.log(`The factorial of ${f_num} is :${facto}`);