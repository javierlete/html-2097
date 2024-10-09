'use strict';

const boton = document.querySelector('button');
const input = document.querySelector('input');

console.log(boton);
console.log(input);

input.placeholder = 'Pulsa botón para ver password';

boton.addEventListener('click', mostrarOcultarPassword);

function mostrarOcultarPassword() {
    console.log('CLICK');

    console.log(input.type);

    if (input.type === 'password') {
        input.type = 'text';

        boton.innerText = 'Ocultar contraseña';
    } else {
        input.type = 'password';

        boton.innerText = 'Mostrar contraseña';
    }
}
