<?php

/**
 * Defino la clase base de la que van a heredar empleado y cliente
 */
abstract class Persona
{
    private $nombre=null;
    private $apellido=null;
    private $dni=null;
    private $passw=null;
    private $telefono=null;
    private $correo=null;
    private $fecha_nac=null;


    function __construct($_nombre, $_apellido, $_dni, $_passw, $_telefono, $_correo, $_fecha_nac)
    {
        $this->nombre=$_nombre;
        $this->$apellido=$_apellido;
        $this->$dni=$_dni;
        $this->$passw=$_passw;
        $this->$telefono=$_telefono;
        $this->$correo=$_correo;
        $this->$fecha_nac=$_fecha_nac;
    }

    public function getNombre(){
        return $this->nombre;
    }
    public function getApellido(){
        return $this->apellido;
    }
    public function getDni(){
        return $this->dni;
    }
    public function getTelefono(){
        return $this->telefono;
    }
    public function getCorreo(){
        return $this->correo;
    }
    public function getFechaNacimiento(){
        return $this->fecha_nac;
    }


    public function setNombre($valor){
         $this->$nombre=$valor;
    }
    public function setApellido($valor){
         $this->$apellido=$valor;
    }
    public function setDni($valor){
         $this->$dni=$valor;
    }
    public function setPassw($valor){
        $this->passw=$valor;
    }
    public function setTelefono($valor){
         $this->$telefono=$valor;
    }
    public function setCorreo($valor){
         $this->$correo=$valor;
    }
    public function setFechaNacimiento($valor){
         $this->$fecha_nac=$valor;
    }

    //verificar login-jwt
    abstract protected function verificarLogin($correo, $passw);

   


}


?>