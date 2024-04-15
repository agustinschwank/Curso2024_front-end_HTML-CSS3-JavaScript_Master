'use strict';

let marca = 'Ford',
    velocidad = 120,
    stock = true,
    modelos = ['Mustang', 'F-150', 'Explorer', 'Focus', 'Escape'];

const content =  document.querySelector('#box1');

let plantilla = `<p>Automoviles de la marca "${marca}" y velocidad de "${velocidad} km/h"</p> <p>hay disponibilidad en strock: ${stock} </p>`;

plantilla += '<ul>';
modelos.forEach(modelo => {
    plantilla += `<li> ${modelo} </li>`;
});
plantilla += '</ul>';

content.innerHTML = plantilla;
