let count = 0
let countNum = document.getElementById("counter")
let countN = document.getElementById("countN")
function upperCount() {
    count += 1
    countNum.textContent = count
}
function lowerCount() {
    count -= 1
    countNum.textContent = count
}
function saveCount () {
    let numb = count + " - "
    countN.textContent += numb 
    count = 0
    countNum.textContent = 0
}

