//********************************************************Itinary******************************************
//++++++++++++++++++++++++++++++++++++++++For Loop++++++++++++++++++++++++++++++++++
//*****print number 1 to 10*********
for (let index = 1; index <= 10 ; index++) {
    // console.log(index)
}

//************************now lets print tables From _ to _ .******************************** 
let n1 = 5
let n2 = 8
for(i =n1; i <= n2; i++){
    console.log(`                           Table of ${i}               `)
    for(j=1 ; j<=10 ; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

//*****************Print element of array ****************
let arr = ["Chidiya" , "Tota" , "Maina" , "Baaz"]
for(i=0; i < arr.length; i++){
    console.log(`${arr[i]} udd`)
}
// **************Break and Continue****************
//break
for(i=1;i<=10;i++){
        if(i==4){
        console.log(`Here is number ${i}, now loop ended here because of break `);
        break;
        }

        console.log(`Number is ${i}`);
}
//continue
for(i=1;i<=10;i++){
        if(i==4){
        console.log(`Here is number ${i}, now loop Skip only this Iteration and continue loop`);
        continue;
        }

        console.log(`Number is ${i}`);
}