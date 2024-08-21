'use strict';

addEventListener("DOMContentLoaded", () => {

    let number = document.querySelector(".load__number");
    const btn = document.querySelector(".load__btn");
    const complete = document.querySelector(".load__complete");
    let background = document.querySelector(".main__background");

    let porcent = 1;
    let blur = 30;

    btn.addEventListener("click", ()=>{
        btn.style.display = 'none';
        let time = setInterval(()=>{
            porcent++;
            blur -= 30/100;
            if (porcent>100) {
                clearInterval(time);
                complete.style.display = "block";
            } else {
                number.innerHTML = porcent+"%";
                background.style.filter = `blur(${blur}px)`;
            }
        }, 20 );
    });


});