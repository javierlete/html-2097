'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const form = document.forms[0];

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const password = form.password.value;
        const password2 = form.password2.value;

        console.log(password, password2);

        if (password === password2) {
            form.password.setCustomValidity('');
            form.password2.setCustomValidity('');
        } else {
            form.password.setCustomValidity('No son iguales las contraseñas');
            form.password2.setCustomValidity('No son iguales las contraseñas');
        }

        if (form.checkValidity()) {
            alerta('Todo está bien', 'success');
        } else {
            form.classList.add('was-validated');
            alerta('Hay errores en el formulario', 'danger');
        }
    });
});

function alerta(mensaje, tipo) {
    const alerta = document.querySelector('.alert');
    
    alerta.classList.remove('alert-danger', 'alert-success');
    alerta.classList.add('alert-' + tipo);
    
    alerta.innerText = mensaje;
    
    alerta.style.display = 'block';
}

function alertaOcultar() {
    const alerta = document.querySelector('.alert');
    alerta.style.display = 'none';
}