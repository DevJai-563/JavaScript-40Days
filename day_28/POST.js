////+++++++++++++++++++==>> Sending POST request with fatch API

// let option = {
//     method:"POST",
//     headers: {"Content-Type":"application/json"},
//     body: JSON.stringify({
//         title:"dev",
//         body:"salman jesi",
//         userID: "2530"
//     })
// }

// fetch('https://jsonplaceholder.typicode.com/todos/',option)
//       .then(response => response.json())
//       .then(json => console.log(json));



////+++++++++++++++++++==>> Sending POST request with fatch API ,async await
async function create(obj) {
    let option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
    };
    let p = await ( fetch('https://jsonplaceholder.typicode.com/posts', option));
    let response =  await p.json();
    return response;
}

async function mainF() {
    const obj = {
        title: "dev",
        body: "salman jesi",
        userId: 2530
    }
    let x = await create(obj)
    console.log(x);
    
}
mainF()