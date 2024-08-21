'use strict';

addEventListener('DOMContentLoaded', () => {

    const starGrey = document.querySelector('.main__star--grey');
    const starYellow = document.querySelector('.main__star--yellow');

    starGrey.addEventListener("click", ()=>{
        starYellow.classList.add('visible');
        starGrey.classList.add('yellow_color');
    });
    
    starYellow.addEventListener("click", ()=> {
        starYellow.classList.remove('visible');
        starGrey.classList.remove('yellow_color');
    })

});
