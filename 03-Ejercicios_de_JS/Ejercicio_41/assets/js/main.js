'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const articles = document.querySelectorAll(".articles___article");

    let show = () => {
        const winHeight = window.innerHeight;
        articles.forEach(article => {
            const articleHeight = article.getBoundingClientRect().top;
            if(articleHeight < winHeight ) {
                article.classList.add("articles___article--show");
            } else {
                article.classList.remove("articles___article--show");
            }
        });
    }

    //show();

    window.addEventListener("scroll", show);

});