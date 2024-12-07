// *********************String*****************
const str1 = "Ye hai"
const str2 = " Aam Zindagi"
console.log(str1+str2); // Ye hai Aam Zindagi
//********************String Interpolation**********
let str3 = "mintos"
let str4 = str2.substring(5,12) //substring prototype
const sent =`Or ${str1} humari ${str3} ${str4}`;
console.log(sent); // Or Ye hai humari mintos zindagi

//********************asign string as object **********************
let strobj = new String("   Aalu le lo   ")
let strobj2 = new String(" Pyaaz le lo")
console.log(typeof(strobj));                  //object
//********************string prototypes**************************
console.log(strobj.length);                    //16
console.log(strobj.toLowerCase());             //   aalu le lo
console.log(strobj.trim().toUpperCase());      //AAlU LE LO
console.log(strobj.includes("le lo"));         //true
console.log(strobj.charAt(5));                 //1
console.log(strobj.indexOf('l'));              //5
console.log(strobj.slice(7,13));               // le lo
console.log(strobj.replace('le lo','de do'));  //   Aalu de do
console.log(strobj.split("le"));             // Aalu , lo
console.log(strobj.trim().concat(strobj2));           //   Aalu le lo  Pyaaz le lo
console.log(strobj.lastIndexOf('l'));          //11
console.log(strobj.localeCompare(strobj2));    //-1



