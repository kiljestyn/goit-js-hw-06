const input = document.getElementById("validation-input");
  input.addEventListener("blur", checkInput);

  function checkInput() {
    const length = input.value.length;
    const requiredLength = parseInt(input.getAttribute("data-length"));

    if (length === requiredLength) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  }