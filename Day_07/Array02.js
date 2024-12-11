let frsh_fruits =["Apple", "Orange", "Grapes", "Kiwi"]
let dry_fruits = ["Almond", "Walnut", "Cashews"]

// //+++++++++++++++++++++++++++methods of merging array++++++++++++++++++++++++++++
// //*********M1*************
frsh_fruits.push(dry_fruits) //method 1 // frsh_fruits.push(dry_fruits); gives also same result.
console.log(frsh_fruits); //we got array in array
console.log("A : ", frsh_fruits[4][2]); //call for inside array element

frsh_fruits.pop(); // to remove last element means array here.

// //********M2**********
let allf1 = frsh_fruits.concat(dry_fruits)// copy all elements in one array.
console.log("Concat : ",allf1); 

// //********M3**********
let allf2 = [...frsh_fruits,...dry_fruits]
console.log(allf2);

//********M4**********
let arr = [25 , "koiB" ,"bache" ,[4 , ["Sunil" , 1 , 5 ,"Yeeeee",2],"Aloo"],"Paratha",6]
console.log("Flat : ",arr.flat(Infinity));

//********M5**********
let var1 = "Punnet"
let var2 = "Superstar"
let var3 = 25
console.log(Array.isArray(var1)); // give boolean result 
console.log(Array.from(var1)); // convert one variable  
console.log(Array.of(var1,var2,var3)); // convert variables in array