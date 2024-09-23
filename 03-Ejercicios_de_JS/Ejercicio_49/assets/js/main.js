'use strict';

window.addEventListener("DOMContentLoaded", ()=>{
    let input = document.querySelector(".form__input");
    let form = document.querySelector(".main__form");
    let list = document.querySelector(".form__list");
    
    const deleteTask = (task) => {
        task.remove();
    }

    const loadList = () => {
        let tasks = JSON.parse(localStorage.getItem("task"));
        if(tasks) {
            tasks.forEach(task => {
                add(task.text, task.completed);
            });
        }
    }

    const saveandUpdate = () => {
        let allTask = document.querySelectorAll(".list__task");
        let newTasks = [];

        allTask.forEach(item => {
            let task = item.querySelector(".task__text");
            let check = item.querySelector(".task__check");

            let taskObj = {
                text: task.innerText,
                completed: check.checked
            };
            
            newTasks.push(taskObj);
        });

        localStorage.setItem("task", JSON.stringify(newTasks));
    }

    const add = (task, complete = false) => {
        if(task.trim() != ""){

            let item = document.createElement("li");
            item.classList.add("list__item");

            item.innerHTML += `
                        <div class="list__task">
                            <input type="checkbox" class="task__check" ${complete ? "checked" : ""} />
                            <p class="task__text">${task}</p>
                        </div>
                        <i class="list__delate fa-solid fa-trash"></i>
                `;

            list.appendChild(item);

            saveandUpdate();
            input.value = "";

            if(complete == true) {
                item.querySelector(".task__text").style.textDecoration = "line-through";
            }
            
            
            let btnDelete = item.querySelector(".list__delate");
            btnDelete.addEventListener("click", ()=>{
                deleteTask(item);
                saveandUpdate();
            });
            

            let checkbox = item.querySelector(".task__check");
            checkbox.addEventListener("change", ()=>{
                checkbox.checked = true;
                item.querySelector(".task__text").style.textDecoration = "line-through";
                saveandUpdate();
            });
            
        }
    }

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        add(input.value);
    });

    loadList();

});