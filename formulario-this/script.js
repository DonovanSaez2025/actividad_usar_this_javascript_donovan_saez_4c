// Ejercicio 1 (guiado)
function resaltar(elemento) {
    elemento.style.backgroundColor = "#dff0ff";
}

function normal(elemento) {
    elemento.style.backgroundColor = "white";
}

// Ejercicio 2 (práctica)
function validarFormulario(formulario) {
    let correo = formulario.correo.value;
    if (correo === "") {
        document.getElementById("mensaje").textContent =
            "El correo no puede estar vacío";
        return false;
    }
    document.getElementById("mensaje").textContent =
        "Formulario enviado correctamente";
    return true;
}

// Ejercicio 3 (autonómo)
// Cambiar borde al hacer click en los inputs
function resaltarInput(input) {
    input.style.border = "5px solid #bfe7ff";
}

// Devolver el borde dar click en otro lado
function normalInput(input) {
    input.style.border = "1px solid #000000";
}

// Válidar el formulario
function validarFormPractico(formulario) {
    event.preventDefault() // Evita que se recargue la página
    let nombre = formulario.nombre.value.trim();
    let edad = formulario.edad.value;
    
    if (nombre === "" || edad === "") { // Si el nombre o la edad están vacíos
        document.getElementById("mensajeForm").textContent =
            "Los campos no pueden estar vacíos.";
        return false;
    } else { // Si no
        document.getElementById("mensajeForm").textContent =
            `Registrado con éxito, bienvenido señor ${nombre} de ${edad} años.`;
        formulario.reset();
        return true;
    };
};