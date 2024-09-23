'use strict';

window.addEventListener("DOMContentLoaded", () => {

    let layout = document.querySelector(".layout");
    let upBtn = document.querySelector(".btns__up");
    let downBtn = document.querySelector(".btns__donw");
    let layoutLeft = document.querySelector(".layout__left");
    let layoutRight = document.querySelector(".layout__right");


    let sliderLength = document.querySelectorAll(".left__bg").length;
    let sliderIndex = 0;

    layoutRight.style.top = `-${(sliderLength-1)*100}vh`;


    let actions = (action) =>{

        if(action== "up") {
            sliderIndex++;

            if(sliderIndex> sliderLength-1) {
                sliderIndex = 0;
            }

        } else if (action == "down") {
            sliderIndex--;

            if(sliderIndex < 0) {
                sliderIndex = sliderLength-1;
            }
        }

        let windowsHeight = layout.clientHeight;

        layoutLeft.style.transform = `translateY(-${sliderIndex * windowsHeight}px)`;
        layoutRight.style.transform = `translateY(${sliderIndex * windowsHeight}px)`;


    };

    upBtn.addEventListener("click", ()=>{
        actions("up");
    });


    downBtn.addEventListener("click", ()=>{
        actions("down");
    });


});