// //chapter 12 practice set 
//// no need html file
// //Problem 1 => Print hello after 2 second and after 2 second print wold  

function toPrint(str) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(str)
            resolve()
        }, 2000);
    })
}
async function call() {
    await toPrint("Hello")
    await toPrint("world")
}
call()

// // Problem 2 =>Average of an array with help of spread  syntax
// let arr = [10,20,30]

// function average1(x,y,z) {
//     return (x+y+z)/arr.length
// }
// console.log(average1(...arr))

// // Problem 3 => Promise resolve after n seconds(n is seconds for timeout).
// const timer = async(n) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Hey i am Print after ${n} seconds`)
//             resolve()
//         }, n * 1000);
//     })
// }
// timer(2)