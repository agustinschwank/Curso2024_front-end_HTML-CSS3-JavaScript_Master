'use strict';

window.addEventListener("DOMContentLoaded", ()=>{


    let controlRanger = document.querySelector(".ranger__range");
    let controlNumber = document.querySelector(".ranger__number");
    let mainForm = document.querySelector(".main__form");
    let passwordDom = document.querySelector(".generate__mail");
    let copyPass = document.querySelector(".generate__icon");
    
    //form letter id
    let chekLowerCase = document.querySelector("#lowercase");
    let chekUpperCase = document.querySelector("#uppercase");
    let chekNumber = document.querySelector("#number");
    let chekSimbol = document.querySelector("#simbol");

    let valueRange = 5;

    controlRanger.addEventListener("input", ()=>{
        valueRange = controlRanger.value;
        controlNumber.innerText = valueRange;
    });

    
    //Metodos
    function getLowerCase () { 
        return(String.fromCharCode( (Math.floor((Math.random() * 26))) + 97));
    }

    function getUpperCase () {
        return(String.fromCharCode( (Math.floor((Math.random() * 26))) + 65));
    }

    function getSimbol () {
        return(String.fromCharCode( (Math.floor((Math.random() * 15))) + 33));
    }

    function getNumber () {
        return(String.fromCharCode( (Math.floor((Math.random() * 10))) + 48));
    }


    mainForm.addEventListener("submit", (event)=>{
        event.preventDefault();

        let password = '';

        if(chekLowerCase.checked || chekUpperCase.checked || chekNumber.checked || chekSimbol.checked) {

            let count = 0;
            while(count < valueRange) {

                const setLowerCase = () => {
                    if (chekLowerCase.checked) {
                        password += getLowerCase();
                        count++;
                    }
                }

                const setUpperCase = () => {
                    if (chekUpperCase.checked) {
                        password += getUpperCase();
                        count++;
                    }
                }

                const setNumber = () => {
                    if (chekNumber.checked) {
                        password += getNumber();
                        count++;
                    }
                }
        
                const setSimbol = () => {
                    if (chekSimbol.checked) {
                        password += getSimbol();
                        count++;
                    }
                }

                switch (Math.floor(Math.random()*4)) {
                    case 0: setLowerCase(); break;
                    case 1: setUpperCase(); break;
                    case 2: setNumber(); break;
                    case 3: setSimbol(); break;
                }
            }
        }

        passwordDom.innerText = password;

    });


    copyPass.addEventListener("click", ()=>{

        let passwordCopy = passwordDom.innerText;

        navigator.clipboard.writeText(passwordCopy);

        alert('contraseña copiada');

    });


});