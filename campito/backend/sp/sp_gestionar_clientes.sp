DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `gestionar_clientes`(
	in accion varchar(20),
    in _id_cliente int,
    in _nombre varchar(35),
    in _apellido varchar(35),
    in _dni varchar(10),
    in _passw varchar(15),
    in _telefono varchar(10),
    in _correo varchar(30), 
    in _fecha_nac date  
)
BEGIN
	case accion
    when 'traer_todos' then
		select * from cliente where estatus='a';
	when 'traer_id' then
		select * from cliente where id_cliente=_id_cliente;
	when 'insertar' then
		insert into cliente(nombre, apelldio, dni, passw, telefono, correo, fecha_nac)
			values(_nombre, _apellido, _dni, _passw, _telefono, _correo, _fecha_nac);
	when 'eliminar' then
		update cliente set
			estatus='b'
		where id_cliente=_id_cliente;
	when 'actualizar' then
		update cliente set
			nombre=_nombre, apellido=_apellido, dni=_dni, passw=_passw, telefono=_telefono, correo=_correo, fecha_nac=_fecha_nac
		where id_cliente=_id_cliente;
	end case;
END$$
DELIMITER ;
