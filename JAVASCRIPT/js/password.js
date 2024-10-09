'use strict';

const boton = document.querySelector('button');
const input = document.querySelector('input');

console.log(boton);
console.log(input);

input.placeholder = 'Pulsa botón para ver password';

boton.addEventListener('click', mostrarPassword);

function mostrarPassword() {
    console.log('CLICK');

    console.log(input.type);

    input.type = 'text';

    boton.style.display = 'none';
}
