/// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    asunto: '',
    message: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const message = document.querySelector('#message');
const formcontacto = document.querySelector('.formcontacto');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
message.addEventListener('input', leerTexto);

// El Evento de Submit
formcontacto.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, message } = datos;

   if( nombre === '' || email ==='' || asunto ==='' || message ==='' ) {

       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
      })

       return; // Corta la ejecucion del codigo
       
   }

// Crear la otra alerta de enviar el formulario

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Mensaje enviado correctamente',
    showConfirmButton: false,
    timer: 3000
  })

});



function leerTexto(e) {
    //  console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    //  console.log(datos);
}


// Muesta una alerta de que se envio correctamente
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');


    formcontacto.appendChild(alerta);

    // desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


// Muestra un Error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formcontacto.appendChild( error );

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}


// Boton Menu de Inicio en pantalla pequeña
function accion(){
    console.log('Esta funcionado boton');
    var ancla = document.getElementsByClassName('nav-enlace');
    for( var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}