<?php
$marca = 'Ford';
$velocidad = 120;
$stock = true;
$modelos = ['Mustang', 'F-150', 'Explorer', 'Focus', 'Escape'];

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <p>Automovil de Marca: <?= $marca ?> y de velocidad <?php echo($velocidad) ?> km/h</p>
    <p>Hay disponibles en stock: <?=$stock?></p>
    <ul>
        <?php foreach ($modelos as $modelo) {
            echo("<li>{$modelo}</li>");
        }?>
    </ul>
</body>
</html>