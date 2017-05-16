<?php

require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/conexionPDO.php";
require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/claseBasePersona.php";


class Empleado extends Persona
{
    private $id_sucursal=null;
    private $tipo_empleado=null;
    private $foto=null;
    private $sueldo=null;

    function __construct($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo, $_fecha_nac, $_id_sucursal, $_tipo_empleado, $_foto, $_sueldo)
    {
        parent::__construct($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo, $_fecha_nac);
        $this->id_sucursal = $_id_sucursal;
        $this->tipo_empleado = $_tipo_empleado;
        $this->foto = $_foto;
        $this->sueldo = $_sueldo;
    }


    //metodos para la base de datos

    public static function TraerTodos(){
        $conn=ConexionPDO::getConexion();
        $sql = 'call gestionar_empleados("traer_todos",null, null, "","","","","",null,null,"","","")';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->execute();
	    $empleados = $dbQuery->fetchAll(PDO::FETCH_ASSOC); 

	    $conn = null;
        return json_encode($empleados);
    }

    public static function TraerPorId($id){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql = 'call gestionar_empleados("traer_id", ?, null, "","","","","",null,null,"","","")';
	    $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$id,PDO::PARAM_INT);
	    $dbQuery->execute();
	    $empleado = $dbQuery->fetchAll(PDO::FETCH_ASSOC);
	 
	    $conn = null;
        return json_encode($empleado);
    }

    public static function Insertar($id_sucursal, $tipo_empleado, $nombre, $apellido, $dni, $foto, $fecha_nac, $sueldo, $passw, $telefono, $correo)
    {
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql = 'call gestionar_empleados("insertar",?,?,?,?,?,?,?,?,?,?,?)';
	    $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$id,PDO::PARAM_INT);
        $dbQuery->bindParam(2,$tipo_empleado,PDO::PARAM_STR);
        $dbQuery->bindParam(3,$nombre,PDO::PARAM_STR);
        $dbQuery->bindParam(4,$apellido,PDO::PARAM_STR);
        $dbQuery->bindParam(5,$dni,PDO::PARAM_STR);
        $dbQuery->bindParam(6,$foto,PDO::PARAM_STR);
        $dbQuery->bindParam(7,$fecha_nac,PDO::PARAM_STR);
        $dbQuery->bindParam(8,$id,PDO::PARAM_STR);
        $dbQuery->bindParam(9,$id,PDO::PARAM_STR);
        $dbQuery->bindParam(10,$id,PDO::PARAM_STR);
        $dbQuery->bindParam(11,$id,PDO::PARAM_STR);
        $dbQuery->execute();
        
        $conn = null;
    }

    public static function Eliminar($id){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $sql = 'call gestionar_empleados("eliminar",?, null, "","","","","",null,null,"","","")';
        $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$id,PDO::PARAM_INT);

        $dbQuery->execute();
        
        $conn = null;
	    
    }

    public static function Actualizar($id, $id_suc, $tipo_empleado, $nombre, $apellido, $dni, $foto, $fecha_nac, $sueldo, $passw, $telefono, $correo){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $sql = 'call gestionar_empleados("actualizar",?, ?,?,?,?,?,?,?,?,?,?,?)';
        $dbQuery = $conn->prepare($sql);

        $dbQuery->bindParam(1,$id,PDO::PARAM_INT);
        $dbQuery->bindParam(2,$id_suc,PDO::PARAM_INT);
        $dbQuery->bindParam(3,$tipo_empleado,PDO::PARAM_STR);
        $dbQuery->bindParam(4,$nombre,PDO::PARAM_STR);
        $dbQuery->bindParam(5,$apellido,PDO::PARAM_STR);
        $dbQuery->bindParam(6,$dni,PDO::PARAM_STR);
        $dbQuery->bindParam(7,$foto,PDO::PARAM_STR);
        $dbQuery->bindParam(8,$fecha_nac,PDO::PARAM_STR);
        $dbQuery->bindParam(9,$id,PDO::PARAM_STR);
        $dbQuery->bindParam(10,$id,PDO::PARAM_STR);
        $dbQuery->bindParam(11,$id,PDO::PARAM_STR);
        $dbQuery->bindParam(12,$id,PDO::PARAM_STR);

        $dbQuery->execute();
        
        $conn = null;
    }


}
?>