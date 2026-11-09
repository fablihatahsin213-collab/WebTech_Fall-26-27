function collect_data() {
    let validName = validateName();
    let validDateOfBirth = validateDateOfBirth();
    let validGender = validateGender();
    let validEmail = validateEmail();
    let validPhone = validatePhone();
    let validDepartment = validateDepartment();
    let validPassword = validatePassword();
    let validConfirmPassword = validateConfirmPassword();

    return false;
}

function validateName() {
    let name = document.getElementById("full-name").value.trim();
    let error = document.getElementById("full-name-error");
    console.log("Full name:", name);

    if (name === "") {
        error.textContent = "Enter your full name.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validateDateOfBirth() {
    let day = document.getElementById("dob-day").value;
    let month = document.getElementById("dob-month").value;
    let year = document.getElementById("dob-year").value;
    let error = document.getElementById("date-of-birth-error");
    console.log("Date of birth:", year + "-" + month + "-" + day);

    if (day === "" || month === "" || year === "") {
        error.textContent = "Enter your date of birth.";
        return false;
    }

    let dateOfBirth = new Date(Number(year), Number(month) - 1, Number(day));
    if (dateOfBirth.getDate() !== Number(day) ||
        dateOfBirth.getMonth() !== Number(month) - 1 ||
        dateOfBirth.getFullYear() !== Number(year)) {
        error.textContent = "Enter a valid date of birth.";
        return false;
    }

    let today = new Date();
    let todayString = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0")
    ].join("-");

    if (dateOfBirth > todayString) {
        error.textContent = "Date of birth cannot be in the future.";
        return false;
    }

    error.textContent = "";
    return true;
}

let yearSelect = document.getElementById("dob-year");
for (let year = 2026; year >= 2010; year--) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}

function validateGender() {
    let genders = document.querySelectorAll('input[name="gender"]');
    let error = document.getElementById("gender-error");
    let selectedGender = "";

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selectedGender = genders[i].value;
            break;
        }
    }
    console.log("Gender:", selectedGender);

    if (selectedGender === "") {
        error.textContent = "Please select a gender.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("work-email").value.trim();
    let error = document.getElementById("work-email-error");
    let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("Email:", email);

    if (email === "") {
        error.textContent = "Enter your official work email.";
        return false;
    }

    if (!expression.test(email)) {
        error.textContent = "Enter a valid email address.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validatePhone() {
    let phone = document.getElementById("phone-number").value.trim();
    let error = document.getElementById("phone-error");
    let digits = phone.replace(/\D/g, "");
    console.log("Phone:", phone);

    if (phone === "") {
        error.textContent = "Enter your phone number.";
        return false;
    }

    if (digits.length !== 11) {
        error.textContent = "Phone number must contain exactly 11 digits.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validateDepartment() {
    let department = document.getElementById("department").value;
    let error = document.getElementById("department-error");
    console.log("Department:", department);

    if (department === "") {
        error.textContent = "Select an admin department.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("password-error");
    console.log("Password validation started.");

    if (password === "") {
        error.textContent = "Create a password.";
        return false;
    }

    if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters long.";
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        error.textContent = "Password must include at least one uppercase letter (A–Z).";
        return false;
    }

    if (!/[a-z]/.test(password)) {
        error.textContent = "Password must include at least one lowercase letter (a–z).";
        return false;
    }

    if (!/[0-9]/.test(password)) {
        error.textContent = "Password must include at least one number (0–9).";
        return false;
    }

    error.textContent = "";
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let error = document.getElementById("confirm-password-error");
    console.log("Password confirmation matches:", password === confirmPassword);

    if (confirmPassword === "") {
        error.textContent = "Confirm your password.";
        return false;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return false;
    }

    error.textContent = "";
    return true;
}

document.getElementById("admin-registration-form").onsubmit = collect_data;