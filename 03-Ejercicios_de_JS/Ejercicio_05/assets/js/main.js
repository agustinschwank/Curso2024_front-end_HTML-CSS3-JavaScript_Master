'use strict';

const seccion = document.querySelector(".layout__section");

for(let i=1; i<=10; i++) {
    seccion.innerHTML += `
    <article class="layout__table">
        <h2 class="table__title">Tabla del ${i}</h2>
        <ul class="table__items" data-id=${i}></ul>
    </article>`;

    
    for (let j=0; j<=10; j++) {
        let list = document.querySelectorAll(".table__items");

        list.forEach(list =>{
            let id = parseInt(list.getAttribute("data-id"));
            if(id === i) {
                list.innerHTML += `<li class="table__item">${i} X ${j} = ${i*j}</li>`;
            }
        });
    };
}