'use strict';

window.addEventListener("DOMContentLoaded", () => {

    let input = document.querySelector(".search__input");
    let btn = document.querySelector(".search__btn");
    let container = document.querySelector(".main__users");

    const USERS_URI = "https://reqres.in/api/users";

    const getUsers = () => {
        fetch(USERS_URI).then(response => response.json())
                        .then(response => {
                            const users = response.data;
                            //console.log(users);
                            users.forEach(user => {
                                container.innerHTML += `
                                                        <article class="users__user">
                                                            <div class="user__container--img">
                                                                <img class="user__img" src="${user.avatar}" title="avatar de ${user.first_name}" alt="user__profile"/>
                                                            </div>
                                                            <div class="user__content">
                                                                <p class="user__name">${user.first_name} ${user.last_name}</p>
                                                                <p class="user__email">${user.email}</p>
                                                            </div>
                                                        </article>
                                                    `;
                            });
                        })
                        .catch(error => console.log(error));
    }



    const userSearch = (search) => {
        const users = document.querySelectorAll(".users__user");
        //console.log(users);
        
        users.forEach(user => {
            let infoUser = user.innerText.toLowerCase();

            if(infoUser.includes(search.toLowerCase() || search.trim() == "")){
                user.classList.remove("noview");
            } else {
                user.classList.add("noview");
            }

        });
    }

    
    // Users List
    getUsers();


    //User Search
    input.addEventListener("input", () => {
        userSearch(input.value);
    });

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        userSearch(input.value);
    });




});