'use strict';

addEventListener('DOMContentLoaded', () => {

    let word = prompt('Ingrese una Palabra');

    function countAndUpperCase(text){
        return `La palabra ingresada es "${text.toUpperCase()}" y contiene ${text.length} letras.`;
    }

    alert(countAndUpperCase(word));

});
