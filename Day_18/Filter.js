let myarr = [2,4,6,8,10,12]

/* let newarr = myarr.forEach((num) => {
    if (num<8){
        return num+10 ;
    }
})
console.log(newarr);   */  //Not going work because .for each do not return any thing.

//**********Filter***********
let newarr = myarr.filter( function(i){
     return i<9;
     
});
 // we can see filter can returns value
console.log(newarr)

/**************************************************************/
let newarr3 = myarr.filter( (i) => i>7);
// we can also use arrow function
console.log(newarr3)
//**************************************************************************************

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]; // I didn't have the required data, so I borrowed it from Hitesh Sir's GitHub repository. After all, I'm learning from him, and everything is going wonderfully well!

//how can i print or access data of some books

let printb = books.filter((i) => i.genre === "History" && i.publish < 1999 );
console.log(printb);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++=>Map<=++++++++++++++++++++++++++++++

let quantity = [20,800,65,985,55,2,66]

let chnge = quantity.map((item) => item/10).map((item) => item+10).filter((item) => item<50); 
console.log(chnge)