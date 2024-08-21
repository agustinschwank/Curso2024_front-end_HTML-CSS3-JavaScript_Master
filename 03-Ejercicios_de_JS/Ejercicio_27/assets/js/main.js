'use strict';

addEventListener("DOMContentLoaded", () => {

    const articleLeft = document.querySelector('.main__article--left');
    const articleRight = document.querySelector('.main__article--right');

    articleLeft.addEventListener("mouseenter", ()=>{
        articleLeft.classList.add('width-70');
        articleRight.classList.add('width-50');
    });

    articleLeft.addEventListener("mouseleave", ()=>{
        articleLeft.classList.remove('width-70');
        articleRight.classList.remove('width-50');
    });


    articleRight.addEventListener("mouseenter", ()=>{
        articleRight.classList.add('width-70');
        articleLeft.classList.add('width-50');
    });

    articleRight.addEventListener("mouseleave", ()=>{
        articleRight.classList.remove('width-70');
        articleLeft.classList.remove('width-50');
    });


    
    

});