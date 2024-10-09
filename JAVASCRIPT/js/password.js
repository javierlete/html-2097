'use strict';

const inputsPassword = document.querySelectorAll('input[type=password]');

console.log(inputsPassword);

for (const inputPassword of inputsPassword) {
    console.log(inputPassword);
    
    inputPassword.placeholder = 'Pulsa botón para ver password';
    const boton = inputPassword.nextElementSibling;
    
    console.log(boton);
    
    boton.addEventListener('click', mostrarOcultarPassword);
}

function mostrarOcultarPassword(evento) {
    console.log('CLICK');

    const icono = evento.target;
    const inputPassword = icono.parentNode.previousElementSibling;

    console.log(icono);
    console.log(inputPassword);

    console.log(inputPassword.type);

    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';

        icono.className = 'bi bi-eye-slash';
    } else {
        inputPassword.type = 'password';

        icono.className = 'bi bi-eye';
    }
}
