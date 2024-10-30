'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");
    const list = document.querySelector(".layout__list");
    const lista = document.querySelector("#list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        lista.innerHTML = `
                        <li>Nombre: <span>${(form.querySelector("#name").value).trim()}</span></li>
                        <li>Apellido: <span>${(form.querySelector("#lastname").value).trim()}</span></li>
                        <li>Edad: <span>${(form.querySelector("#years").value).trim()} años</span></li>
                    `;

        form.querySelector("#name").value = form.querySelector("#lastname").value = form.querySelector("#years").value = '';

    });

});