document.addEventListener("DOMContentLoaded", () => {
    const nameField = document.getElementById("name");
    const minitialField = document.getElementById("minitial");
    const lnameField = document.getElementById("lname");
    const matriculationField = document.getElementById("matriculation");
    const emailField = document.querySelector('input[type="email"]');
    const countryField = document.getElementById("country");
    const programField = document.getElementById("program");
    const startedInField = document.getElementById("startedin");

    function showErrorMessage(field, message) {
        let errorElement = field.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains("error-message")) {
            errorElement = document.createElement("div");
            errorElement.classList.add("error-message");
            errorElement.style.color = "red";
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    function clearErrorMessage(field) {
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.textContent = "";
        }
    }

    // Field validation
    function validateField(field, pattern, message) {
        field.addEventListener("input", () => {
            if (!pattern.test(field.value)) {
                showErrorMessage(field, message);
            } else {
                clearErrorMessage(field);
            }
        });
    }

    function validateSelect(field, message) {
        field.addEventListener("change", () => {
            if (!field.value) {
                showErrorMessage(field, message);
            } else {
                clearErrorMessage(field);
            }
        });
    }

    // Checkbox validation
    // function validateCheckboxes(fieldGroup, errorContainerId, message) {
    //     const errorContainer = document.getElementById(errorContainerId);

    //     function checkSelection() {
    //         const anyChecked = Array.from(fieldGroup).some((checkbox) => checkbox.checked);
    //         if (!anyChecked) {
    //             errorContainer.textContent = message;
    //             errorContainer.style.color = "red";
    //         } else {
    //             errorContainer.textContent = "";
    //         }
    //     }

    //     fieldGroup.forEach((checkbox) => {
    //         checkbox.addEventListener("change", checkSelection);
    //     });
    //     checkSelection();
    // }

    // // Radio button validation
    // function validateRadios(fieldGroup, errorContainerId, message) {
    //     const errorContainer = document.getElementById(errorContainerId);

    //     function checkSelection() {
    //         const anySelected = Array.from(fieldGroup).some((radio) => radio.checked);
    //         if (!anySelected) {
    //             errorContainer.textContent = message;
    //             errorContainer.style.color = "red";
    //         } else {
    //             errorContainer.textContent = "";
    //         }
    //     }

    //     fieldGroup.forEach((radio) => {
    //         radio.addEventListener("change", checkSelection);
    //     });
    //     checkSelection();
    // }

    // Apply validations
    validateField(nameField, /^[A-Za-z]+$/, "Only alphabetic characters are allowed for Name.");
    validateField(minitialField, /^[A-Za-z]+$/, "Only alphabetic characters are allowed for Middle Initial.");
    validateField(lnameField, /^[A-Za-z]+$/, "Only alphabetic characters are allowed for Last Name.");
    validateField(matriculationField, /^[0-9]+$/, "Only numeric characters are allowed for Matriculation.");
    validateField(emailField, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address.");
    validateSelect(countryField, "Please select your country.");
    validateSelect(programField, "Please select a graduate program.");
    startedInField.addEventListener("input", () => {
        if (!startedInField.value) {
            showErrorMessage(startedInField, "Please select a start date.");
        } else {
            clearErrorMessage(startedInField);
        }
    });

    // validateCheckboxes(checkboxes, "checkbox-error", "Please select at least one source.");
    // validateRadios(radioButtons, "radio-error", "Please select an option.");
});

function handleSubmit(){
    const checkboxes = document.querySelectorAll('input[name="programsource"]');
    const radioButtons = document.querySelectorAll('input[name="futureoption"]');
    function validateCheckboxes(fieldGroup, errorContainerId, message) {
        const errorContainer = document.getElementById(errorContainerId);

        function checkSelection() {
            const anyChecked = Array.from(fieldGroup).some((checkbox) => checkbox.checked);
            if (!anyChecked) {
                errorContainer.textContent = message;
                errorContainer.style.color = "red";
            } else {
                errorContainer.textContent = "";
            }
        }

        fieldGroup.forEach((checkbox) => {
            checkbox.addEventListener("change", checkSelection);
        });
        checkSelection();
    }

    // Radio button validation
    function validateRadios(fieldGroup, errorContainerId, message) {
        const errorContainer = document.getElementById(errorContainerId);

        function checkSelection() {
            const anySelected = Array.from(fieldGroup).some((radio) => radio.checked);
            if (!anySelected) {
                errorContainer.textContent = message;
                errorContainer.style.color = "red";
            } else {
                errorContainer.textContent = "";
            }
        }

        fieldGroup.forEach((radio) => {
            radio.addEventListener("change", checkSelection);
        });
        checkSelection();
    }

    validateCheckboxes(checkboxes, "checkbox-error", "Please select at least one source.");
    validateRadios(radioButtons, "radio-error", "Please select an option.");
}