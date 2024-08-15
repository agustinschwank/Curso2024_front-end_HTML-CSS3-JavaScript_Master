'use strict';

addEventListener('DOMContentLoaded', () => {

    let input = document.querySelector('.main__search');
    let text = document.querySelector('.main__text');

    input.addEventListener("keyup", (e)=>{
       let search = input.value;

       if(search.trim() != '') {
        let expresionRegular = new RegExp(search, "gi");
        text.innerHTML = text.textContent.replace(expresionRegular, "<span class='text__search'>$&</span>");
       }
        
    });

});
