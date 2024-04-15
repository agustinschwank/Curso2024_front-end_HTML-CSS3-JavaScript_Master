<?php

$velocidad = 125;
$limit = 60;

if($velocidad > $limit) {
    echo("<p>Su velocidad actual es de {$velocidad} y el limite es {$limit}. Redusca velocidad</p>");
} else {
    echo("<p>Su velocidad actual es de {$velocidad} y el limite es {$limit}. Continua Asi</p>");
}

?>