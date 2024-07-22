'use strict';

addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.layout__card');
    
    cards.forEach(card => {
        let btn = document.createElement("button");
        let text = document.createTextNode("Eliminar Boton");
        btn.classList.add("content__btn");
        btn.appendChild(text);
        //card.appendChild(btn);
        card.children[1].appendChild(btn)
    });

});
