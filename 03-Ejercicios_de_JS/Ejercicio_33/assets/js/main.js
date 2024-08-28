'use strict';

addEventListener("DOMContentLoaded", () => {

    const countCVU = document.querySelector(".header__cbu");
    const countMoney = document.querySelector(".header__money");
    const itemIcon = document.querySelectorAll(".item__icon");
    const itemTitle = document.querySelectorAll(".item__title");
    const itemDate = document.querySelectorAll(".item__date");
    const itemDiscount = document.querySelectorAll(".item__discount");
    const itemTotal = document.querySelectorAll(".item__total");
    const bgLoad = document.querySelectorAll(".bg__load");
    const bgLoadtext = document.querySelectorAll(".bg__load-text");

    (setTimeout(()=>{
        countCVU.innerHTML = "CVU05 18436 1111 75130 00421 CD1F3R";
        countMoney.innerHTML = "$ 5000";

        itemIcon.forEach((icon)=>{
            icon.innerHTML = `<i class="fa-solid fa-address-card"></i>`;
        });

        itemTitle.forEach((title)=>{
            title.innerHTML = "Empresa";
        });

        itemDate.forEach((date)=>{
            date.innerHTML = "23/08/2024";
        });

        itemDiscount.forEach((discount)=>{
            discount.innerHTML = "$ -400";
        });

        itemTotal.forEach((total)=>{
            total.innerHTML = "$ 5000";
        });
        
        bgLoad.forEach((load)=>{
            load.classList.remove("bg__load");
        });

        bgLoadtext.forEach((loadText)=>{
            loadText.classList.remove("bg__load-text");
        });

    }, 2000));

});