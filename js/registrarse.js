document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        validarCampos();
    });

    document.querySelectorAll(".form-control").forEach((input) => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Tab" || event.key === "Enter") {
                event.preventDefault();
                validarCampos();
            }
        });
    });
});

const validarCampos = () => {
    resetErrorMessages();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const date = document.getElementById("date").value.trim();
    const pais = document.getElementById("pais").value.trim();
    let isValid = true;

    if (username === "") {
        displayErrorMessage("usernameError", "Ingrese un usuario.");
        document.getElementById("username").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("username").classList.remove("is-invalid");
        document.getElementById("username").classList.add("is-valid");
    }

    if (!isValidEmail(email)) {
        displayErrorMessage("emailError", "Correo inválido.");
        document.getElementById("email").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("email").classList.add("is-valid");
    }

    if (password.length < 8) {
        displayErrorMessage("passwordError", "Por lo menos 8 caracteres.");
        document.getElementById("password").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
    }
    if (date === "") {
        displayErrorMessage("dateError", "Ingrese la fecha.");
        document.getElementById("date").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("date").classList.remove("is-invalid");
        document.getElementById("date").classList.add("is-valid");
    }
    if (pais === "") {
        displayErrorMessage("paisError", "Por favor ingrese su país.");
        document.getElementById("pais").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("pais").classList.remove("is-invalid");
        document.getElementById("pais").classList.add("is-valid");
    }
    
    if (isValid) {
        alert("¡Formulario enviado correctamente!");
    }
};

const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const displayErrorMessage = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
};

const resetErrorMessages = () => {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
     
    });
};