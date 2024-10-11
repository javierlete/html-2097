'use strict';

let productos;

window.addEventListener('DOMContentLoaded', async () => {
    const respuesta = await fetch('json/tienda.json');
    productos = await respuesta.json();
    
    console.log(productos);

    mostrar('listado');

    const divListado = document.querySelector('#listado>div');

    for (const producto of productos) {
        const div = document.createElement('div');
        div.className = 'col';

        div.innerHTML = `
            <div class="card h-100">
                <img src="https://picsum.photos/400/300?${producto.id}" class="card-img-top" alt="...">
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
});

function ficha(id) {
    mostrar('ficha');

    const producto = productos.filter(p => p.id === id)[0];

    document.querySelector('#foto').src = 'https://picsum.photos/400/300?' + producto.id;
    document.querySelector('#nombre').innerText = producto.nombre;
    document.querySelector('#precio').innerText = producto.precio;
}

function admin() {
    mostrar('admin');

    for(const producto of productos) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <th class="text-end">${producto.id}</th>
            <td>${producto.nombre}</td>
            <td class="text-end">${producto.precio} €</td>
            <td><a href="formulario.html" class="btn btn-sm btn-primary">Editar</a><a href="#"
                    class="btn btn-danger btn-sm">Borrar</a></td>
        `;

        document.querySelector('#admin tbody').appendChild(tr);
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
