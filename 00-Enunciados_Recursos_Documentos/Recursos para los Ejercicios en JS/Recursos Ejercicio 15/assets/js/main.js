'use strict';

addEventListener('DOMContentLoaded', () => {

    const sueldos = [450, 120, 859, 1300, 4000, 5000, 685, 1750, 1100, 2400, 2350];

    let userSueldo = parseInt(prompt('Ingrese su Sueldo:', 0));

    function buscarsueldos(listSueldos, userSueldo){
        let buscar = listSueldos.filter(sueldo => sueldo >= userSueldo);
        let ordenados = buscar.sort((a,b) => a - b);
        console.log("Salarios mayores a ($"+userSueldo+") son:");
        for(let i in ordenados) console.log(ordenados[i]);
    };

    buscarsueldos(sueldos, userSueldo);

});
