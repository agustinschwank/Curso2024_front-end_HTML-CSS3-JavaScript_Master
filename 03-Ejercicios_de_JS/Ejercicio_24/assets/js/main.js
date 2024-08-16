'use strict';

addEventListener('DOMContentLoaded', () => {

    let input = document.querySelector('.main__input');
    let eye = document.querySelector('.icon_eye');

    eye.addEventListener("click", ()=>{

        if(input.value.trim() != '' && input.type == 'password') {
            input.type = 'text';
            eye.classList.add('fa-eye');
            eye.classList.remove('fa-eye-slash');
        } else {
            input.type = 'password';
            eye.classList.add('fa-eye-slash');
            eye.classList.remove('fa-eye');
        }

    });
    

});
