// //++++++++++++++++++++++++++++++++CHAPTER 8 EVENT AND DOM PROPERTIES +++++++++++++++++++++++++

// const x = document.getElementsByTagName('div')[0]
// console.log(x.firstElementChild.nodeName)
// console.dir(x.firstElementChild.nodeName)                      //shows element as an object 

// console.log(alfa.innerHTML);                                  //use to access element as a String
// x.firstElementChild.hidden = false                                  //use to hide an element

// // // //Attributes
// let beta = document.getElementById("beta")
// console.log(beta.getAttribute("class"))                         //access atributes by name
// console.log(beta.getAttribute("id"))                            //get id attribute
// console.log(beta.attributes)                                    //get all attributes 



// console.log(beta.hasAttribute("class"));                    //true or false
// x.setAttribute("class","funk")                            //insert attribute

// x.removeAttribute("class")                                
// console.log(beta.dataset.kaam)

// // //// insertion methods
// let para = document.createElement('p')                         
// para.innerHTML = ' ristedar aate hai chai pikr nikal lete hai '  
// beta.appendChild(para);


// beta.prepend(para)
// beta.before(para);
// beta.after(para);
// beta.replaceWith(para);

// //Insert Adjacent html

// let beta = document.getElementById('beta')
// beta.insertAdjacentHTML('beforebegin','<h1>Aaoo ji Aaoo</h1>')                    //element se bahr fek kr marega
// beta.insertAdjacentHTML('beforeend','<h1>Aaoo ji Aaoo</h1>')                      //element end hone se pehle 
// beta.insertAdjacentHTML('afterbegin','<h1>Aaoo ji Aaoo</h1>')               // first child element bann jayega bet ke andr
// beta.insertAdjacentHTML('afterend','<h1>Aaoo ji Aaoo</h1>')

// beta.remove()                                                               //to remove div[1] id name beta


// // Class Name and Class list 
// beta.className ="yellow blk_bckgd"
// console.log(beta.classList)
// alfa.className ="red"

// alfa.classList.remove('red')
// // console.log(alfa.classList) 
// function abc() {
// //  beta.classList.toggle("orange_bckgd")
//  beta.classList.toggle("red")
// beta.classList.toggle("navy_bckgd") 
// // beta.classList.toggle("yellow")
// }

//  setTimeout(function () {alfa.classList.toggle("red") },3000)
//  let xy = setInterval(abc,500)
// xy;
//  clearInterval(xy)

function display(e){
    alert("your tea is reday")
    console.log(e)
}


let button = document.getElementById('butto')

button.addEventListener("click",display)