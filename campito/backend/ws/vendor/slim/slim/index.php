<?php

require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();


require_once '../../../app/rutas/apirest.php';

$app->run();


?>
