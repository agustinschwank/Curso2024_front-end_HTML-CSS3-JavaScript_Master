'use strict';

window.addEventListener("DOMContentLoaded", () => {

    let audios = document.querySelectorAll(".sounds__audio");
    let btnPlay = document.querySelectorAll(".sounds__btn");

    let start = () => {
        btnPlay.forEach((play) => {
            play.addEventListener("click", ()=>{
                let dataID = play.getAttribute("data-audio");
                let audio = document.querySelector("#"+dataID);
                stop();
                audio.play();
            });
        });
    }

    let stop = () => {
        audios.forEach((audio) =>{
            audio.pause();
            audio.currentTime = 0;
        });
    }

    start();
    

});