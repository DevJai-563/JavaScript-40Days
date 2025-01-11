// How object manage in array 
//Revision
let i = -1
let myCollection = []
function name(fName, lName) {
    i++;

    return myCollection[i] = {
        FirstName: fName,
        LastName: lName,
        getFullname() {
            return `${this.FirstName} ${this.LastName}`
        }

    }

}

name("dev", "sharma")
name("sid", "mznwala")
name("sikander", "mehwal")
name("aloo", "paratha")

// console.log(myCollection);
myCollection.forEach(element => {
    console.log(element.getFullname())
});

