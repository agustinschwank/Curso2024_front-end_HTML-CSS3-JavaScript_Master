'use strict';

addEventListener('DOMContentLoaded', () => {

    

    let consecionario = [
        {
            marca: "Ford",
            modelo: ["F-100", "F-150", "RANGER"]
        },
        {
            marca: "Tesla",
            modelo: ["Electric 1", "EV-150", "FLOW ELECTRIC"]
        },
        {
            marca: "General Motor",
            modelo: ["GM1", "GM33", "Virbro Electric"]
        }
    ];

   function mostrar (dates) {

        let list = document.querySelector("#listcar");

        dates.forEach((element) => {
            let tempLIST = `<h1>Marca: <b style="color:red;">${element.marca}</b></h1>`;
            tempLIST += `<ol>`;
            element.modelo.forEach(model => {
                tempLIST += `<li>${model}</li>`;
            });
            tempLIST += `</ol>`;
            list.innerHTML += tempLIST;
        });
        console.log(list);
    };


    mostrar(consecionario);

});
