let count = 0

function increment() {
    count++
    document.getElementById("count-el").innerText = count
}

let message = "Previous Count : ";
function save() {
    if (count > 0) {
        message += count + " "
        document.getElementById("save-count").innerHTML = message
    }
    else {
        message = "Previous Count : "
        document.getElementById("save-count").innerHTML = ""
    }
    count = 0
    document.getElementById("count-el").innerText = count
}