<?php
$tables = '';
for($i=1; $i<=10; $i++) {
    $table = '<article class="layout__table">
                <h2 class="table__title">Tabla del '.$i.'</h2>
                <ul class="table__items">';
    $list = '';
    for ($j=0; $j<=10; $j++) {
        $list .= '<li class="table__item">'.$i.' X '.$j.' = '.$i*$j.'</li>';
    }
    $table .= $list.'</ul></article>';
    $tables .= $table; 
}
?>