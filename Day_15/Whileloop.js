//+++++++++++++++++++++++++++++++++++While loop*************************
//now i know how loop works so i make program for checking a number is prime or not and print its factors.

function factors(num){

    if(typeof num === "number" && num >=0 ){

        let dub_num = num;
        let i=1;    //declare while loop index value outside
        let arr=[ ];    // to store factors
    
        while(i <= num){               //conditon to stop loop
            
            if(num % i === 0){
                arr.push(i);
            }
    
            i++;                      //iteration
        }
    
        if(arr.length == 2){

            return console.log(`${dub_num} is prime number. Factor 1 and itself `);
        }
        else{

            return console.log(`${dub_num} is not a prime number. Factors ${arr}`);
        }
    }else {
        
        return console.log("Please enter positive numerical value!!")
    }
    
}

factors(-4)
factors(0);
factors(1);
factors(2);
factors(3);
factors(4);
factors(5);