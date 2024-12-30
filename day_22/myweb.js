let a = document.getElementById("nav-bar")  //access our nav bar in a . right way to do 
a.firstElementChild.style.color ="red"  //we can change text color of first element inside nav bar which is <ul> . 


let b = document.getElementById("div1")    
b.firstElementChild.style.color ="pink" 
b.lastElementChild.style.color ="green"

Array.from(document.getElementsByTagName("li")).forEach((element) =>{   //we can access element by TagName .See document.getElementsByTagName("li") return many elements so we use Array.from to convert it into array and then we use for each to access all elements.
    element.style.background = "cyan";
  }) 