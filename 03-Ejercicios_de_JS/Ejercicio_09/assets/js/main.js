'use strict';

addEventListener('DOMContentLoaded', ()=>{

    const h2 = document.querySelector('#resultado');
    const p = document.querySelector('#numeros');
    
    function sumAll(...valores){
        let result = 0;
        p.innerHTML = 'La lista de numeros es: ';
        for(let i=0; i < valores.length; i++) {
            result += valores[i];
            p.innerHTML += valores[i];
            if (i !== valores.length - 1) p.innerHTML += ' - '; 
        }
        h2.innerHTML = `Resultado de la suma: ${result}`;
    };

    sumAll(1,5,3,24,33,8,12,45,60);

});
