//++++++++++++++++++++++++==>> Class Inheritence an Extends keyword <<==++++++++++++
class heater{
    constructor(type,watt,cost){
        this.type = type
        this.watt = watt
        this.cost = cost
    }
    description(){
        console.log(`This is a ${this.type} type heater with ${this.watt} watt power consumption`)
        this.price()
    }
    price(){
        console.log(`Price of this heater is ${this.cost} rupee`);
    }
}
class blower extends heater{
    feature(){
        console.log(`Blow hot air feature that why it type is ${this.type}`)
    }
}
class rod extends heater{
    feature(){
        console.log(`Hot rod feature that why it type is ${this.type}`)
    }
}

// let heater1 = new heater("rod",2000,1500)      //call parent class
// let heater2 = new heater("blower",2500,2000)
// heater1.description()                           //insite the parent class so it will execute
// heater1.feature()                                // it is inside the child class so it will not execute
// heater2.description()
// heater2.feature()                        

let heater1 = new rod("rod",2000,1500)
let heater2 = new blower("blower",2500,2000)
heater1.description()
heater1.feature()
heater2.description()
heater2.feature()