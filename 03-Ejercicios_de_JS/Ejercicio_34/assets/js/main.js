'use strict';

addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector(".form__input");
    const form = document.querySelector(".main__form");
    const menssages = document.querySelector(".main__menssages");
    const layMain = document.querySelector(".layout__main");
    const loadControl = document.querySelector(".layout__loader");

    

    let sendMenssage = (event) => {
        event.preventDefault();
        let menssage = input.value;
        if(menssage.trim() != '') {
            menssages.innerHTML += `
                <div class="menssages__menssage">
                    <p class="menssage__user">Agustin Schwank</p>
                    <p class="menssage__text">${menssage}</p>
                </div>
            `;
        }
        input.value = "";
        menssages.scrollTop = menssages.scrollHeight;
    }

    setTimeout(()=>{
        loadControl.style.display = "none";
        layMain.style.display = "flex";
        form.addEventListener("submit", sendMenssage);
    },2000);


    

});