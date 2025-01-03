// Practice Exercise making digital watch
function twodigi(val) {
    return val.toString().padStart(2,'0');
    
}


function digitalwat(){
    
    let date = new Date()
    // let hrs = document.getElementById('hrs')
    // let mints = document.getElementById('mints')
    // let scnd = document.getElementById('scnd')
    // let bl1 = document.getElementById('bl1')
    // let bl2 = document.getElementById('bl2')

    // bl1.classList.toggle('blink')
    // bl2.classList.toggle('blink')
    
    
    // hrs.innerHTML = date.getHours()

    
    // mints.innerHTML = twodigi(date.getMinutes())

    
    // scnd.innerHTML = twodigi(date.getSeconds())
    let clock = document.getElementById("clck")
    clock.innerHTML = date.toLocaleTimeString()
}

setInterval(digitalwat,1000);
