'use strict';

addEventListener('DOMContentLoaded', (e) => {

    let cronoMinutes = document.querySelector(".crono__minutes");
    let cronoSeconds = document.querySelector(".crono__seconds");
    let btnStart = document.querySelector(".btn__start");
    let btnStop = document.querySelector(".btn__stop");

    let minutes = 0; let seconds = 0; let time = false;

    /*
    for (let i=0; i < 60; i++) {
        for (let j=0; j < 60; j++) {
            minutes += i;
            seconds += j; 
        }
    }
        */

    let start = () => {
        if(!time) {
            time = setInterval(() => {
                seconds++;
                if(seconds == 60) {
                    minutes++;
                    seconds = 0;
                }
                if(minutes == 60) {
                    clearInterval(time);
                }
                (seconds<10) ? cronoSeconds.innerHTML = "0"+seconds : cronoSeconds.innerHTML = seconds;
                (minutes<10) ? cronoMinutes.innerHTML = "0"+minutes : cronoMinutes.innerHTML = minutes;
                if(minutes>=60) {
                    clearInterval(time);
                    alert("Timpo Limite excedido");
                }
            }, 1000);
        }
    }

    btnStart.addEventListener("click", ()=>{
        start();
    });

    btnStop.addEventListener("click",()=>{
        if(time){
            clearInterval(time);
            time = false;
        }
    });

    //start();


});
