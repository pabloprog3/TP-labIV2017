<?php

require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/conexionPDO.php";
require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/claseBasePersona.php";

class Cliente extends Persona{

    function __construct(){
        
    }

     function __construct1($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo, $_fecha_nac){
        parent::__construct($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo, $_fecha_nac);//, $_categoria);
    }


    //metodos para la base de datos

    public static function TraerTodos(){
        $conn=ConexionPDO::getConexion();
        $sql = 'select * from cliente where estado="a"';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->execute();
	    $clientes = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	    $conn = null;
        return json_encode($clientes);
    }

    public static function TraerPorId($correo){
        //por parametro le paso el correo
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql='select * from cliente where correo=?';
	    $dbQuery = $conn->prepare($sql);
	    $dbQuery->bindParam(1,$correo,PDO::PARAM_STR);
        $dbQuery->execute();
        
        $cliente = $dbQuery->fetchAll(PDO::FETCH_ASSOC);

	    $conn = null;
        return json_encode($cliente);
    }

    public static function Insertar($nombre, $apellido, $dni, $passw, $telefono, $correo, $fecha_nac, $categoria)
    {
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql='insert into cliente(nombre, apelldio, dni, passw, telefono, correo, fecha_nac, categoria)
			values(?, ?, ?, ?, ?, ?, ?, ?);';
	    $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$nombre,PDO::PARAM_STR);
        $dbQuery->bindParam(2,$apellido,PDO::PARAM_STR);
        $dbQuery->bindParam(3,$dni,PDO::PARAM_STR);
        $dbQuery->bindParam(4,$passw,PDO::PARAM_STR);
        $dbQuery->bindParam(5,$telefono,PDO::PARAM_STR);
        $dbQuery->bindParam(6,$correo,PDO::PARAM_STR);
        $dbQuery->bindParam(7,$fecha_nac);
        $dbQuery->bindParam(8,$categoria,PDO::PARAM_STR);
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

     public function verificarLogin($correo, $passw){

    }

}//fin clase

?>