'use strict';

const boton = document.querySelector('button');
const input = document.querySelector('input');
const icono = boton.children[0];

console.log(boton);
console.log(input);
console.log(icono);

input.placeholder = 'Pulsa botón para ver password';

boton.addEventListener('click', mostrarOcultarPassword);

function mostrarOcultarPassword() {
    console.log('CLICK');

    console.log(input.type);

    if (input.type === 'password') {
        input.type = 'text';

        icono.className = 'bi bi-eye-slash';
    } else {
        input.type = 'password';
        
        icono.className = 'bi bi-eye';
    }
}
