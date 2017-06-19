DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `gestionar_empleados`(
in accion varchar(20),
in _id int,
in _id_sucursal int,
in _tipo_emp varchar(13),
in _nombre varchar(35),
in _apellido varchar(35),
in _dni varchar(10),
in _foto varchar(25),
in _fecha_nac date,
in _sueldo float,
in _passw varchar(15),
in _telefono varchar(10),
in _correo varchar(40)
)
BEGIN

	case accion
    when 'traer_todos' then
		select * from empleados where estado='a';
	when 'traer_id' then
		select * from empleados where correo=_correo;
	when 'insertar' then
		insert into empleados(id_sucursal, tipo_emp, nombre, apellido, dni, foto, fecha_nac, sueldo, passw, telefono, correo)
			values(_id_sucursal, _tipo_emp, _nombre, _apellido, _dni, _foto, _fecha_nac, _sueldo, _passw, _telefono, _correo);
	when 'eliminar' then
		update empleados set
			estado='b'
		where id_empleado=_id;
	when 'actualizar' then
		update empleados set
			id_sucursal=_id_sucursal, nombre=_nombre, apellido=_apellido, dni=_dni, foto=_foto, fecha_nac=_fecha_nac, sueldo=_sueldo, passw=_passw, telefono=_telefono, correo=_correo
		where id_empleado=_id;
	end case;
END$$
DELIMITER ;
