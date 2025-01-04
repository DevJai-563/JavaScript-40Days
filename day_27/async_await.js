//++++++++++++++++++++++++++++==>>Promises inside async function  and use .then & .catch<<==++++++++++++++++++++++++++


async function loadScript(src){


    let p1 = new Promise ((resolve,reject) =>{

        setTimeout(() => {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve("Script loaded successfully");
        script.onerror = () => reject("Script ki toh bhaiya band bajj gai");
        document.body.appendChild(script)

        }, 2000);


    })
    let p2 = new Promise ((resolve,reject) =>{
        setTimeout(() => {
        reject("Pappu Reject hogya")

        }, 3000);


    })

    console.log("Script is Loading");
    let s1 = await p1
    console.log("Script is Loaded");

    console.log("Now Script 2 is Loading");
    let s2 = await p2
    console.log("Script 2 is Loaded");

    return [s1, s2]


}
let x = "script.js"
loadScript(x).then(console.log).catch(console.log)

/////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++==>>Promises inside function, handle by async function   and try & catch<<==++++++++++++++++++++++++++



function loadScript(src) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script)

            script.onload = () => resolve("Script loaded successfully");
            script.onerror = () => reject("Script ki toh bhaiya band bajj gai");


        }, 2000);


    })

}

function loadScript2(src) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script)

            script.onload = () => resolve("Script loaded successfully");
            script.onerror = () => reject(" bhaiyaji Script ki toh band bajj gai");


        }, 5000);


    })

}

async function handler() {
    try {
        let src = "script.js"
        let src2 = "script2.js"

        console.log("Script 1 is in Proccess")
        let p1 = await loadScript(src);

        console.log(p1)
        console.log("Now Script 2 is in Proccess")
        
        let p2 = await loadScript(src2);
        console.log(p2)

        


    } catch (error) {
        console.log(error)
    }

}

handler()
