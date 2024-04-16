<?php

if(isset($_GET['sueldo'])){
    $sueldo = $_GET['sueldo'];
    if (is_numeric($sueldo)) {
        switch (true) {
            case $sueldo > 0 && $sueldo <= 500 : echo('Su sueldo es de $_'.$sueldo.', por lo que es bajo'); break;
            case $sueldo > 500 && $sueldo <= 1000 : echo('Su sueldo es de $_'.$sueldo.', por lo que es medio'); break;
            case $sueldo > 1000 && $sueldo <= 2000 : echo('Su sueldo es de $_'.$sueldo.', por lo que es alto'); break;
            case $sueldo >= 2000 : echo('Su sueldo es de $_'.$sueldo.', por lo que es elevado'); break;
            default: echo('Error!, No tiene ingreso'); break;
        }
    }
}

?>

<br/> <br/>

<form action="" method="GET">
    <label for="sueldo">Ingrese un sueldo</label>
    <input type="number" id="sueldo" name="sueldo" placeholder="Ingrese un sueldo"/>
    <input type="submit" value="ENVIAR"/>
</form>