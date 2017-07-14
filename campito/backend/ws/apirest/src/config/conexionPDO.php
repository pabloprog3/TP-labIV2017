<?php

final class ConexionPDO 
{
	private static $bd='id2237525_campito';
	private static $user='id2237525_pablo';
	private static $passw='123456';
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