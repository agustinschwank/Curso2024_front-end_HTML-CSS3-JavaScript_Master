'use strict';

addEventListener('DOMContentLoaded', () => {

    let inventaryBoxes = document.querySelector('.inventary__boxes');
    let boxes = document.querySelectorAll('.boxs__box');
    let storageRack = document.querySelectorAll('.storage__rack');

    // Agregar id
    boxes.forEach((box, index) =>{
        box.setAttribute("id", 'box_'+index);

        box.addEventListener("dragstart", (event)=>{
            event.dataTransfer.setData("id", event.target.id)
        });
    });

    //drop
    let isokey = null;
    storageRack.forEach((boxRack, index) => {

        boxRack.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        boxRack.addEventListener("drop", (event)=>{
            event.preventDefault();
            let cajaID = event.dataTransfer.getData("id");

            if(cajaID && cajaID != '') {
                let rack = document.querySelector("#"+cajaID);
                //event.target.appendChild(rack);

                if(boxRack.lastChild == null) {
                    event.target.appendChild(rack);
                    rack.style.boxShadow = '0px 0px 30px 0px blue inset';
                } else {
                    alert('Lugar Ocupado');
                }

                storageRack.forEach(boxRack => {
                    if(boxRack.lastChild == null) {
                        boxRack.style.boxShadow = '0px 0px 10px 10px pink inset';
                    }
                });

                //Modo 1
                /*
                if(inventaryBoxes.innerHTML.trim() == '') {
                    alert('finde cajacs');
                }*/

                //Modo 2
                if(inventaryBoxes.childElementCount == 0) {
                    if(isokey == null) {
                        isokey = true;
                        alert('Las cajas estan Acomodadas');
                    }
                }

            }
            
        });
    });



});
