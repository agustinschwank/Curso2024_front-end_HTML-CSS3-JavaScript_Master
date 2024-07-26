'use strict';

addEventListener('DOMContentLoaded', () => {

    // Seleccion de Elementos
    let articles = document.querySelector('.layout__articles');
    let title = document.querySelector('#title');
    let subtitle = document.querySelector('#subtitle');
    let description = document.querySelector('#description');
    let form = document.querySelector('.form__create');
    let new_articles = JSON.parse(localStorage.getItem("Articulos")) || [];

    function createArticle (){
        form.addEventListener("submit", (newarticle)=>{
            newarticle.preventDefault();
            if (title.value != '' && subtitle.value !='' && description.value !='') {
                let article = {
                    titulo: title.value,
                    subtitulo: subtitle.value,
                    descripcion: description.value
                }
                new_articles.push(article);
                localStorage.setItem("Articulos", JSON.stringify(new_articles));
                showArticles();
            } else {
                alert ("Campos Vacios");
            }
            form.reset();
        });
    };

    function templateArticle(article) {
        return (`
            <article class="layout__card">
                <header class="card__header">
                    <p class="header__author">${article.titulo}</p>
                </header>
                <div class="card__content">
                    <h2 class="content__title">${article.subtitulo}</h2>
                    <p class="content__description">${article.descripcion}</p>
                    <button class="content__btn">Cambiar estilos</button>
                </div>
            </article>
        `);
    }

    function showArticles () {
        articles.innerHTML = '';
        new_articles.reverse();
        if(new_articles.length > 0) {
            new_articles.forEach(articulo => {
                articles.innerHTML += templateArticle(articulo);
            });
        }
    }

    
    createArticle();
    showArticles();


});
