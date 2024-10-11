'use strict';

let productos;

window.addEventListener('DOMContentLoaded', async () => {
    listado();
});

async function listado() {
    mostrar('listado');

    const respuesta = await fetch('http://localhost:3000/productos');
    productos = await respuesta.json();

    console.log(productos);

    const divListado = document.querySelector('#listado>div');

    divListado.innerHTML = '';

    for (const producto of productos) {
        const div = document.createElement('div');
        div.className = 'col';

        div.innerHTML = `
            <div class="card h-100">
                <img src="fotos/${producto.id}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text text-end fw-bold">${producto.precio} €</p>
                    <p class="card-text">
                        <a class="btn btn-primary w-100" href="javascript:ficha(${producto.id})">Ver ficha</a>
                    </p>
                </div>
            </div>
        `;

        divListado.appendChild(div);
    }
}

function ficha(id) {
    mostrar('ficha');

    const producto = productos.filter(p => p.id === id)[0];

    document.querySelector('#foto').src = `fotos/${producto.id}.jpg`;
    document.querySelector('#nombre').innerText = producto.nombre;
    document.querySelector('#precio').innerText = producto.precio;
}

function admin() {
    mostrar('admin');

    const tbody = document.querySelector('#admin tbody');

    tbody.innerHTML = '';

    for (const producto of productos) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <th class="text-end">${producto.id}</th>
            <td>${producto.nombre}</td>
            <td class="text-end">${producto.precio} €</td>
            <td><a href="javascript:formulario(${producto.id})" class="btn btn-sm btn-primary">Editar</a><a href="#"
                    class="btn btn-danger btn-sm">Borrar</a></td>
        `;

        tbody.appendChild(tr);
    }

    new DataTable('#admin table', {
        retrieve: true,
        language: {
            url: 'json/dataTables_es-ES.json'
        }
    });
}

function formulario(id) {
    mostrar('formulario');

    const form = document.querySelector('#formulario form');

    if (id) {
        const producto = productos.filter(p => p.id === id)[0];

        form.idProducto.value = producto.id;
        form.nombre.value = producto.nombre;
        form.precio.value = producto.precio;
    } else {
        form.reset();
    }
}

function mostrar(seccion) {
    const secciones = document.querySelectorAll('section');

    for (const seccion of secciones) {
        seccion.style.display = 'none';
    }

    const capa = document.querySelector('#' + seccion);

    capa.style.display = 'block';
}

function guardar() {
    const form = document.querySelector('#formulario form');

    console.log(form);

    if (form.checkValidity()) {
        const producto = { nombre: form.nombre.value, precio: +form.precio.value };

        if(form.idProducto.value) {
            producto.id = +form.idProducto.value;
        }

        console.log(producto);

        admin();
    } else {
        form.classList.add('was-validated');
    }
}