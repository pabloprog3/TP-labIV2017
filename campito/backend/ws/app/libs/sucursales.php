<?php

require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/conexionPDO.php";

class Sucursales
{

 public static function traerTodos(){

    $conn=ConexionPDO::getConexion();
    $sql = 'select * from sucursal';
    $dbQuery = $conn->prepare($sql);
	$dbQuery->execute();
	$sucursales = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	$conn = null;
    
    return json_encode($sucursales);
 } 

 public static function traerTodosPropiedades(){
     $conn=ConexionPDO::getConexion();
    $sql = 'select * from propiedad where estado="a"';
    $dbQuery = $conn->prepare($sql);
	$dbQuery->execute();
	$propiedades = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	$conn = null;
    
    return json_encode($propiedades);
 }
  
}

   





?>