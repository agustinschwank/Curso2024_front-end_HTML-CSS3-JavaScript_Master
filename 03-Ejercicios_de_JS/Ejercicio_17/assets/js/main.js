'use strict';

addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.layout__card');

    cards.forEach(card => {
        let header = card.querySelector('.card__header');
        let button = card.querySelector('.content__btn');
        let description = card.querySelector('.content__description');
        //console.log(header);

        button.addEventListener("click", () => {
            card.style.boxShadow = "0px 0px 14px #000000";
            header.style.background = "#1B6AC2";
            description.style.color = "#ffffffAA";
            button.style.background = "#ffffff";
            button.style.color = "#000000";
        });
    });

});
