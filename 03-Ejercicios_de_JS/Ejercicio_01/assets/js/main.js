'use strict';

/* Asignacion de valores */
let nombre = 'Camila';
let apellido = 'Gonzales';
let edad = 18;
let pais = 'Argentina';
let conocimientos = ['HTML', 'CSS3', 'JavaScript', 'REACT', 'SASS', 'PHP', 'NODE JS'];

/* Muestra por consola */
console.log('Nombre: '+nombre+' Apellido: '+apellido+' Edad: '+edad+' Pais: '+pais+' Conosimientos: '+conocimientos);

/* Muestra por template string e interpolacion */
console.log(`Datos Originales:
Nombre: ${nombre} 
Apellido: ${apellido}
Edad: ${edad}
Edad: ${pais}
Conocimientos: ${conocimientos}
`);

/* Cambio de valor en edad + nuevo elemento al arreglo */
edad = 25;
conocimientos.push('Laravel');

/* Muestro valores modificados por consola */
console.log(`Datos Actualizados:
Nombre: ${nombre} 
Apellido: ${apellido}
Edad: ${edad}
Edad: ${pais}
Conocimientos: ${conocimientos[0]} - ${conocimientos[1]} - ${conocimientos[2]} - ${conocimientos[3]} - ${conocimientos[4]} - ${conocimientos[5]} - ${conocimientos[6]} - ${conocimientos[7]}
`);