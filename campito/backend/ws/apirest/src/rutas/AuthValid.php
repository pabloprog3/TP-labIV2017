<?php

require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/cliente.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/empleado.php";

require __DIR__ .'..\..\..\vendor\autoload.php';
use \Firebase\JWT\JWT;

/* CLASE QUE VALIDA AL USUAURIO Y DEVUELVE EL TOKEN */

class AuthValidate{

    private $keyToken="key_crypt";
    private $usuario=null;
    private $empleadoEncontrado=null;

    public function validarUsuario($correo, $passw){
        
        $empleadoEncontrado = json_decode(Empleado::TraerPorId($correo));
        //var_dump($empleadoEncontrado);
        
        if (empty($empleadoEncontrado)) {
            return $usuario='usuario inválido';
        }else{
        
            if ($empleadoEncontrado[0]->correo==$correo) {
                 //encontro el empleado
                 //verifico la password
                 //print_r($empleadoEncontrado);
                 if ($empleadoEncontrado[0]->passw==$passw) {
                    return $usuario = $empleadoEncontrado;
                }
            }else{
                //no encontro a un empleado, busca si es cliente
                $clienteEncontrado = Cliente::TraerPorId($correo);
                if ($clienteEncontrado[0]->passw==$correo) {
                    if ($clienteEncontrado[0]->passw==$passw) {
                        return $usuario = $clienteEncontrado;
                    }
                }
            }
        }
    }   
        

    public function getToken($correo, $passw){
        $jwt;
        $usuario = $this->validarUsuario($correo, $passw);
        
        if ($usuario != 'usuario inválido') {
           $token = array(
                "iss" => "http://example.org",
                "aud" => "http://example.com",
                "iat" => time(),
                "exp" => time() + 3600,
                "data"=> $usuario
            );

            $jwt=JWT::encode($token, $this->keyToken);
            return $jwt;
        }
        else
            return $usuario;
    }

} //FIN CLASE AUTH


?>