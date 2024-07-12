'use strict';

addEventListener('DOMContentLoaded', () => {

    /*
    const listado = document.querySelector("#animals__list");

    function getAnimals(...animals) {
        var lista = '';
        for (let i=0; i < animals.length; i++) {
            const p = document.createElement('p');
            p.innerHTML = animals[i];
            lista += p.outerHTML;
        } 
        listado.innerHTML = lista;
    };
    

    getAnimals('Elefante','Tortuga','Tigre');
    */


    const animals = ['Elefante', 'Gato', 'Perro', 'Tigre'];

    document.writeln (`<h1>Listado de Animales</h1>`);

    animals.forEach((animal, index) => {
        document.writeln(`<p>Animal ${++index}: ${animal}</p>`);
    });

});
