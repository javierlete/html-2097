'use strict';

const boton = document.querySelector('button');
const inputPassword = document.querySelector('input[type=password]');
const icono = boton.children[0];

console.log(boton);
console.log(inputPassword);
console.log(icono);

inputPassword.placeholder = 'Pulsa botón para ver password';

boton.addEventListener('click', mostrarOcultarPassword);

function mostrarOcultarPassword() {
    console.log('CLICK');

    console.log(inputPassword.type);

    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';

        icono.className = 'bi bi-eye-slash';
    } else {
        inputPassword.type = 'password';
        
        icono.className = 'bi bi-eye';
    }
}
