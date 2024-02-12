const zipCode = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function checkForm() {
    if (zipCode.validity.patternMismatch) {
        alert("Please enter Zip Code with 5 digits!");
    }
    if (password.value !== confirmPassword.value) {
        alert("Please write same passwords in Password and Confirm Password input fields!");
    }
}