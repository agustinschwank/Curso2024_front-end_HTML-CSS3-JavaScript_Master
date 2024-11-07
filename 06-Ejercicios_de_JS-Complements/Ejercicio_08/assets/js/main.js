'use strict';




//Function Guardar
let saveMovie = (title) => {

    // Generar Fecha de registro
    let date = new Date();
    date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    
    //Generar Puentuacion
    let punctuation = Math.floor(Math.random() * 100) + 1;

    // Objeto
    let newFilm = {
        title,
        date,
        punctuation
    }

    // Registrar Pelicula en Local Storage
    if(typeof(Storage) !== "undefined") {
        let filmList = localStorage.getItem("Films") ? JSON.parse(localStorage.getItem("Films")) : [];
        filmList.push(newFilm);
        localStorage.setItem("Films", JSON.stringify(filmList));
    }

    getMovie();
   
}

//Function Mostrar Films
let getMovie = () => {
    const list = document.querySelector("#list"); 


    list.innerHTML = "";

    if(localStorage.getItem("Films") != null) {
        let filmview = JSON.parse(localStorage.getItem("Films"));
        
        filmview.forEach((element, index) => {
            let article = document.createElement("blockquote");
            article.innerHTML = `
                            <p><strong>Titulo : </strong>${element.title}</p>
                            <p><strong>Cargada : </strong>${element.date}</p>
                            <p><strong>Titulo : </strong>${element.punctuation}</p>
                            <br/>
                        `;

            // Crear button y vindear elemento
            let button = document.createElement("button");
            button.textContent = "Eliminar";
            button.addEventListener("click", () => deleteMovie(index));
            
            article.appendChild(button);

            list.appendChild(article);
        });
        
    }
}

//DElete Element
const deleteMovie = (position) => {
    let filmSave = JSON.parse(localStorage.getItem("Films"));
    filmSave.splice(position, 1);
    localStorage.setItem("Films", JSON.stringify(filmSave));
    getMovie();
}



window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if(form.firstElementChild.value.trim().length > 0) {
            saveMovie(form.firstElementChild.value.trim());
            form.firstElementChild.value = ""; 
        }

    });

    getMovie();

   
});