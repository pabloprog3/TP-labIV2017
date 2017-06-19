
<?php

/*

Script para hacer tests individuales

*/


require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/cliente.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/empleado.php";


//$empleadoEncontrado=array();
    //$correo="encargado@encargado.com.ar";
 //$empleadoEncontrado = json_decode(Empleado::TraerPorId($correo));
//$empleadoEncontrado = Empleado::TraerPorId("encargado@encargado.com.ar");

//var_dump($empleadoEncontrado);
        //var_dump($empleadoEncontrado);
       // echo $empleadoEncontrado;


/*--------------------------------------------------------------------------------------------------------*/


/*
require __DIR__ .'..\..\..\vendor\autoload.php';
use \Firebase\JWT\JWT;
$keyToken="key_crypt";
$correo="encargado@encargado.com.ar";
$passw='1111';
$msj = null;
// $empleadoEncontrado=array();
$empleadoEncontrado = null;
        $empleadoEncontrado = json_decode(Empleado::TraerPorId("encargado@encargado.com.ar"));
        //array_push($empleadoEncontrado);
        //print_r($empleadoEncontrado);
        if ($empleadoEncontrado!=null) {

        
            if ($empleadoEncontrado[0]->correo==$correo) {
            //encontro el empleado
            //verifico la password
            //print_r($empleadoEncontrado);
                if ($empleadoEncontrado[0]->passw==$passw) {
                    $empleadoEncontrado;
                }
            }else{
            //no encontro a un empleado, busca si es cliente
            $clienteEncontrado = Cliente::TraerPorId($correo);
            if ($clienteEncontrado[0]->correo==$correo) {
                if ($clienteEncontrado[0]->passw==$passw) {
                 $clienteEncontrado;
                }
            }
            else {
                 $msj='NO';
            }
        }
    

        $jwt;
        //$usuario = validarUsuario($correo, $passw);
        }
        if ($msj != 'NO') {
           $token = array(
                "iss" => "http://example.org",
                "aud" => "http://example.com",
                "iat" => time(),
                "exp" => time() + 3600,
                "data"=> $empleadoEncontrado
            );

            $jwt=JWT::encode($token, $keyToken);

            echo $jwt;

            $jwt2=JWT::decode($jwt, $keyToken, array('HS256'));

            //echo $jwt2;
            print_r($jwt2);
        }
        else
        echo $msj;
*/




/*--------------------------------------------------------------------------------------------*/

/**/           
        $correo="encargado@encargado.com.ar";
        $passw="1111";
        $empleadoEncontrado=null;
        //var_dump($empleadoEncontrado); NULL
        $empleadoEncontrado = json_decode(Empleado::TraerPorId($correo));
        //var_dump($empleadoEncontrado); devuelve array vacio
        
        if (empty($empleadoEncontrado)) {
            //return null;
            //echo 'vacio';
           echo  $msj='NO';
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
    


?>
