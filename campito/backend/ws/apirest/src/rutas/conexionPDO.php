<?php

final class ConexionPDO 
{
	private static $bd='id2237525_campito';//'u494222080_campi';
	private static $user='id2237525_pablo';//'u494222080_pablo';
	private static $passw='pablo';//'7eJhs0eI8ZZS'; 
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