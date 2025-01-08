function set_list() {
    let title = document.getElementById("title").value
    let note = document.getElementById("note").value

    if (title && note) {
        localStorage.setItem(title, note);
        alert("Your item added in list!");

        let li = document.createElement("li")
        li.innerHTML = `${title}  ${note}`
        document.body.appendChild(li)
        
    } else {
        alert("Both catagory and todo are required!");
    }

    

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add").addEventListener("click", set_list);
});

function delete_list() {
    let del_item = document.getElementById("del_item").value
    if (del_item) {
        localStorage.removeItem(del_item)
        alert("Deleted")
    }
    else{
        alert("entered something wrong!!")
    }     
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("delete").addEventListener("click", delete_list);
});