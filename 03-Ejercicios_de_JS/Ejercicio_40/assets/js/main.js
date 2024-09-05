'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const stars = document.querySelectorAll(".stars__icon");

    stars.forEach((star, id) => {

        star.addEventListener("mouseover", () => {


            stars.forEach((star) => {
                if(star.classList.contains("stars__icon--active")){
                    star.classList.remove("stars__icon--active");
                }
            });


            for (let i=0; i<= id ; i++) {
                let starActual = stars[i];
                if(!starActual.classList.contains("stars__icon--active")){
                    starActual.classList.add("stars__icon--active");
                }
            }


            //star.classList.add("stars__icon--active");
        });

    });

});