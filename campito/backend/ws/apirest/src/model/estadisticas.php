<?php

require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/config/conexionPDO.php";


class Estadistica {

    function __construct(){
        
    }


    //metodos para la base de datos

    public static function TraerTodaDataAlquiler(){
        $conn=ConexionPDO::getConexion();
        $sql = 'select * from alquiler';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->execute();
	    $alquileres = $dbQuery->fetchAll(PDO::FETCH_OBJ);
	    $conn = null;
        return json_encode($alquileres);
    }

     public static function TraerTodaDataVenta(){
        $conn=ConexionPDO::getConexion();
        $sql = 'select * from venta';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->execute();
	    $ventas = $dbQuery->fetchAll(PDO::FETCH_OBJ);
	    $conn = null;
        return json_encode($ventas);
    }

}//fin clase


?>