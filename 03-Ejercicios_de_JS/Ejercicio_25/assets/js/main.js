'use strict';

/*

Nota:   para poder ejecutar usando import, se debe realizar en un servidor
        de lo contrario bloquear import y habilitar variable pattern.
        Ademas tener en cuenta de agregar type="module" al script

*/


//import {pattern} from './emojis.js';

addEventListener('DOMContentLoaded', () => {


    let emoji = document.querySelector('.emojis_emoji');
    let main = document.querySelector('.layout__main');

    const pattern = ['🎰','🎲','♟️','🧩','🧸','🖼️','🎨','🧵','🧶','👓️','🕶️','🥽'];

    main.addEventListener("mouseleave", ()=>{
        emoji.innerHTML = pattern[Math.ceil(Math.random() * pattern.length)];
    });

    if(emoji.innerHTML == '') {
        emoji.innerHTML = pattern[Math.ceil(Math.random() * pattern.length)];
    }

});
