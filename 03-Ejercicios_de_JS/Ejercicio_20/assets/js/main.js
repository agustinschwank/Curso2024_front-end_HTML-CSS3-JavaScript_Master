'use strict';

addEventListener('DOMContentLoaded', () => {

    let day = document.querySelector('.content__date');
    let time = document.querySelector('.content__time');


    //day.innerText = `${fecha.getDate()}/${fecha.getUTCMonth()+1}/${fecha.getFullYear()}`;
    //day.innerText = fecha.toLocaleDateString();

    //time.innerText = setInterval(fecha.toLocaleTimeString(), 1000);

    const date_time = () => {
        let fecha = new Date();
        day.innerText = `${(fecha.getDate()<10)?'0'+fecha.getDate():fecha.getDate()} - ${((fecha.getUTCMonth()+1)<10)?'0'+(fecha.getUTCMonth()+1):(fecha.getUTCMonth()+1)} - ${fecha.getFullYear()}`;
        time.innerText = `${fecha.getHours()}:${fecha.getMinutes()}`;
    }

    date_time();
    setInterval(()=>{
        date_time();
    }, 1000);

});
