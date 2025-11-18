

// Get references to button and input
const generateBtn = document.getElementById("generateBtn");
const passwordDisplay = document.getElementById("passwordDisplay");

// Password generation function
function gen() {
    let str = "ABCDEFGHIKLMnopqrstuvwxyz1234683975848632@$^&*";
    let password = "";
    let passwordLength = 12;

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * str.length);
        password += str[randomNumber];
    }

    // Show password in input box
    passwordDisplay.value = password;
}

// Attach function to button click
generateBtn.addEventListener("click", gen);


























