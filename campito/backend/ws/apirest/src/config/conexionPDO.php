<?php

final class ConexionPDO 
{
	/*private static  $bd='u494222080_campi';
	private static  $user='u494222080_pablo';//'root';
	private static  $passw='7eJhs0eI8ZZS';*/

	private static  $bd='id2237525_campito';
	private static  $user='id2237525_pablo';//'root';
	private static  $passw='pablo';


	private static $instanciaPDO=null;
    
	public static function getConexion()
	{
		if (self::$instanciaPDO==null) 
		{
			//host=mysql.hostinger.com.ar
			self::$instanciaPDO = new PDO('mysql:host=localhost;dbname='.self::$bd.';charset=utf8', self::$user, self::$passw);
			return self::$instanciaPDO;
		}
	
	}
}

?>