const characters = [
    "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",
    ">",".","?","/"
];

let sliderEl = document.getElementById("slider")
// console.log("Slider value: " + sliderEl.value)
let outputEl = document.getElementById("slider-number")
outputEl.textContent = sliderEl.value

sliderEl.oninput = function() {
    outputEl.textContent = this.value
}

function createPassword() {
    let password = ""
    for(let i = 0; i < sliderEl.value; i++) {
        let index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }
    return password
}

function generatePassword() {
    let password1 = document.getElementById("password1-el")
    let password2 = document.getElementById("password2-el")
    let password3 = document.getElementById("password3-el")
    let password4 = document.getElementById("password4-el")
    password1.textContent = createPassword()
    password2.textContent = createPassword()
    password3.textContent = createPassword()
    password4.textContent = createPassword()
}