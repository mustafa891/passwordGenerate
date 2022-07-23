const passwordInput = document.querySelector("#passwordInput");
const generateBtn = document.querySelector(".generateBtn button");
const checkBoxs = document.querySelectorAll("input[type=checkbox]");
const copyBtn = document.querySelector("#copy");

const pwd = {
    number: "1234567890".split(""),
    symbol: "!@#$%^&*()_=-?><~{}[]".split(""),
    alphabet: "abcdefghijklmnopqrstuvwxyz",
}

let confirmLength = window.prompt("Enter Your password length (min : 8 and max : 30)")

function writePassword() {
    confirmLength = Number(confirmLength);
    if(generatePassword()) passwordInput.value = generatePassword();
}

function generatePassword() {

    let collictionValid = [];
    let randPassword = "";

    let status = Array.from(checkBoxs).map(check => check.checked ? true : false);
    if (!status.includes(true)) return;
    if(confirmLength < 8 || confirmLength > 30) return;

    checkBoxs.forEach(check => {

        if (!check.checked) return;

        if (check.id == "lower")
            pwd.alphabet.split("").
        forEach(lw => collictionValid.push(lw))

        if (check.id == "upper")
            pwd.alphabet.toUpperCase().split("").
        forEach(upp => collictionValid.push(upp))

        if (check.id == "number")
            pwd.number.forEach(n => collictionValid.push(n))

        if (check.id == "symbol")
            pwd.symbol.forEach(s => collictionValid.push(s))
    });


    for (let i = 1; i <= confirmLength; i++) {
        let rand = Math.floor(Math.random() * collictionValid.length);
        randPassword += collictionValid[rand];
    }

    return randPassword ;
}

const Copy = () => {
    passwordInput.select()
    document.execCommand("copy");
}

generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", Copy);