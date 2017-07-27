<?php

require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/config/conexionPDO.php";

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
  

    public static function traerPropiedadId($id){
        $conn=ConexionPDO::getConexion();
        $sql = 'select * from propiedad where id_propiedad=:id';
        $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(':id', $id);
	    $dbQuery->execute();
	    $propiedades = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	    $conn = null;
    
        return json_encode($propiedades);
    }




    public static function insertarAlquiler($id_propiedad, $correo_due, $correo_cli, $precio, $comision, $fecha, $dias,$id_sucursal){
        $conn=ConexionPDO::getConexion();
        $sql = 'INSERT INTO alquiler(correo_due, correo_cli, precio, comision, fecha, dias, id_propiedad, id_sucursal)
                 VALUES (?,?,?,?,?,?,?,?)';
        $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1, $correo_due);
        $dbQuery->bindParam(2, $correo_cli);
        $dbQuery->bindParam(3, $precio);
        $dbQuery->bindParam(4, $comision);
        $dbQuery->bindParam(5, $fecha);
        $dbQuery->bindParam(6, $dias);
        $dbQuery->bindParam(7, $id_propiedad);
        $dbQuery->bindParam(8, $id_sucursal);
	    $dbQuery->execute();
	    $propiedades = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	    $conn = null;
    }

    public static function insertarCompra($id_propiedad, $correo_due, $correo_cli, $precio, $comision, $fecha, $id_sucursal){
        $conn=ConexionPDO::getConexion();
        $sql1 = 'INSERT INTO venta(correo_due, correo_cli, precio, comision, fecha, id_propiedad, id_sucursal) VALUES (?,?,?,?,?,?,?)';
        $dbQuery = $conn->prepare($sql1);
        $dbQuery->bindParam(1, $correo_due);
        $dbQuery->bindParam(2, $correo_cli);
        $dbQuery->bindParam(3, $precio);
        $dbQuery->bindParam(4, $comision);
        $dbQuery->bindParam(5, $fecha);
        $dbQuery->bindParam(6, $id_propiedad);
        $dbQuery->bindParam(7, $id_sucursal);
        $dbQuery->execute();
	    $propiedades = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
       
        $sql2 = 'UPDATE propiedad set estado = "b" where id_propiedad=:id_propiedad';        
        $dbQuery = $conn->prepare($sql2);
        $dbQuery->bindParam(':id_propiedad', $id_propiedad);
	    $dbQuery->execute();
        
	    $conn = null;
    }

    
    public static function subirFotos($fileUpload, $dni){
        try{
    	     $filePath = $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/frontend/aplicacion/src/assets/fotos/propiedades/";
             
             //

			 //$fileUpload['image']['tmp_name'];

        if (isset($fileUpload)) {
            $originalName = $fileUpload['image']['name'];
            $ext = '.'.pathinfo($originalName, PATHINFO_EXTENSION);
            $generatedName = $fileUpload['image']['name'];
            $filePath = $filePath.$dni.'_'.$generatedName;

            if (move_uploaded_file($fileUpload['image']['tmp_name'], $filePath)) 
            {
                echo json_encode(array(
                    'status'        => true,
                    'originalName'  => $originalName,
                    'generatedName' => $generatedName
                ));
            }
			
        }
		
		 $fileUpload;//'{ "notice": {"text": "foto agregada"}';

	} catch(PDOException $e){
		return '{ "error": {"text": ' .$e->getMessage().'}';
	}
    }

}  





?>