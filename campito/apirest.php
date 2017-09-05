<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app = new \Slim\App;

require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/cliente.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/empleado.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/rutas/AuthValid.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/sucursales.php";
require_once $_SERVER['DOCUMENT_ROOT']."/TP-labIV2017/campito/backend/ws/apirest/src/model/estadisticas.php";

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
	$sueldo = $request->getParam('sueldo') * 0.83; //aportes jubilatorios + impuesto a las ganancias + obra social=0.17%
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

$app->post("/propiedades/fotos", function(Request $request, Response $response) use($app){
	//var_dump($request);

	
});

$app->post("/propiedades/agregar", function(Request $request, Response $response) use($app){
	$id_sucursal = $request->getParam('id_sucursal');
	$tipo_prop = $request->getParam('tipo_prop');
	$num_piso=$request->getParam('num_piso');
	$num_depto=$request->getParam('num_depto');
	$direccion=$request->getParam('direccion');
	$provincia=$request->getParam('provincia');
	$localidad=$request->getParam('localidad');
	$foto1=$request->getParam('foto1');
	$foto2=$request->getParam('foto2');
	$foto3=$request->getParam('foto3');
	$foto4=$request->getParam('foto4');
	$disponibilidad_alquiler=$request->getParam('disponibilidad_alquiler');
	if($disponibilidad_alquiler==true){
		$disponibilidad_alquiler='sí';
	}else{
		$disponibilidad_alquiler='no';
	}
	if($disponibilidad_alquiler==''){
		$disponibilidad_alquiler='no';
	}
	$precio_alquiler=$request->getParam('precio_alquiler');
	$disponibilidad_venta=$request->getParam('disponibilidad_venta');
	if($disponibilidad_venta==true){
		$disponibilidad_venta='sí';
	}else{
		$disponibilidad_venta='no';
	}
	if($disponibilidad_venta==''){
		$disponibilidad_venta='no';
	}
	$precio_venta=$request->getParam('precio_venta');
	$nombre_duenio = $request->getParam('nombre_duenio');
	$apellido_duenio = $request->getParam('apellido_duenio');
	$dni = $request->getParam('dni');
	$fecha_nac = $request->getParam('fecha_nac');
	$telefono = $request->getParam('telefono');
 	$correo = $request->getParam('correo');

	 //move_uploaded_file($foto1['name'], '../../../assets/fotos/propiedades/');
	try{
		$fileUpload=$_FILES;
		Sucursales::subirFotos($fileUpload, $dni);
		$bd='campito';
	    $user='root';
	    $passw='';
        $conn = new PDO('mysql:host=localhost;dbname='.$bd.';charset=utf8', $user, $passw);
        
        $sql = 'INSERT INTO propiedad (id_sucursal, tipo_prop, num_piso, num_depto, direccion, provincia, localidad, disponibilidad_alquiler, 
		disponibilidad_venta, precio_alquiler, precio_venta, foto1, foto2, foto3, foto4, nombre_duenio, apellido_duenio, 
		dni, telefono, correo, fecha_nac) VALUES (:id_sucursal, :tipo_prop, :num_piso, :num_depto, 
		:direccion, :provincia, :localidad, :disponibilidad_alquiler, :disponibilidad_venta, :precio_alquiler, 
		:precio_venta, :foto1, :foto2, :foto3, :foto4, :nombre_duenio, :apellido_duenio, :dni, :telefono, 
		:correo, :fecha_nac)';
	    
		/*
			INSERT INTO `propiedad`( `id_sucursal`, `tipo_prop`, `num_piso`, `num_depto`, `direccion`, `provincia`, `localidad`, `disponibilidad_alquiler`, `disponibilidad_venta`, `precio_alquiler`, `precio_venta`, `estado`, `foto1`, `foto2`, `foto3`, `foto4`, `nombre_duenio`, `apellido_duenio`, `dni`, `passw`, `telefono`, `correo`, `fecha_nac`, `dias_alquiler`) VALUES (1,"casa",5,"a","aaaaa","bbbbbb","cccc","sí","no",2900,0,"33333","fff","444","nnn","juan","perez","2321312","passwprd","jose@hotmail.com","232322","aaaaaa@hotmail.com", 1991-04-05, 45)
		*/

		$dbQuery = $conn->prepare($sql);

        $dbQuery->bindParam(':id_sucursal',$id_sucursal);
        $dbQuery->bindParam(':tipo_prop',$tipo_prop);
        $dbQuery->bindParam(':num_piso',$num_piso);
        $dbQuery->bindParam(':num_depto',$num_depto);
        $dbQuery->bindParam(':direccion',$direccion);
        $dbQuery->bindParam(':provincia',$provincia);
        $dbQuery->bindParam(':localidad',$localidad);
        $dbQuery->bindParam(':disponibilidad_alquiler',$disponiblidad_alquiler);
        $dbQuery->bindParam(':disponibilidad_venta',$disponibilidad_venta);
        $dbQuery->bindParam(':precio_alquiler',$precio_alquiler);
		$dbQuery->bindParam(':precio_venta',$precio_venta);
        $dbQuery->bindParam(':foto1',$foto1);
        $dbQuery->bindParam(':foto2',$foto2);
        $dbQuery->bindParam(':foto3',$foto3);
        $dbQuery->bindParam(':foto4',$foto4);
        $dbQuery->bindParam(':nombre_duenio',$nombre_duenio);
        $dbQuery->bindParam(':apellido_duenio',$apellido_duenio);
        $dbQuery->bindParam(':dni',$dni);
        $dbQuery->bindParam(':telefono',$telefono);
        $dbQuery->bindParam(':correo',$correo);
        $dbQuery->bindParam(':fecha_nac',$fecha_nac);
 
        $dbQuery->execute();
        
        $conn = null;
		return '{ "notice": {"text": "Propiedad agregada"}';
	} catch(PDOException $e){
		echo '{ "error": {"text": ' .$e->getMessage().'}';
	}
});


//-----------------------------------RUTA SUCURSALES------------------------------------------------
$app->get("/sucursales", function (Request $request, Response $response) use($app)
{
    $clientesJSON = Sucursales::traerTodos();

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
	$id_sucursal = $request->getParam('id_sucursal');


	try{
		Sucursales::insertarAlquiler($id_propiedad, $correo_due, $correo_cli, $precio, $comision, $fecha, $dias, $id_sucursal);
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
	$id_sucursal = $request->getParam('id_sucursal');

	try{
		Sucursales::insertarCompra($id_propiedad, $correo_due, $correo_cli, $precio, $comision, $fecha, $id_sucursal);
		echo '{ "notice": {"text": "Registro de compra agregado"}';
	} catch(PDOException $e){
		echo '{ "error": {"text": ' .$e->getMessage().'}';
	}
});




/* *************************************ESTADISTICAS***************************************************** */

$app->get("/estadisticas/alquileres", function (Request $request, Response $response) use($app)
{
	//$id = $request->getAttribute('id');
    return $alquileresJSON = Estadistica::TraerTodaDataAlquiler();
});


$app->get("/estadisticas/ventas", function (Request $request, Response $response) use($app)
{
    return $ventasJSON = Estadistica::TraerTodaDataVenta();
});








?>
