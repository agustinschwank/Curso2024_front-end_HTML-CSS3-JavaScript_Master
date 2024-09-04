'use strict';

window.addEventListener("DOMContentLoaded", () => {

    let btn = document.querySelector(".nav__btn");
    let btn__plus = document.querySelector(".btn__icon-plus");
    let btn__close = document.querySelector(".btn__icon-close");
    let list__nav = document.querySelector(".nav__list");

    btn.addEventListener("click", ()=>{
        btn__plus.classList.toggle("btn__show");
        btn__close.classList.toggle("btn__show");
        list__nav.classList.toggle("list__open");
    });

});