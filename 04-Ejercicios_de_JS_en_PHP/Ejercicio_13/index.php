<?php

$consecionario = [
        [
            "marca" => "Ford",
            "modelo" => ["F-100", "F-150", "RANGER"]
        ],
        [
            "marca" => "Tesla",
            "modelo" => ["Electric 1", "EV-150", "FLOW ELECTRIC"]
        ],
        [
            "marca" => "General Motor",
            "modelo" => ["GM1", "GM33", "Virbro Electric"]
        ]
    ];


function mostrar ($datos) {
    foreach ($datos as $dato) {
        echo ("
                <h1>Marca: <b style='color:red;'>{$dato['marca']}</b> </h1>
                <ol>
                ");
        foreach ($dato['modelo'] as $modelo) {
            echo ("<li>{$modelo}</li>");
        }
        echo("</ol>");
    }
}


?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 13</title>
</head>
<body>
    <section>
        <?= mostrar($consecionario) ?>
    </section>
</body>
</html>