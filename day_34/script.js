//generating random password
// Functions are called in HTML file, directly with the help of onclick.
const char = "Q!@#$RTYCDFp012345%VBNMabcdno67WEGHJKLZ~8UIOPefghijklmAS^&*_+=-X9"    //characters for generating password
let password = document.getElementById("password")          
function gneratePass() {                                                            //Func for generate a password
    let pass = ""; 
    for(let i=0; i<8;i++){                                                          // i<8 mean password of 8 characters will generate
        pass += char[Math.floor(Math.random() * char.length)]                      
    }
    return password.value = pass                                         
}
function copyPassword() {                                                           //func for copy generated password
    password.select();                                                              // select value in password
    document.execCommand("copy")                                                    //use exec command for copy selected text
}
