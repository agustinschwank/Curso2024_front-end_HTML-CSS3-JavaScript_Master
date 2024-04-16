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
            <?php for($i=1; $i<=10; $i++) { ?>
            <article class="layout__table">
                <h2 class="table__title">Tabla del <?=$i?></h2>
                <ul class="table__items">
                    <?php for ($j=0; $j<=10; $j++) { ?>
                    <li class="table__item"><?=("{$i} X {$j} = ".$i*$j)?></li>
                    <?php } ?>
                </ul>
            </article>
            <?php } ?>
        </section>
    </div>
</body>
</html>