<?php
    phpinfo( );
    $contenido = file_get_contents("empleados.json");
    $con = utf8_encode($contenido);
    $datos = json_decode($con, true);
    $echo $datos;
     
?>