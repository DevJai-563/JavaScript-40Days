let i = 0
const musicfile = [
    {
        audiosrc : "music/bhula dena.mp3",
        imgsrc : "image/img1.jpg",
        name : "bhula dena"
    },
    {
        audiosrc : "music/chahu mein ya na.mp3",
        imgsrc : "image/img2.jpg",
        name : "chahu mein ya na"
    },
    {
        audiosrc : "music/milne hai.mp3",
        imgsrc : "image/img3.jpg",
        name : "milne hai"
    }
    
]

function player(i) {
    
    let image = document.getElementById("img")
    image.setAttribute('src',musicfile[i].imgsrc)

    let name = document.getElementById("name")
    name.innerHTML = musicfile[i].name
    
    let audio = document.getElementById("audio")
    audio.setAttribute('controls','')
    audio.setAttribute('src', musicfile[i].audiosrc)
    audio.setAttribute('type','audio/mp3' )

    let pre = document.getElementById("previous")
    let next = document.getElementById("next")

    if (i === 0) {
        pre.style.display = "none";
    } else {
        pre.style.display = "block";
    }

    if (i >= musicfile.length - 1) {
        next.style.display = "none";
    } else {
        next.style.display = "block";
    }
    }



function previous() {
    if(i!==0){
        i=i-1
        player(i)
    }else{

    }
      
}
function next() {
    if(i < musicfile.length - 1){
        i=i+1
        player(i)} 
}


player(i)