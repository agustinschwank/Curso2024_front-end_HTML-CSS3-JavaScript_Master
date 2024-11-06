'use strict';

window.addEventListener("DOMContentLoaded", () => {

    let sliderContent = document.querySelectorAll(".logos__logo");
    let slider = document.querySelector(".slider__logos");


    sliderContent.forEach((element) => {
        let node = element.cloneNode(true)
        slider.appendChild(node);
    });
    


});