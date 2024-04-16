'use strict';

const content = document.querySelector("#muestra");
let sueldo = parseInt(prompt('Ingrese un sueldo'));

switch(true){
    case sueldo > 0 && sueldo <= 500 : content.innerText = "Su sueldo es de $_"+sueldo+", por lo que es bajo"; break;
    case sueldo > 500 && sueldo <= 1000 : content.innerText = "Su sueldo es de $_"+sueldo+", por lo que es medio"; break;
    case sueldo > 1000 && sueldo <= 2000 : content.innerText = "Su sueldo es de $_"+sueldo+", por lo que es alto"; break;
    case sueldo >= 2000 : content.innerText = "Su sueldo es de $_"+sueldo+", por lo que es elevado"; break;
    default: content.innerText = "error! No tienes ingresos"; break;
}