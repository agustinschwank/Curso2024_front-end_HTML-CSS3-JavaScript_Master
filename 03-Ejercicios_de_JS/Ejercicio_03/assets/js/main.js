'use strict';

let velocidad = 135;
const limit = 60;

/* Utilizando if */
if(velocidad>limit) {
    console.log('Su velocidad es de "'+velocidad+'" reduzcala de inmediato, el limite es: '+limit);
} else {
    console.log('Su velocidad es de "'+velocidad+' no supera el mite de: '+limit);
}

/* Utilizando Ternaria */
(velocidad>limit) ? console.log('Su velocidad es de "'+velocidad+'" reduzcala de inmediato, el limite es: '+limit)
                 : console.log('Su velocidad es de "'+velocidad+' no supera el mite de: '+limit);;