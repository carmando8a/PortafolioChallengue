export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"    
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "El nombre debe contener entre 2 a 50 caracteres",
    },
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido debe contener el caracter @ ",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "El asunto debe contener maximo 50 caracteres",
    },
    message: {
        valueMissing: "El campo mensaje no puede estar vacio",
        patternMismatch: "El mensaje debe contener un minimo de 5 a maximo 300 caracteres",
    },
};

function mostrarMensajeDeError(tipoDeInput, input,) {
    let mensaje = ""
    tipoDeErrores.forEach( error => {
       if (input.validity[error]) {
         console.log(tipoDeInput, error);
         console.log(input.validity[error]);
         console.log(mensajesDeError[tipoDeInput][error]);
         mensaje = mensajesDeError[tipoDeInput][error];
       }
    })
    return mensaje
}

