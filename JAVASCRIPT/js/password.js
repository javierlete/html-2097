'use strict';

const inputsPassword = document.querySelectorAll('input[type=password]');

console.log(inputsPassword);

for (const inputPassword of inputsPassword) {
    console.log(inputPassword);

    inputPassword.placeholder = 'Pulsa botón para ver password';
    const boton = document.createElement('button');
    boton.className = 'btn border border-start-0 bi bi-eye';
    boton.type = 'button';

    console.log(boton);

    inputPassword.classList.add('border-end-0');
    inputPassword.parentElement.classList.add('input-group');

    inputPassword.after(boton);

    boton.addEventListener('click', mostrarOcultarPassword);
}

function mostrarOcultarPassword(evento) {
    console.log('CLICK');

    const boton = evento.target;
    const inputPassword = boton.previousElementSibling;

    console.log(boton);
    console.log(inputPassword);

    console.log(inputPassword.type);

    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';

        boton.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        inputPassword.type = 'password';
        
        boton.classList.replace('bi-eye-slash', 'bi-eye');
    }
}
