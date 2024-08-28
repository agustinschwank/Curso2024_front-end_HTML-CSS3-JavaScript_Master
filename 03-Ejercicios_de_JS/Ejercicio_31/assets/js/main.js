'use strict';

addEventListener("DOMContentLoaded", () => {

    // Variables y Obtencion
    const btnNext = document.querySelector(".btn__next");
    const btnPrev = document.querySelector(".btn__prev");
    const progressBar = document.querySelector(".steps__bars");
    const stepCircle = document.querySelectorAll(".circles__circle");

    // Variables Auxiliares
    let countent = 1; //pasps
    let progress = 0; //barra

    btnNext.addEventListener("click", ()=>{
        countent++;
        progress += 25;

        if(countent > stepCircle.length) {
            countent = stepCircle.length;
            progress = 100;
        }

        progressBar.style.height = progress+"%";

        // Funcionalidad BTN
        disablesBtns();

        //Funcionalidad Circles
        activeCircle();

    });

    btnPrev.addEventListener("click", ()=>{
        countent--;
        progress -= 25;

        if(countent < 1) {
            countent = 1;
            progress = 0;
        }

        progressBar.style.height = progress+"%";

        //Funcionalidad BTN
        disablesBtns();

        //Funcionalidad Circles
        activeCircle();
        
    });


    let disablesBtns = (progress) => {

        if(progress >= 100 ) {
            btnNext.setAttribute("disabled", "true");
            btnNext.classList.add("disable");
        } else {
            btnNext.removeAttribute("disabled");
            btnNext.classList.remove("disable");
        }

        if(progress <= 0) {
            btnPrev.setAttribute("disabled", "true");
            btnPrev.classList.add("disable");
        } else {
            btnPrev.removeAttribute("disabled");
            btnPrev.classList.remove("disable");
        }
    }

    let activeCircle = () => {
        stepCircle.forEach((circle, index) => {
            if(countent > index) {
                circle.classList.add("active");
                //circle.lastElementChild.style.opacity = 1;

            } else {
                circle.classList.remove("active");
                //circle.lastElementChild.style.opacity = 0;
            }
        });
    }


});