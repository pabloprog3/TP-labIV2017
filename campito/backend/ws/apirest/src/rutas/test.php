<?php

include_once './AuthValid.php';

$auth = new AuthValidate();

//return $auth->validarUsuario('cliente@cliente.com.ar', 'cliente');
echo $auth->getToken('cliente@cliente.com.ar', 'cliente'); //trae el token OK


?>