<?php

$animals = ["Perro", "Gato", "Tortuga", "Elefante", "Tigre"];


?>




<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 12</title>
    
</head>
<body>

    <?php foreach ($animals as $key => $animal) { ?>
        <p>Animal <?=++$key?> : <?=$animal?></p>
    <?php } ?> 



    <script src="./assets/js/main.js" defer></script>
</body>
</html>