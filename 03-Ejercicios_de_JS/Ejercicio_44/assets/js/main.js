'use strict';

window.addEventListener("DOMContentLoaded", () => {

    let selectionBox = document.querySelector(".selection");
    let selectionImg = document.querySelector(".selection__img");
    let btnClose = document.querySelector(".selection__close");
    let images = document.querySelectorAll(".main__img");


    images.forEach(image => {

        image.addEventListener("click", ()=>{
            selectionImg.querySelector(".img__selected").setAttribute("src",image.querySelector(".img__item").getAttribute("src"));
            selectionBox.classList.add('selection--show');
        });

    });

    btnClose.addEventListener("click", ()=>{
        selectionBox.classList.remove("selection--show");
    });


});