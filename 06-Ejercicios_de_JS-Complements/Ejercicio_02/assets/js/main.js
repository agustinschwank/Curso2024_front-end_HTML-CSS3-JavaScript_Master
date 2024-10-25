'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const btn_input = document.querySelector(".btn__submit");
    let listElements = document.querySelector(".layout__listado");
    
    btn_input.addEventListener("click", ()=>{
        let input = document.querySelector(".form__input");

        if(input.value.trim() != ""){

            let li = document.createElement("li");
            li.setAttribute("class", "listado__item");

            let btn = document.createElement("button");
            btn.setAttribute("class", "listado__btn");
            btn.innerText= "X";

            let p = document.createElement("p");
            p.setAttribute("class", "listado__value");
            p.innerText = input.value;
            
            li.appendChild(btn);
            li.appendChild(p);
            
            listElements.appendChild(li);
            

            btn.addEventListener("click", ()=>{
                li.remove();
            });

            input.value = "";
            
        };

    });
    

});