<?php 

if(file_exists('./php/code.php')) {
    require_once ('./php/code.php');
} else {
    echo('Falta un archivo critico: <b>code.php</b>');
    die();
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 05</title>
    <link type="text/css" rel="stylesheet" href="./assets/css/styles.css"/>
</head>
<body>
    <div class="layout">
        <header class="layout__header">
            <h1 class="header__title">Ejercicio 05 • Tablas de Multiplicar</h1>
        </header>
        <section class="layout__section">
            <?=$tables?>
        </section>
    </div>
</body>
</html>