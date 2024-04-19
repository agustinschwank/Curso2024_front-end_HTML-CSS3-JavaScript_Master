'use strict';

addEventListener('DOMContentLoaded', ()=>{
    
    /* OPCION 1

    // Funcion determinante de la condicionalidad 
    function determinarParidad(valor){
        if((valor % 2) == 0) {
            return ('El numero ingresado '+valor+' es un numero PAR');
        } else {
            return ('El numero ingresado '+valor+' es un numero IMPAR');
        }
    }

    // Programa Principal 
    do {
        var numero = parseInt(prompt('Ingrese un numero para determinar si es par o impar'),0);
    } while(isNaN(numero) || numero < 0);

    // Por Ventana
    alert(determinarParidad(numero));

    // Por Consola
    console.log(determinarParidad(numero));

    //Por Pantalla
    document.write(determinarParidad(numero));

    */


    // OPCION 2 

    let numero = 0;

    function isPar(valor){
        return (valor%2 == 0) ? true : false;
    }

    do {
        numero = parseInt(prompt('Ingrese un numero para determinar si es "PAR" o "IMPAR"'),0);
    } while (Number.isNaN(numero) || numero < 0);

    let response = 'Su numero '+numero+' es IMPAR';

    if(isPar(numero)) {
        response = 'Su numero '+numero+' es PAR';
    }

    alert(response);
    console.log(response);
    document.write(response);

});
