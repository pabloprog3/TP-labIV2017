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
    private $clienteEncontrado=null;

    public function validarUsuario($correo, $passw){
    
        $clienteEncontrado = json_decode(Cliente::TraerPorId($correo));
        //var_dump($clienteEncontrado);
        if ($clienteEncontrado) {
           //encontro el cliente => valido password
           if ($clienteEncontrado[0]->passw == $passw) {
              return $clienteEncontrado;
           }
           else{
              return 'password invalid';
           }
        }
        
        $empleadoEncontrado = json_decode(Empleado::TraerPorId($correo));
        if($empleadoEncontrado){
            if ($empleadoEncontrado[0]->passw == $passw) {
                return $empleadoEncontrado;
            }
            else{
                return 'password invalid';
            }
        }

        if(!$clienteEncontrado && !$empleadoEncontrado){
            return 'usuario invalido';
        }
 
}

    public function getToken($correo, $passw){
        $jwt;
        $usuario = $this->validarUsuario($correo, $passw);
        
        if ($usuario != 'usuario invalido' && $usuario != 'password invalid') {
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