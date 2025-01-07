let scr = document.getElementById('screen')

function out1(text) {
    return new Promise((resolve)=>{

        setTimeout(() => {
            let disp = document.createElement('h4');
            disp.innerHTML = text ;
            scr.appendChild(disp)
            resolve()
        }, 2000);

    })
    }

async function mainfunk() {

    await out1("intializing hack program...")
    await out1("Hacking Ashish username...")
    await out1("Username found aashish17...")
    await out1("Connecting to facebook...")
    await out1("Proccess Completed \n Please Initiate")
    
}
mainfunk()