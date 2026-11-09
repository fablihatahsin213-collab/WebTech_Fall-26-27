function validate_data(statusId, typeId, statusErrorId, typeErrorId) {
    let status = document.getElementById(statusId).value;
    let type = document.getElementById(typeId).value;
    let statusError = document.getElementById(statusErrorId);
    let typeError = document.getElementById(typeErrorId);
    let valid = true;

    if (status === "") {
        statusError.textContent = "Please select a status.";
        valid = false;
    } else {
        statusError.textContent = "";
    }

    if (type === "") {
        typeError.textContent = "Please select a user type.";
        valid = false;
    } else {
        typeError.textContent = "";
    }

    if (valid) {
        console.log("Status: " + status);
        console.log("User type: " + type);
    }

    return false;
}