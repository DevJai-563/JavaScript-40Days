//Sum of Array Elements ->>	Handling passenger baggage and extra cost
function Load(arr){
    let sum = 0;

    for(i=0;i<arr.length;i++){
      sum = sum + arr[i];
    }

    return console.log(`\nWeight of all baggages :${sum} Kg \n`)
}

function extra_Load(arr){
    let sum = 0;

    for(i=0;i<arr.length;i++){
        if(arr[i]>20){
            sum = sum + (arr[i]-20);
        }
    }
    return sum;

}

const baggages = [30,20,25,25,10,30]
const rate = 500 

Load(baggages);
console.log(`Extra baggage weight is:${extra_Load(baggages)} Kg \n`);
console.log(`The Cost of Extra baggage weight is:${extra_Load(baggages)*rate} Rupee\n`);
