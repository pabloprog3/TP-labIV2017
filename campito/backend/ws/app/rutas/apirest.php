<?php

require __DIR__ . '/vendor/autoload.php';
use \Firebase\JWT\JWT;

require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/cliente.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/app/libs/empleado.php";

$key = "key_crypt";

//-------------------------------------------VERIFICAR LOGIN PARA JWT------------------------------
$app->post("/login", function () use($app)
{
	$correo = $app->request->post("correo");
	$passw = $app->request->post("passw");

	//verificar si existe en la base de datos
$empleado = new Empleado();
$empleado_data = $empleado->verificarLogin($correo, $passw);

if($empleado_data){
	$token = array(
    "iss" => "http://example.org",
    "aud" => "http://example.com",
    "iat" => time(),
    "exp" => time() + 3600,
    "data"=> []
	);
}

if(!$empleado_data){
	$cliente = new Cliente();
	$cliente_data = $cliente->verificarLogin($correo, $passw);
	
	if($cliente_data){
		$token = array(
    		"iss" => "http://example.org",
    		"aud" => "http://example.com",
    		"iat" => time(),
    		"exp" => time() + 3600,
    		"data"=> []
		);
	}
}

$jwt = JWT::encode($token, $key);

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

$app->get("/clientes/(:id)", function ($id) use($app)
{
    $clientesJSON = Cliente::TraerPorId($id);
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
	$fecha_nac = $app->request->post("fecha_nac");
	
    $clienteJSON = Cliente::Insertar($nombre, $apellido, $dni, $passw, $telefono, $correo, $fecha_nac);
	$app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	//$app->response->body($clienteJSON);
});

$app->put("/clientes/(:id)", function() use($app){
    $id = $app->request->post("id");
	$nombre = $app->request->post("nombre");
	$apellido = $app->request->post("apellido");
    $dni = $app->request->post("dni");
	$passw = $app->request->post("passw");
	$telefono = $app->request->post("telefono");
    $correo = $app->request->post("correo");
	$fecha_nac = $app->request->post("fecha_nac");
	
    $clienteJSON = Cliente::Insertar($id, $nombre, $apellido, $dni, $passw, $telefono, $correo, $fecha_nac);
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


?>