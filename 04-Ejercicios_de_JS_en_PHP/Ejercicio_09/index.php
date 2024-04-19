<?php

function sumAll($valores, &$sum, &$listado) {
    $sum = 0;
    $listado = '';
    foreach($valores as $key => $valor){
        $sum += $valor;
        $listado .= $valor; 
        if($key !== count($valores) - 1) {
            $listado .= ' - '; 
        }
    }
}

sumAll([25,15,5,45,78], $num, $list);

?>







<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 09</title>
    
</head>
<body>

    <h2 id="resultado">Resultado de la suma: <?=$num?></h2>
    <p id="numeros">La lista de numeros es: <?=$list?></p>

    <script src="./assets/js/main.js" defer></script>
</body>
</html>