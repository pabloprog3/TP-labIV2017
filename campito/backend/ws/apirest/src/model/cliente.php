<?php

require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/config/conexionPDO.php";
require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/claseBasePersona.php";

class Cliente extends Persona{

    function __construct(){
        
    }

     function __construct1($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo){
        parent::__construct($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo);//, $_categoria);
    }


    //metodos para la base de datos

    public static function TraerTodos(){
        $conn=ConexionPDO::getConexion();
        $sql = 'select * from cliente where estado="a"';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->execute();
	    $clientes = $dbQuery->fetchAll(PDO::FETCH_OBJ);
	    $conn = null;
        return json_encode($clientes);
    }

    public static function TraerPorId($correo){
        //por parametro le paso el correo
        //$dbPDO = new ConexionPDO();
	    //$conn = $dbPDO->getConexion();
        $conn=ConexionPDO::getConexion();
        $sql='select * from cliente where correo=:correo';
	    $dbQuery = $conn->prepare($sql);
	    $dbQuery->bindParam(':correo',$correo);
        $dbQuery->execute();
        
        $cliente = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	    $conn = null;
        return json_encode($cliente);
    }

    public static function Insertar($nombre, $apellido, $dni, $passw, $telefono, $correo)
    {
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql='INSERT INTO cliente(nombre, apellido, dni, passw, telefono, correo)
			VALUES(:nombre, :apellido, :dni, :passw, :telefono, :correo);';
	    $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(':nombre',$nombre);
        $dbQuery->bindParam(':apellido',$apellido);
        $dbQuery->bindParam(':dni',$dni);
        $dbQuery->bindParam(':passw',$passw);
        $dbQuery->bindParam(':telefono',$telefono);
        $dbQuery->bindParam(':correo',$correo);

        $dbQuery->execute();
        
        $conn = null;
    }

    public static function Eliminar($id){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $sql='update cliente set estado = "b" where correo = ?';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->bindParam(1,$id);
   
        $dbQuery->execute();

        $conn=null;
    }

    public static function Actualizar($nombre, $apellido, $dni, $passw, $telefono, $correo){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $sql='update cliente set nombre=:nombre, apellido=:apellido, dni=:dni, passw=:passw, telefono=:telefono, correo=:correo where correo=:correo';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->bindParam(':nombre',$nombre);
        $dbQuery->bindParam(':apellido',$apellido);
        $dbQuery->bindParam(':dni',$dni);
        $dbQuery->bindParam(':passw',$passw);
        $dbQuery->bindParam(':telefono',$telefono);
        $dbQuery->bindParam(':correo',$correo);
        $dbQuery->execute();

        $conn=null;
    }

     public function verificarLogin($correo, $passw){

    }

}//fin clase

?>