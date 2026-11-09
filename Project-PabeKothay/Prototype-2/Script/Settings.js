function validateSettingsForm() {
    let validCurrentPassword = validateCurrentPassword();
    let validNewPassword = validateNewPassword();
    let validConfirmPassword = validateConfirmPassword();

    return false;
}

function validateCurrentPassword() {
    let password = document.getElementById("current-password").value;
    let error = document.getElementById("current-password-error");
    if (password === "") {
        error.textContent = "Enter your current password.";
        console.log("Current password validation failed: password is empty.");
        return false;
    }

    error.textContent = "";
    console.log("Current password validation passed.");
    return true;
}

function validateNewPassword() {
    let password = document.getElementById("new-password").value;
    let error = document.getElementById("new-password-error");
    if (password === "") {
        error.textContent = "Enter a new password.";
        console.log("New password validation failed: password is empty.");
        return false;
    }

    if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters long.";
        console.log("New password validation failed: fewer than 8 characters.");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        error.textContent = "Password must include at least one uppercase letter (A–Z).";
        console.log("New password validation failed: no uppercase letter.");
        return false;
    }

    if (!/[a-z]/.test(password)) {
        error.textContent = "Password must include at least one lowercase letter (a–z).";
        console.log("New password validation failed: no lowercase letter.");
        return false;
    }

    if (!/[0-9]/.test(password)) {
        error.textContent = "Password must include at least one number (0–9).";
        console.log("New password validation failed: no number.");
        return false;
    }

    error.textContent = "";
    console.log("New password validation passed.");
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let error = document.getElementById("confirm-password-error");
    if (confirmPassword === "") {
        error.textContent = "Confirm your new password.";
        console.log("Password confirmation failed: confirmation is empty.");
        return false;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        console.log("Password confirmation failed: passwords do not match.");
        return false;
    }

    error.textContent = "";
    console.log("Password confirmation passed.");
    return true;
}

document.getElementById("settings-form").onsubmit = validateSettingsForm;