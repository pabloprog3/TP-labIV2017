<?php

final class ConexionPDO 
{
	private static $bd='campito';
	private static $user='root';
	private static $passw='';
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