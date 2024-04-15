<?php

$nombre = 'Camila';
$apellido = 'Gonzales';
$edad = 18;
$pais = 'Argentina';
$conocimientos = ['HTML', 'CSS3', 'JavaScript', 'PHP', 'REACT'];

/* Anteriores a php 8.2 si se podia utilizar ${variable}, a partir de 8.2 esto quedo obsoleto*/

echo ("<h1>Ejecicio 1</h1>
    <h2>Datos Originales</h2>
    <p>Nombre: {$nombre}</p>
    <p>Apellido: {$apellido}</p>
    <p>Edad: {$edad}</p>
    <p>Pais: {$nombre}</p>
    <p>Conocimientos: {$conocimientos[0]} - {$conocimientos[1]} - {$conocimientos[2]} - {$conocimientos[3]} - {$conocimientos[4]}</p>
    ");

$edad = 25;
array_push($conocimientos, 'Node Js');

echo ("<h1>Ejecicio 1</h1>
    <h2>Datos Originales</h2>
    <p>Nombre: {$nombre}</p>
    <p>Apellido: {$apellido}</p>
    <p>Edad: {$edad}</p>
    <p>Pais: {$nombre}</p>
    <p>Conocimientos: {$conocimientos[0]} - {$conocimientos[1]} - {$conocimientos[2]} - {$conocimientos[3]} - {$conocimientos[4]} - {$conocimientos[5]}</p>
    ");


?>