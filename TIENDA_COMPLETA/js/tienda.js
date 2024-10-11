'use strict';

window.addEventListener('DOMContentLoaded', async () => {
    const divListado = document.querySelector('#listado>div');
    
    const respuesta = await fetch('json/tienda.json');
    const productos = await respuesta.json();

    console.log(productos);

    for(const producto of productos) {
        const div = document.createElement('div');
        div.className = 'col';

        div.innerHTML = `
            <div class="card h-100">
                <img src="https://picsum.photos/400/300?${producto.id}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text text-end fw-bold">${producto.precio} €</p>
                    <p class="card-text">
                        <a class="btn btn-primary w-100" href="ficha.html">Ver ficha</a>
                    </p>
                </div>
            </div>
        `;

        divListado.appendChild(div);
    }
});