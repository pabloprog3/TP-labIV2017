<?php

final class ConexionPDO 
{
	private static $bd= 'id2237525_campito'; //'u494222080_campi';//'campito';//
	private static $user= 'id2237525_pablo'; //'u494222080_pablo';//'root';//
	private static $passw= 'pablo'; //'BzZX9m6lf9nR'; //'pablo';
	private static $instanciaPDO=null;
    
	public static function getConexion()
	{
		if (self::$instanciaPDO==null) 
		{
			self::$instanciaPDO = new PDO('mysql:host=localhost;dbname='.self::$bd.';charset=utf8', self::$user, self::$passw);
			return self::$instanciaPDO;
		}
	
	}
}

?>