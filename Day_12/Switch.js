//**************************Switch use to avoid multiple if else statements*********************
let month = 13

switch(month){                               //month is key here-->>to unclock the case
    case 1 :                                // When the key matches a case value (which is 1 here), that case will execut.
        console.log("January");   
        break;
    case 2 :
        console.log("Febuary");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    case 5 :
        console.log("May");
        break;
    case 6 :
        console.log("June");
        break;
    case 7 :
        console.log("July");
        break;
    case 8 :
        console.log("August");
        break;
    case 9 :
        console.log("September");
        break;
    case 10 :
        console.log("October");
        break;
    case 11 :
        console.log("November");
        break;
    case 12 :
        console.log("December");
        break;

        default :                             //Default case runs if no other case matches the key.
        console.log("Januarry \n Farbary \n Julay \n Athandar \n Chachundar \n\n Please enter number between 1 to 12 !!!!")
}