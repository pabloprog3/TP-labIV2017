<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app = new \Slim\App;

require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/cliente.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/empleado.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/rutas/AuthValid.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/sucursales.php";

//-------------------------------------------LOGIN JWT------------------------------

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

$app->post("/auth", function (Request $request, Response $response) use($app)
{
	$correo = $request->getParam('correo');
	$passw = $request->getParam('passw');


	//devolver token
	$auth = new AuthValidate();
	$token=array('token'=> $auth->getToken($correo, $passw));

	return json_encode($token);
});




//-----------------------------------------RUTAS DE CLIENTES--------------------------------------
$app->get("/clientes", function (Request $request, Response $response) use($app)
{
	// RUTA: http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/clientes
    return $clientesJSON = Cliente::TraerTodos();

});

$app->get("/clientes/{correo}", function (Request $request, Response $response) use($app)
{
	$correo = $request->getAttribute('correo');
	
    return $clientesJSON = Cliente::TraerPorId($correo);

});


$app->post("/clientes/agregar", function(Request $request, Response $response) use($app){

	$nombre = $request->getParam('nombre');
	$apellido = $request->getParam('apellido');
	$dni = $request->getParam('dni');
	$passw = $request->getParam('passw');
	$telefono = $request->getParam('telefono');
 	$correo = $request->getParam('correo');

	try{
    	$clienteJSON = Cliente::Insertar($nombre, $apellido, $dni, $passw, $telefono, $correo);
		echo '{ "notice": {"text": "Cliente agregado"}';
	} catch(PDOException $e){
		echo '{ "error": {"text": ' .$e->getMessage().'}';
	}
});

$app->put("/clientes/actualizar/{correo}", function(Request $request, Response $response) use($app){
	$correo = $request->getAttribute('correo');
	
	$nombre = $request->getParam('nombre');
	$apellido = $request->getParam('apellido');
	$dni = $request->getParam('dni');
	$passw = $request->getParam('passw');
	$telefono = $request->getParam('telefono');
 	$correo = $request->getParam('correo');

    $clienteJSON = Cliente::Actualizar($nombre, $apellido, $dni, $passw, $telefono, $correo);
});

$app->delete("/clientes/eliminar/{correo}", function(Request $request, Response $response) use($app){
    $correo = $request->getAttribute('correo');
	
    $clienteJSON = CLiente::Eliminar($correo);
});



//------------------------------------------------RUTAS DE EMPLEADOS------------------------------------------

$app->get("/empleados", function (Request $request, Response $response) use($app)
{
   return $empleadosJSON = Empleado::TraerTodos();
});

$app->get("/empleados/{correo}", function (Request $request, Response $response) use($app)
{
	$correo = $request->getAttribute('correo');

   return $empleadosJSON = Empleado::TraerPorId($correo);
});


$app->post("/empleados/agregar", function(Request $request, Response $response) use($app){
	$id_sucursal = $request->getParam('id_sucursal');
	$tipo_emp = $request->getParam('tipo_emp');
	$nombre = $request->getParam('nombre');
	$apellido = $request->getParam('apellido');
	$dni = $request->getParam('dni');
	$foto = $request->getParam('foto');
	$fecha_nac = $request->getParam('fecha_nac');
	$sueldo = $request->getParam('sueldo');
	$passw = $request->getParam('passw');
	$telefono = $request->getParam('telefono');
 	$correo = $request->getParam('correo');

	try{
    	$empleadosJSON = Empleado::Insertar($id_sucursal, $tipo_emp, $nombre, $apellido, $dni, $foto, $fecha_nac, $sueldo, $passw, $telefono, $correo);
		echo '{ "notice": {"text": "Empleado agregado"}';
	} catch(PDOException $e){
		echo '{ "error": {"text": ' .$e->getMessage().'}';
	}
});

$app->put("/empleados/actualizar/{correo}", function(Request $request, Response $response) use($app){
    $correo = $request->getAttribute('correo');
	
    $clienteJSON = Empleado::Actualizar($id_sucursal, $tipo_empleado, $nombre, $apellido, $dni, $foto, $fecha_nac, $sueldo, $passw, $telefono, $correo);
});

$app->delete("/empleados/eliminar/{correo}", function(Request $request, Response $response) use($app){
    $correo = $request->getAttribute('correo');
    Empleado::Eliminar($correo);
});


//SUBIR FOTO
$app->post("/empleados/foto", function(Request $request, Response $response) use($app){

	try{
    	$empleadosJSON = Empleado::SubirFoto();
		echo '{ "notice": {"text": "Foto agregada"}';
	} catch(PDOException $e){
		echo '{ "error": {"text": ' .$e->getMessage().'}';
	}
});


//----------------------------------RUTAS DE PROPIEDADES--------------------------------------------

$app->get("/propiedades/{id}", function (Request $request, Response $response) use($app)
{
	$id = $request->getAttribute('id');
    return $propiedadesJSON = Sucursales::traerPropiedadId($id);
});

$app->get("/propiedades", function (Request $request, Response $response) use($app)
{
    return $propiedadesJSON = Sucursales::traerTodosPropiedades();
});



//-------------------------------SUBIR FOTOS--------------------------------------------------------




//-----------------------------------RUTA SUCURSALES------------------------------------------------
$app->get("/sucursales", function () use($app)
{
    $clientesJSON = Sucursales::traerTodos();
    $app->response->headers->set("Content-Type", "application/json");
	$app->response->status(200);
	$app->response->body($clientesJSON);
});



//-----------------------------------TRANSACCIONES--------------------------------------------------

//--------------------------------------ALQUILER----------------------------------------------------------
$app->post("/alquiler/agregar", function(Request $request, Response $response) use($app){
	$id_propiedad = $request->getParam('id_propiedad');
	$correo_due = $request->getParam('correo_due');
	$correo_cli = $request->getParam('correo_cli');
	$precio = $request->getParam('precio');
	$comision = $request->getParam('comision');
	$fecha = $request->getParam('fecha');
	$dias= $request->getParam('dias');


	try{
		Sucursales::insertarAlquiler($id_propiedad, $correo_due, $correo_cli, $precio, $comision, $fecha, $dias);
		echo '{ "notice": {"text": "Registro de alquiler agregado"}';
	} catch(PDOException $e){
		echo '{ "error": {"text": ' .$e->getMessage().'}';
	}
});


//--------------------------------------COMPRAR----------------------------------------------------------
$app->post("/comprar/agregar", function(Request $request, Response $response) use($app){
	$id_propiedad = $request->getParam('id_propiedad');
	$correo_due = $request->getParam('correo_due');
	$correo_cli = $request->getParam('correo_cli');
	$precio = $request->getParam('precio');
	$comision = $request->getParam('comision');
	$fecha = $request->getParam('fecha');

	try{
		Sucursales::insertarCompra($id_propiedad, $correo_due, $correo_cli, $precio, $comision, $fecha);
		echo '{ "notice": {"text": "Registro de compra agregado"}';
	} catch(PDOException $e){
		echo '{ "error": {"text": ' .$e->getMessage().'}';
	}
});

?>