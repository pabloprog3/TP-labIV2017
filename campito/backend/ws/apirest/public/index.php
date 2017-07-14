<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';



//rutas para angular 2


require_once '../src/rutas/apirest.php';
require_once '../src/rutas/AuthValid.php';

$app->run();





?>