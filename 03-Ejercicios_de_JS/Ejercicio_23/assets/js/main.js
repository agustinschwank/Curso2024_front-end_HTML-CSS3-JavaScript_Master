'use strict';

addEventListener('DOMContentLoaded', () => {

    let input = document.querySelector('.main__input');
    let main = document.querySelector('.layout__main');
    let check = document.querySelector('.icon_check');
    let xmark = document.querySelector('.icon_xmark');


    
    input.addEventListener("keyup", (e)=>{
        validateMail();
    });


    let validateMail =  () => {
        let email = input.value;
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() != '') {
            if(pattern.test(email)){
                check.style.opacity = 1;
                xmark.style.opacity = 0;
                main.style.borderColor = '#0bd815';
            } else {
                xmark.style.opacity = 1;
                check.style.opacity = 0;
                main.style.borderColor = '#f83535';
            }
        }
    }  


});
