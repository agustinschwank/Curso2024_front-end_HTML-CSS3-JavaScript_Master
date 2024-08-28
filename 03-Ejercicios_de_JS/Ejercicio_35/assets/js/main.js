'use strict';

addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector(".main__title");

    const text = "¡Bienvenido al Curso!";

    let letter_start = 0;
    let letter_end = 1;

    let writeing = () => {

        setInterval(()=>{
            title.innerHTML = text.slice(letter_start,letter_end); 
            letter_end++;
            if(letter_end > text.length) {
                letter_end = 1;
            }
        },150);

    };

    writeing();
    

});