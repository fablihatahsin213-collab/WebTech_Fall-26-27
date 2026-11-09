function validate_data(statusId, actionId, statusErrorId, actionErrorId) {
    let status = document.getElementById(statusId).value;
    let action = document.getElementById(actionId).value;
    let statusError = document.getElementById(statusErrorId);
    let actionError = document.getElementById(actionErrorId);
    let valid = true;

    if (status === "") {
        statusError.textContent = "Please select a status.";
        valid = false;
    } else {
        statusError.textContent = "";
    }

    if (action === "") {
        actionError.textContent = "Please select an action.";
        valid = false;
    } else {
        actionError.textContent = "";
    }

    if (valid) {
        console.log("Status: " + status);
        console.log("Action: " + action);
    }

    return valid;
}

function reset_data(statusId, actionId, statusErrorId, actionErrorId) {
    document.getElementById(statusId).selectedIndex = 0;
    document.getElementById(actionId).selectedIndex = 0;
    document.getElementById(statusErrorId).textContent = "";
    document.getElementById(actionErrorId).textContent = "";
}

function validate_post_status(statusId, errorId) {
    let status = document.getElementById(statusId).value;
    let error = document.getElementById(errorId);

    if (status === "") {
        error.textContent = "Please select a status.";
        return false;
    }

    error.textContent = "";
    console.log("Post status: " + status);
    return true;
}