'use strict';

const form = document.forms[0];
const inputsPassword = document.querySelectorAll('input[type=password]');

form.addEventListener('submit', () => setTimeout(cambiarColores, 0));

console.log(inputsPassword);

for (const inputPassword of inputsPassword) {
    console.log(inputPassword);

    inputPassword.placeholder = 'Pulsa botón para ver password';
    const boton = document.createElement('button');
    boton.className = 'btn border border-start-0 rounded-end bi bi-eye';
    boton.type = 'button';

    console.log(boton);

    inputPassword.classList.add('border-end-0');
    inputPassword.parentElement.classList.add('input-group');

    inputPassword.after(boton);

    inputPassword.addEventListener('input', cambioPassword);

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

function cambiarColores() {
    console.log('CAMBIAR COLORES');
    
    if (form.classList.contains('was-validated')) {
        for (const inputPassword of inputsPassword) {
            colorearBoton(inputPassword);
        }
    }
}

function cambioPassword(evento) {
    const input = evento.target;
    colorearBoton(input);
}

function colorearBoton(input) {
    const boton = input.nextElementSibling;

    boton.classList.remove('border-success', 'text-success', 'border-danger', 'text-danger');

    if (input.validity.valid) {
        boton.classList.add('border-success', 'text-success');
    } else {
        boton.classList.add('border-danger', 'text-danger');
    }
}
