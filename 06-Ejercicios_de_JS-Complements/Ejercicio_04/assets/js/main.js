'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const contador = document.querySelector("#contador");
    const content = document.querySelector("#content");

    let count = 1;

    contador.addEventListener("keydown", ()=>{
        content.innerText = count++;
    });

});