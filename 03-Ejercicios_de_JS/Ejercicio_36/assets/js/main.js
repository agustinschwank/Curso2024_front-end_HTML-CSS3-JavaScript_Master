'use strict';

addEventListener("DOMContentLoaded", () => {

    let btn = document.querySelector(".main__btn");
    let notes = document.querySelector(".main__notes");


    btn.addEventListener("click", (event)=>{
            createNote();
    });

    getNotes();

    function createNote(body = "", title ="") {
        let note = document.createElement("article");
        note.classList.add("notes__note");
        note.innerHTML += `
                        <header class="note__header">
                            <input class="header__input" type="text" value="${title}"/>
                            <i class="note__icon fa-solid fa-trash"></i>
                        </header>
                        <textarea class="note__body" name="body">${body}</textarea>
                        `;

        //Variables
        let textarea = note.querySelector(".note__body");
        let input = note.querySelector(".header__input");
        let btnTrash = note.querySelector(".note__icon");


        // Guardar Notas
        input.addEventListener("input", ()=>{
            upDate();
        });

        textarea.addEventListener("input", ()=>{
            upDate();
        });


        //Remover notas
        btnTrash.addEventListener("click", ()=>{
            note.remove();
            upDate();
        });
        

        // Agregar Notas
        notes.appendChild(note);
        setTimeout(()=>{
            note.classList.add('note__visible')
        }, 10);
    }


    
    function upDate() {
            let notesObj = [];
            let notesDom = document.querySelectorAll(".notes__note");

            notesDom.forEach((noteDom) => {
                let noteInput = noteDom.querySelector(".header__input");
                let noteText = noteDom.querySelector(".note__body");
                let noteObj = {
                    "title": noteInput.value,
                    "body": noteText.value,
                }

                if(noteObj.title.trim() != "" || noteObj.body.trim() !="") {
                    notesObj.push(noteObj);
                }
            });

            //Guardar en Navegador
            localStorage.setItem("notes", JSON.stringify(notesObj));
    }


    function getNotes() {
        let notesStorage = JSON.parse(localStorage.getItem("notes"));
        
        if(notesStorage) {
            notesStorage.forEach(noteStorage => {
                createNote(noteStorage.body, noteStorage.title);
            });
        } 
    }
    

});