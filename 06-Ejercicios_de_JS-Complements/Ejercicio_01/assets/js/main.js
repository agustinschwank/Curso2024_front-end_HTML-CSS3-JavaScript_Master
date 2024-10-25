'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("#btn");
    const lights = document.querySelectorAll(".light");
    let index = 0;
    lights[index].classList.add("light--active");


    btn.addEventListener("click", () => {
        
        // Apagar Luces
        lights.forEach(light => light.classList.remove("light--active"));

        // Encender Luz
        index++;
        if(index > 2 ){
            index = 0;
        }
        lights[index].classList.add("light--active");
        
        
    });


});