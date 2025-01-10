//++++++++++++++==>> Overriding constructor and Super keyword constructor <<==++++++++++++++

class device{

    model(){
        console.log("Aji kaddu ka model")
    }
    devicename(){
        console.log("Naam mein kya rkha hai ")
    }

}
class apple extends device{
    model(){
        console.log("Kaddu ka nhi Aple ka model 2024 ka")
    }                                                       //Overriding
    
}
class nokia extends device{
    
    devicename(){
        super.devicename()
        console.log("Kaam ddekho")
    }

}


let iphone13 = new device() //parent class 
iphone13.model()
iphone13.devicename()

let iphone14 = new apple() //Child class 
iphone14.model()           //Overriding
iphone14.devicename() 

let nokia_1334 = new nokia()
nokia_1334.model()
nokia_1334.devicename()    //parent class + child class 