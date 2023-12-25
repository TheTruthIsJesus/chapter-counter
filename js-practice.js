let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let clear = document.getElementById("clear");

function increment() {
    clear.textContent = ""
;    count += 1
    countEl.textContent = count
}

function decrement() {
    clear.textContent = ""
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = " "+count+" "+"|"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    saveEl.textContent = "Previous study sessions:";
    clear.textContent = "Sessions Cleared!";
}