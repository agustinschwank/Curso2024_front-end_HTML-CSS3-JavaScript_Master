'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const btn_input = document.querySelector(".btn__submit");
    const inputValue = document.querySelector(".form__input");
    const listElements = document.querySelector(".layout__listado");
    let listProducts = ["2Kg de Papas", "1Kg de Tomates", "350g de Queso", "2 Paquetes de manteca de 100g", "1 Planta de lechuga"];
    
    

    // Muestra listado
    
    const showList = () =>{
        listElements.replaceChildren();
        let template = '';
        listProducts.forEach((product, index)=>{
            template += `
                <li class="listado__item">
                    <button class="listado__btn" data-key="${index}">X</button>
                    <p class="listado__value">${product}</p>
                </li>
            `;
        });
        listElements.innerHTML = template;
        removeProduct();
    };

    // Remove Element
    const removeProduct = () => {
        let elements = document.querySelectorAll(".listado__item");
        elements.forEach((element) => {
            let btn__element = element.firstElementChild;
            btn__element.addEventListener("click", ()=>{
                let index = parseInt(btn__element.getAttribute("data-key"));
                listProducts.splice(index,1);
                showList();
            });
        });
    };

    // Agrega un nuevo producto a la lista u array
    btn_input.addEventListener("click", ()=>{
        if(inputValue.value.trim() !=  ""){
            listProducts.push(inputValue.value);
            inputValue.value = '';
            showList();
        }
    });
    

    showList();


});