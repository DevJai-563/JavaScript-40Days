function chai(e) {
    alert('aah lo veere chai faddo !!')
}

function coffee(e) {
    alert('eeh lo paaji tuhaddi coffee')
}

let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')

b1.addEventListener('click',chai)   
b2.addEventListener('click',coffee)

b3.addEventListener('click',function(e){
    window.location= "https://www.zomato.com"
})

setInterval(() => {
    b4.classList.toggle('bulb')
}, 500);
