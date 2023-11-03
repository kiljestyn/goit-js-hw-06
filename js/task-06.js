const textInput = document.querySelector('#validation-input');
const validText = document.querySelector('input[data-length="6"]');
//console.log(validText.getAttribute("data-length"));
textInput.addEventListener("blur", () => {
    if (textInput.value.length === parseInt(validText.getAttribute("data-length"))) {
        //textInput.style.borderColor = "#4CAF50";
        textInput.classList.add("valid")
        textInput.classList.remove("invalid")
    } else {
        //textInput.style.borderColor = "#F44336";
        textInput.classList.add("invalid")
        textInput.classList.remove("valid")
    }
});