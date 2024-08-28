'use strict';

addEventListener("DOMContentLoaded", () => {

    const btnPrev = document.querySelector(".btn__prev");
    const btnNext = document.querySelector(".btn__next");
    const sliderItems = document.querySelectorAll(".slider__item");

    // Auxiliar Var
    let counter = 0;

    btnNext.addEventListener("click", ()=> {

        counter++;

        if(counter > (sliderItems.length -1)) {
            counter = 0;
        }

        show();
    });

    btnPrev.addEventListener("click", ()=> {

        counter--;

        if(counter < 0) {
            counter = sliderItems.length - 1;
        }

        show();
    });

    let show = () => {
        sliderItems.forEach((item, index) => {
            item.style.transform = `translateX(${100 * (index - counter)}%)`;
        });
    }

    show();

});