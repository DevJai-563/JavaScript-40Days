//create a class for make password 
class createPass{
    constructor(upperCase,lowerCase,speacialChar){
        this.upperCase=upperCase
        this.lowerCase=lowerCase
        this.speacialChar=speacialChar
    }
   
    passcontainer(){
        let password = this.upperCase + this.lowerCase + this.speacialChar
        return console.log(password);
    }
}
let password = new createPass("FH","ev","@123")
password.passcontainer()