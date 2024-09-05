'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".layout__nav");

    window.addEventListener("scroll", ()=> {
        let scroll = document.documentElement.scrollTop;
        if(scroll > 100){
            nav.classList.add("layout__nav--fixed");
        } else {
            nav.classList.remove("layout__nav--fixed");
        }
    });
    

});