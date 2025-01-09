//++++++++++++++++++==>> __proto__ <<==++++++++++++++++++
let student = {
    name:"Dev",
    rollno: 11,
}
let address ={
    home: "mzn",
    school: "sre"

}
let contact ={
    phn:99988,
    
}
// console.log(student.school) //undefined

student.__proto__ = address
address.__proto__ = contact
contact.__proto__ = {email: "abc@gmail.com"}

console.log(student.school)
console.log(student.email)

console.log(contact.email)
// console.log(contact.home)//undefined , child not access parents properties