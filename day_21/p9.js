//++++++++++++++++++++++++++++++++==> Snake , Water or Gun game <==++++++++++++++++++++++++

let Game_char = ["s","w","g"] //here we have characters of game . 
let w=0 , l =0 ,d =0 , play;  //win, loss , draw and play for count.
let retry;

function chk(cpu,hum){   //function for check win loss or draw 

    if((cpu=="s" && hum == "g") || (cpu=="g" && hum == "w") || (cpu=="w" && hum == "s") ){ 
        alert("You won!!")
        w++;
    }
    else if( cpu == hum){
        alert("Draw !!")
        d++;
    }
    else{
        alert("You loss !!")
        l++;
    }
    console.log(`Score : \n Play : ${play+1} \n Win  : ${w}  \n Loss : ${l} \n Draw : ${d} `)
}

function final_res(){  // to display 
    if(w>l){
        alert("You Won the Game")
        }else if(w<l){
        alert("You Loss the Game")
        }else{
        alert("You Draw the Game")
        }
}

for (play = 0; play<3 ; play++) {    //use loop to play again is user want

    var userInp = prompt("Enter Character s,w or g :")

    if(userInp == "s" || userInp == "w" || userInp == "g"){

        let rand = Math.floor(Math.random()*3);  //cpu generated character

        chk(Game_char[rand],userInp);
        

    }
    else{
        retry = confirm("Eneter something wrong !! \n want to continue ??")
        if(retry){
            play-- ;
        }else{
            break;
        }
    } 
}
final_res();