'use strict';

let todayYear = new Date().getFullYear();

do {
    var year = parseInt(prompt('Ingrese Año de nacimiento'));
} while (year < (todayYear - 150) || year > todayYear);
let result = todayYear - year;
console.log('Su edad es: '+result);