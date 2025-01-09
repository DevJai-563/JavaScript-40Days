//+++++++++++++==>> Class, mehtods,Constructor and this<<==++++++++++++++++++++++
class moneyDepo{
    constructor(name,money,acc_no){
        this.name = name;
        this.money =money;
        this.acc_no = acc_no;
    }
    preview(){
        let con = confirm(`Previw : \n Name = ${this.name}\n Amount = ${this.money} \n account number = ${this.acc_no}`)
        if(con){
            this.sumbmit()

        }else{
            this.cancel()
        }
    }
    sumbmit(){
        alert("form submitted")
    }
    cancel(){
        alert("form canceled")
    }
}

let form1 = new moneyDepo("Harry",27500,1010101010101)
form1.preview()


let form2 = new moneyDepo("tom",5000,20202020202020)
form2.preview()
form2.cancel()