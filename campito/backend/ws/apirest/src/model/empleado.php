<?php

require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/config/conexionPDO.php";
require_once  $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/claseBasePersona.php";

class Empleado extends Persona
{
    private $id_sucursal=null;
    private $tipo_empleado=null;
    private $foto=null;
    private $sueldo=null;
    private $fecha_nac=null;

    function __construct(){
        
    }


    function __construct1($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo, $_fecha_nac, $_id_sucursal, $_tipo_empleado, $_foto, $_sueldo)
    {
        parent::__construct($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo);
        $this->id_sucursal = $_id_sucursal;
        $this->tipo_empleado = $_tipo_empleado;
        $this->foto = $_foto;
        $this->sueldo = $_sueldo;
        $this->fecha_nac = $_fecha_nac;
    }


    //metodos para la base de datos

    public static function TraerTodos(){
        $conn=ConexionPDO::getConexion();
        $sql = 'select * from empleados where estado = "a"';
        $dbQuery = $conn->prepare($sql);
	    $dbQuery->execute();
	    $empleados = $dbQuery->fetchAll(PDO::FETCH_OBJ); 

	    $conn = null;
        return json_encode($empleados);
    }

    public static function TraerPorId($correo){
        //por parametro le paso el correo
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql = 'select * from empleados where correo=?';
	    $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$correo,PDO::PARAM_STR);
	    $dbQuery->execute();
	    $empleado = $dbQuery->fetchAll(PDO::FETCH_OBJ);
        //var_dump($empleado);
	    $conn = null;
        return json_encode($empleado);
    }

    public static function Insertar($id_sucursal, $tipo_empleado, $nombre, $apellido, $dni, $foto, $fecha_nac, $sueldo, $passw, $telefono, $correo)
    {
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
        $sql = 'insert into empleados (id_sucursal, tipo_emp, nombre, apellido, dni, foto, fecha_nac, sueldo, passw, telefono, correo)
                values (?,?,?,?,?,?,?,?,?,?,?)';
	    $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$id_sucursal,PDO::PARAM_INT);
        $dbQuery->bindParam(2,$tipo_empleado,PDO::PARAM_STR);
        $dbQuery->bindParam(3,$nombre,PDO::PARAM_STR);
        $dbQuery->bindParam(4,$apellido,PDO::PARAM_STR);
        $dbQuery->bindParam(5,$dni,PDO::PARAM_STR);
        $dbQuery->bindParam(6,$foto,PDO::PARAM_STR);
        $dbQuery->bindParam(7,$fecha_nac,PDO::PARAM_STR);
        $dbQuery->bindParam(8,$sueldo,PDO::PARAM_STR);
        $dbQuery->bindParam(9,$passw,PDO::PARAM_STR);
        $dbQuery->bindParam(10,$telefono,PDO::PARAM_STR);
        $dbQuery->bindParam(11,$correo,PDO::PARAM_STR);
        $dbQuery->execute();
        
        $conn = null;
    }

    public static function Eliminar($id){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $sql = 'update empleados set estado = "b" where correo = ?';
        $dbQuery = $conn->prepare($sql);
        $dbQuery->bindParam(1,$id);

        $dbQuery->execute();
        
        $conn = null;
	    
    }

    public static function Actualizar($id_suc, $tipo_empleado, $nombre, $apellido, $dni, $foto, $fecha_nac, $sueldo, $passw, $telefono, $correo){
        $dbPDO = new ConexionPDO();
	    $conn = $dbPDO->getConexion();
	    $sql = 'update empleados set id_sucursal=?, tipo_empleado=?, nombre=?, apellido=?, dni=?, foto=?, fecha_nac=?, sueldo=?, passw=?, telefono=?, correo=?';
        $dbQuery = $conn->prepare($sql);

        $dbQuery->bindParam(1,$id_suc);
        $dbQuery->bindParam(2,$tipo_empleado);
        $dbQuery->bindParam(3,$nombre);
        $dbQuery->bindParam(4,$apellido);
        $dbQuery->bindParam(5,$dni);
        $dbQuery->bindParam(6,$foto);
        $dbQuery->bindParam(7,$fecha_nac);
        $dbQuery->bindParam(8,$id);
        $dbQuery->bindParam(9,$id);
        $dbQuery->bindParam(10,$id);
        $dbQuery->bindParam(11,$id);

        $dbQuery->execute();
        
        $conn = null;
    }

    public static function SubirFoto(){
        
    }

    public function verificarLogin($correo, $passw){


    }

}
?>