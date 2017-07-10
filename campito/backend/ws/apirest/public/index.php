<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

//$app = new \Slim\App;
/*$app->get('/hello/{name}', function (Request $request, Response $response) {

    //RUTA:  http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/hello/pablo
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});*/


//rutas para angular 2


require_once '../src/rutas/apirest.php';
require_once '../src/rutas/AuthValid.php';

$app->run();





?>