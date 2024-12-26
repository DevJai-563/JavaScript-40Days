const prompt = require('prompt-sync')()
// //How to take input from user .

// let num1 = Number(prompt("Please enter number 1:"))
// let num2 = Number(prompt("Please enter number 2:"))

// console.log(num1+num2)


//Guess Number b/w  1 to 100 and get score you deserve.

function Btao(act_n) {

    for(i=0; i<100 ;i++){                            // if i take i = 1, you will not get 100 out of 100 score ,even if you correct on your first attempt

        let guess_n = parseInt(prompt("Enter a Number b/w  1-100 :"));

        if (guess_n > 100 || isNaN(guess_n)|| guess_n < 1  ){
            console.warn("Please Enter Number b/w 1 to 100!!");
            continue;
             
        }
        else if(guess_n == act_n){
            console.log(`Congrats you guessed correct number. Your guessing Score Out of 100 is :${100-i}`)
            break;
        }
        else if (guess_n < act_n) {
            console.log(`${guess_n} is Lesser than the Actual Number. Please try again!!`)
            
        }
        else if (guess_n > act_n) {
            console.log(`${guess_n} is Greater than the Actual Number. Please try again!!`)
            
        }
        

    }
}
    


const num = Math.floor((Math.random()*100)+1);
Btao(num);