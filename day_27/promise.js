//++++++++++++++++++++++++++++==>>Promise inside function and use .then & .catch<<==++++++++++++++++++++++++++


function loadScript(src) {
    return new Promise((resolve,reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => resolve("script is loaded");
        script.onerror = () => reject("sorry haigai")
    })
}

let x = "script.js"                 //this will resolve 
// let x = "promise3.js"            //this wil reject
loadScript(x).then(alert).catch(console.log)
