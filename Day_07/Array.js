//***********Array- collection of multiple items under a single variable*************

let arr = new Array(0,1,2,3,4,5)  //= let arr = [0,1,2,3,4,5]
console.log(arr);

arr.push(6,7); // to add more Elements in the end of array 
console.log("A: ",arr);

arr.pop(); // to remove last Element of array
console.log("B: ",arr);

arr.unshift(-2,-1); //to add more Elements in the Start of array
console.log("C: ",arr);

arr.shift(); // to remove first Element of array
console.log("D: ",arr);

console.log(arr.includes(3,4,5)); //return boolean Elements 
console.log(arr.indexOf(2)); // to know Index of an Element in array

let arr2 = arr.join() //to convert array into string
console.log(typeof(arr2));

arr2 = arr.slice(2,6); // copy range of elements from arr to arr2 ,this copy not affects orignal arr
console.log("E: ",arr2); 

console.log("Orignal array : ",arr);

arr2 = arr.splice(2,4);
console.log("F: ",arr2); // splice Cut the range of elements from orignal array
console.log("After Splice arr : ",arr);