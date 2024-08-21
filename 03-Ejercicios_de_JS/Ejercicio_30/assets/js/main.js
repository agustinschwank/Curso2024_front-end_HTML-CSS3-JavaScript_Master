'use strict';

addEventListener("DOMContentLoaded", () => {

    const numbers = document.querySelectorAll(".social__number");
    let countent = 0;

    numbers.forEach((number) =>{

        let maxNumber = parseInt(number.getAttribute("data-target"));
        
        let timeCountent = setInterval(()=>{

            let nowNumber = parseInt(number.innerHTML);

            countent = maxNumber / 300;

            if(nowNumber > maxNumber) {
                number.innerHTML = maxNumber;
                clearInterval(timeCountent);
            } else {
                number.innerHTML = Math.ceil(countent + nowNumber);
            }

        }, 10);

    });



});