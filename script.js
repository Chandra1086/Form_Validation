const submitbtn = document.getElementById('submitbtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const cpassError = document.getElementById('cpassError');

submitbtn.addEventListener('click', (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePaasword();
    const isCPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPasswordValid && isCPasswordValid) {
        alert("Form is Submitted Successfully");

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('cpassword').value = '';

        // Clear icons
        const icons = document.querySelectorAll('.fa-check, .fa-xmark');
        icons.forEach(icon => icon.classList.remove('fa-check', 'fa-xmark'));

        // Clear error messages
        nameError.innerHTML = '';
        emailError.innerHTML = '';
        passError.innerHTML = '';
        cpassError.innerHTML = '';
    }
});

function validateName() {
    const name = document.getElementById('name').value;
    const nameIcon = nameError.previousElementSibling;

    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        nameError.style.color = "red";
        nameIcon.classList.remove('fa-check');
        nameIcon.classList.add('fa-xmark');
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
        nameError.innerHTML = "Write your full name";
        nameError.style.color = "red";
        nameIcon.classList.remove('fa-check');
        nameIcon.classList.add('fa-xmark');
        return false;
    }

    nameError.innerHTML = "";
    nameIcon.classList.remove('fa-xmark');
    nameIcon.classList.add('fa-check');
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailIcon = emailError.previousElementSibling;

    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        emailError.style.color = "red";
        emailIcon.classList.remove('fa-check');
        emailIcon.classList.add('fa-xmark');
        return false;
    }

    if (!email.match(/^[\w.-]+@[\w.-]+\.\w{2,3}$/)) {
        emailError.innerHTML = "Enter valid Email";
        emailError.style.color = "red";
        emailIcon.classList.remove('fa-check');
        emailIcon.classList.add('fa-xmark');
        return false;
    }

    emailError.innerHTML = "";
    emailIcon.classList.remove('fa-xmark');
    emailIcon.classList.add('fa-check');
    return true;
}

function validatePaasword() {
    const password = document.getElementById('password').value;
    const passIcon = passError.previousElementSibling;

    if (password.length === 0) {
        passError.innerHTML = "Password is required";
        passError.style.color = "red";
        passIcon.classList.remove('fa-check');
        passIcon.classList.add('fa-xmark');
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Special character";
        passError.style.color = "red";
        passIcon.classList.remove('fa-check');
        passIcon.classList.add('fa-xmark');
        return false;
    }

    passError.innerHTML = "";
    passIcon.classList.remove('fa-xmark');
    passIcon.classList.add('fa-check');
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const cpassIcon = cpassError.previousElementSibling;

    if (cpassword.length === 0) {
        cpassError.innerHTML = "Confirm Password is required";
        cpassError.style.color = "red";
        cpassIcon.classList.remove('fa-check');
        cpassIcon.classList.add('fa-xmark');
        return false;
    }

    if (password !== cpassword) {
        cpassError.innerHTML = "Passwords do not match";
        cpassError.style.color = "red";
        cpassIcon.classList.remove('fa-check');
        cpassIcon.classList.add('fa-xmark');
        return false;
    }

    cpassError.innerHTML = "";
    cpassIcon.classList.remove('fa-xmark');
    cpassIcon.classList.add('fa-check');
    return true;
}
