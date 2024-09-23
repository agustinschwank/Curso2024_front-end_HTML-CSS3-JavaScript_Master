'use strict';

window.addEventListener("DOMContentLoaded", () => {

    let btn = document.querySelector(".nav__btn");
    let pageBox = document.querySelector(".layout__pages");
    let listnav = document.querySelector(".layout__list");
    let listItems = document.querySelectorAll(".list__item");
    let pagesItems = document.querySelectorAll(".pages__page");
    
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("nav__btn--active");
        pageBox.classList.toggle("layout__pages--show");
        listnav.classList.toggle("layout__list--show");
    });


    let activatePage = (index) =>{
        pagesItems.forEach((item) => {
            item.classList.remove("pages__page--active");
        });

        pagesItems[index].classList.add("pages__page--active");
    }

    listItems.forEach((item, id) => {
        item.addEventListener("click", ()=>{
            activatePage(id);
        });
    });

});