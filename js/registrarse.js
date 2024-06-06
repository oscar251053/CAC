/*function validateForm() {
    var name = document.getElementById('name').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var pais = document.getElementById('pais').value;
      
      if (password.trim() == '' || email.trim() == '' || name.trim() =='' || apellido.trim()=='' || fechaNacimiento.trim()=='' || pais.trim()=='' ){
       
  
        alert('Por favor, complete todos los campos.');
        return false;
      }
    
      // Puedes agregar aquí otras validaciones para el campo de email si lo necesitas
      alert('Registro completo');
  
      return true;
    }*/
    function resetErrorMessages() {
      let errorElements = document.querySelectorAll(".error-message");
      errorElements.forEach((element)=> {
          element.innerText = "";
      });
  }
  function displayErrorMessage(elementId, message) {
      let errorElement = document.getElementById(elementId);
      errorElement.innerText = message;
  }
  function isValidEmail(email) {
      // Utilizamos una expresión regular para validar el formato del correo electrónico
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // estructura texto@texto.texto
  
      return emailPattern.test(email);
  }
  
  
  document.addEventListener("DOMContentLoaded", ()=>{
      const form = document.getElementById("loginForm");
      form.addEventListener("submit", (event)=>{
          // Evitar que se envíe el formulario automáticamente
          event.preventDefault();
  
          // Resetear los mensajes de error
          resetErrorMessages();
  
          // Validar los campos
          let name = document.getElementById("name").value.trim();
          let email = document.getElementById("email").value.trim();
          let password = document.getElementById("password").value.trim();
          let fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
          let pais = document.getElementById("pais").value.trim();
          let isValid = true;
  
        if (name === "") {
            displayErrorMessage("usernameError", "Por favor ingrese su nombre.");
            isValid = false;
        }
        
        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un Email válido.");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "Ingrese al menos 8 caracteres.");
            isValid = false;
        }
        if (fechaNacimiento === "") {
            displayErrorMessage("fechaError", "Por favor complete el campo.");
            isValid = false;
        }
        if (value === "") {
            displayErrorMessage("paisError", "Por favor complete el campo.");
            isValid = false;
        }
        if (isValid) {
            // Aquí puedes enviar el formulario si todos los campos son válidos
            alert("¡Formulario enviado correctamente!");
          }
      });
  } );
    