<?php

require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/conexionPDO.php";
require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/claseBasePersona.php";

class Cliente extends Persona{

     function __construct(){
        parent::__construct($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo, $_fecha_nac);
    }

    //metodos para la base de datos
    public static function TraerTodos(){
        $conn=ConexionPDO::getConexion();
        $sql = 'call gestionar_clientes("traer_todos", 0,"","","","","","",null)';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->execute();
	    $clientes = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	    $conn = null;
        return json_encode($clientes);
    }

    public static function TraerPorId($id){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql='call gestionar_clientes("traer_id", ?, "", "", "", "", "", "",null)';
	    $dbQuery = $conn->prepare($sql);
	    $dbQuery->bindParam(1,$id,PDO::PARAM_INT);
        $dbQuery->execute();
        
        $cliente = $dbQuery->fetchAll(PDO::FETCH_ASSOC);

	    $conn = null;
        return json_encode($cliente);
    }

    public static function Insertar($nombre, $apellido, $dni, $passw, $telefono, $correo, $fecha_nac)
    {
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql='call gestionar_clientes("insertar",null, ?, ?, ?, ?, ?, ?, ?)';
	    $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$nombre,PDO::PARAM_STR);
        $dbQuery->bindParam(2,$apellido,PDO::PARAM_STR);
        $dbQuery->bindParam(3,$dni,PDO::PARAM_STR);
        $dbQuery->bindParam(4,$passw,PDO::PARAM_STR);
        $dbQuery->bindParam(5,$telefono,PDO::PARAM_STR);
        $dbQuery->bindParam(6,$correo,PDO::PARAM_STR);
        $dbQuery->bindParam(7,$fecha_nac,PDO::PARAM_STR);
        $dbQuery->execute();
        
        $conn = null;
    }

    public static function Eliminar($id){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $sql='call gestionar_clientes("eliminar",?, "", "", "", "", "", "",null)';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->bindParam(1,$id,PDO::PARAM_INT);
   
        $dbQuery->execute();

        $conn=null;
    }

    public static function Actualizar($id, $nombre, $apellido, $dni, $passw, $telefono, $correo, $fecha_nac){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $sql='call gestionar_clientes("actualizar",?,?,?,?,?,?,?,?)';
        $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$id,PDO::PARAM_INT);
	    $dbQuery->bindParam(2,$nombre,PDO::PARAM_STR);
        $dbQuery->bindParam(3,$apellido,PDO::PARAM_STR);
        $dbQuery->bindParam(4,$dni,PDO::PARAM_STR);
        $dbQuery->bindParam(5,$passw,PDO::PARAM_STR);
        $dbQuery->bindParam(6,$telefono,PDO::PARAM_STR);
        $dbQuery->bindParam(7,$correo,PDO::PARAM_STR);
        $dbQuery->bindParam(8,$fecha_nac,PDO::PARAM_STR);
        $dbQuery->execute();

        $conn=null;
    }

}

?>