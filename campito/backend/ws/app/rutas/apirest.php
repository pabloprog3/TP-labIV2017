<?php

 header("Access-Control-Allow-Origin: *");
 header('Access-Control-Allow-Credentials','true');
 header('Access-Control-Allow','GET,POST,PUT,PATCH,DELELE,OPTIONS');
 //header('Access-Control-Allow-Headers','Content-Type, Authorization,X-XSRF-TOKEN,X-CSRF-TOKEN','CSRF-TOKEN','XSRF-TOKEN');

require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/cliente.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/sucursales.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/empleado.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/rutas/AuthValid.php";

//-------------------------------------------LOGIN JWT------------------------------

//http://localhost:8080/TP-labIV2017/campito/backend/ws/vendor/slim/slim/auth
$app->post("/auth", function () use($app)
{
	$correo = $app->request->post("correo");
	$passw = $app->request->post("passw");

	//echo $correo;
	//echo $passw;

	//devolver token
	$auth = new AuthValidate();
	$token=$auth->getToken($correo, $passw);
	$app->response->headers->set("Content-Type", "application/x-www-form-urlencoded");
	$app->response->status(200);
	$app->response->body($token);
	//print_r($token);
});



//-----------------------------------------RUTAS DE CLIENTES--------------------------------------
$app->get("/clientes", function () use($app)
{
	// RUTA: http://localhost:8080/TP-labIV2017/campito/backend/ws/vendor/slim/slim/clientes
    $clientesJSON = Cliente::TraerTodos();
    $app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($clientesJSON);
});

$app->get("/clientes/(:correo)", function ($correo) use($app)
{
    $clientesJSON = Cliente::TraerPorId($correo);
    $app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($clientesJSON);
});


$app->post("/clientes", function() use($app){
	$nombre = $app->request->post("nombre");
	$apellido = $app->request->post("apellido");
    $dni = $app->request->post("dni");
	$passw = $app->request->post("passw");
	$telefono = $app->request->post("telefono");
    $correo = $app->request->post("correo");
	$fecha_nac = $app->request->post("fecha");
	
    $clienteJSON = Cliente::Insertar($nombre, $apellido, $dni, $passw, $telefono, $correo, $fecha_nac);
	$app->response->headers->set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	$app->response->status(200);
	$app->response->body($clienteJSON);
});

$app->put("/clientes/(:correo)", function($correo) use($app){
    //$id = $app->request->post("id");
	$nombre = $app->request->post("nombre");
	$apellido = $app->request->post("apellido");
    $dni = $app->request->post("dni");
	$passw = $app->request->post("passw");
	$telefono = $app->request->post("telefono");
    //$correo = $app->request->post("correo");
	$fecha_nac = $app->request->post("fecha_nac");
	
    $clienteJSON = Cliente::Actualizar($id, $nombre, $apellido, $dni, $passw, $telefono, $correo, $fecha_nac);
	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	//$app->response->body($clienteJSON);
});

$app->delete("/clientes/(:id)", function() use($app){
    $id = $app->request->post("id");
	
    $clienteJSON = CLiente::Eliminar($id);
	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	//$app->response->body($clienteJSON);
});



//------------------------------------------------RUTAS DE EMPLEADOS------------------------------------------

$app->get("/empleados", function () use($app)
{
    $empleadosJSON = Empleado::TraerTodos();
    $app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($empleadosJSON);
});

$app->get("/empleados/(:id)", function ($id) use($app)
{
    $empleadosJSON = Empleado::TraerPorId($id);
    $app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($empleadosJSON);
});


$app->post("/empleados", function() use($app){
    $id_sucursal = $app->request->post("id_suc");
	$nombre = $app->request->post("nombre");
	$apellido = $app->request->post("apellido");
    $dni = $app->request->post("dni");
    $foto = $app->request->post("foto");
    $fecha_nac = $app->request->post("fecha_nac");
    $sueldo = $app->request->post("sueldo");
	$passw = $app->request->post("passw");
	$telefono = $app->request->post("telefono");
    $correo = $app->request->post("correo");

	
    $clienteJSON = Empleado::Insertar($id_sucursal, $tipo_empleado, $nombre, $apellido, $dni, $foto, $fecha_nac, $sueldo, $passw, $telefono, $correo);
	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	//$app->response->body($clienteJSON);
});

$app->put("/empleados/(:id)", function() use($app){
    $id = $app->request->post("id");
    $id_sucursal = $app->request->post("id_suc");
	$nombre = $app->request->post("nombre");
	$apellido = $app->request->post("apellido");
    $dni = $app->request->post("dni");
    $foto = $app->request->post("foto");
    $fecha_nac = $app->request->post("fecha_nac");
    $sueldo = $app->request->post("sueldo");
	$passw = $app->request->post("passw");
	$telefono = $app->request->post("telefono");
    $correo = $app->request->post("correo");
	
    $clienteJSON = Empleado::Actualizar($id, $id_sucursal, $tipo_empleado, $nombre, $apellido, $dni, $foto, $fecha_nac, $sueldo, $passw, $telefono, $correo);
	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	//$app->response->body($clienteJSON);
});

$app->delete("/empleados/(:id)", function() use($app){
    $id = $app->request->post("id");
	
    $clienteJSON = Empleado::Eliminar($id);
	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	//$app->response->body($clienteJSON);
});



//----------------------------------RUTAS DE PROPIEDADES--------------------------------------------

$app->get("/propiedades", function () use($app)
{
    $clientesJSON = Sucursales::traerTodosPropiedades();
    $app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($clientesJSON);
});



//-------------------------------SUBIR FOTOS--------------------------------------------------------
//$app->fotos("/fotos", function() use($app){

//$data = json_decode($app->request->getBody());

//});




//-----------------------------------RUTA SUCURSALES------------------------------------------------
$app->get("/sucursales", function () use($app)
{
    $clientesJSON = Sucursales::traerTodos();
    $app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($clientesJSON);
});



?>