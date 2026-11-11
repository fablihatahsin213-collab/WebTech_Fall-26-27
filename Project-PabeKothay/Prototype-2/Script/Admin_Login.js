function collect_login_data() {
    let validEmail = validateEmail();
    let validPassword = validatePassword();

    return false;
}

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("emailErr");
    let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("Login email:", email);

    if (email === "") {
        error.textContent = "Enter your work email.";
        console.log("Email validation failed: email is empty.");
        return false;
    }

    if (!expression.test(email)) {
        error.textContent = "Enter a valid email address.";
        console.log("Email validation failed: invalid email format.");
        return false;
    }

    error.textContent = "";
    console.log("Email validation passed.");
    return true;
}

function validatePassword() {
    let password = document.getElementById("pass").value;
    let error = document.getElementById("passErr");
    console.log("Login password length:", password.length);

    if (password === "") {
        error.textContent = "Enter your password.";
        console.log("Password validation failed: password is empty.");
        return false;
    }

    if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters.";
        console.log("Password validation failed: fewer than 8 characters.");
        return false;
    }

    error.textContent = "";
    console.log("Password validation passed.");
    return true;
}

document.getElementById("loginForm").onsubmit = collect_login_data;