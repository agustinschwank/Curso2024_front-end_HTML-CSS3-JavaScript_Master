'use strict';

addEventListener("DOMContentLoaded", () => {

    const formGroup = document.querySelectorAll('.form__group');

    formGroup.forEach((group)=>{
        let label = group.firstElementChild;
        let input = group.lastElementChild;

        input.addEventListener("focus", ()=>{
            label.classList.remove("blur");
            label.classList.add("focus");
        });


        input.addEventListener("blur", ()=>{
            if(input.value.trim() == "") {
                label.classList.remove("focus");
                label.classList.add("blur");
            }
        });



    });


});