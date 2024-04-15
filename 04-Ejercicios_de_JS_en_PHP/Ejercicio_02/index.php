<?php

$marca = 'Ford';
$velocidad = 120;
$stock = true;
$modelos = ['Mustang', 'F-150', 'Explorer', 'Focus', 'Escape'];

echo("<p>Automoviles de marca: {$marca} y de velocidad {$velocidad} km/h</p>
        <p>Hay disponibles en stock: {$stock}</p>");

echo("<ul>");
foreach($modelos as $modelo) {
    echo("<li>{$modelo}</li>");
}

echo("</ul>");

?>