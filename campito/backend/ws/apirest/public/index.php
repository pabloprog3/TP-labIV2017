<?php
//use \Psr\Http\Message\ServerRequestInterface as Request;
//use \Psr\Http\Message\ResponseInterface as Response;
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/vendor/autoload.php";

require_once '../src/rutas/apirest.php';
require_once '../src/rutas/AuthValid.php';

$app->run();

?>