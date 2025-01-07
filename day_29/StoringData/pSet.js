

// document.cookieStore = "name=devbhaidev";
// console.log(document.cookieStore)
// localStorage.setItem("dev","bhai")
// localStorage.getItem("dev")
// localStorage.removeItem("my")
// localStorage.clear()
// console.log(localStorage.key(0))

// let key = prompt("Enter title of note")
// let value =prompt("Enter your note here ->>")
// localStorage.setItem(key,value)

function set_note() {
    let title = document.getElementById("title").value
    let note = document.getElementById("note").value

    if (title && note) {
        localStorage.setItem(title, note);
        alert("Note saved successfully!");
    } else {
        alert("Both Title and Note are required!");
    }

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", set_note);
});