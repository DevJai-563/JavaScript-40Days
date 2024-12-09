// Program 0: Compare Two Strings (Strings, Conditional Statements)
// Check if two strings are anagrams (contain the same characters).

let wrd1 = "robed"
let wrd2 =  "robedd"             //"bored"

 let sprd1 = wrd1.split("").sort().join("")
 let sprd2 = wrd2.split("").sort().join("")

if (sprd1===sprd2) {
    console.log(`Word ${wrd1} and ${wrd2} are anagrams`);
    } else {
        console.log("Sorry Babu")
    }