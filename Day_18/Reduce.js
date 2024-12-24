const Delivery_Charges = 49
const Discount = 250

const shoppingItems = [
    {Product: "Gloves", Price: 253},
    {Product: "Rain Coat", Price: 1800},
    {Product: "Bag", Price: 1150},
]

const total = shoppingItems.reduce((set,obj) => set + obj.Price ,Delivery_Charges)

if(total>3000){
    console.log(`Discount is applied , You have to pay :${total-Discount} Rupee`)
} else{
    console.log(`You have to pay :${total} Rupee`)
}