'use strict';

addEventListener('DOMContentLoaded', () => {

    const dates = document.querySelector("#dates");

    let altura = window.innerHeight;
    let ancho = window.innerWidth;
    let url = window.location.href;
    
    dates.innerHTML = `<table border="1">
                            <tr>
                                <th> Altura de pantalla </th>
                                <td> ${altura} px</td>
                            </tr>
                            <tr>
                                <th> Anchura de pantalla </th>
                                <td> ${ancho} px</td>
                            </tr>
                        </table>
                        <br/>
                        <p>Url de la pagina actual: <strong>${url}</strong></p>
                        `;

    window.open("https://misitio.com", "_blank")
});
