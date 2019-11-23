<?php
   
   $contenido = file_get_contents("cuadros.json");
    $con = utf8_encode($contenido);
    $datos = json_decode($con, true);
    return($datos);
     
?>