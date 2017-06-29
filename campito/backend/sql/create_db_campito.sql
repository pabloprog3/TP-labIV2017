-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2017 a las 18:54:25
-- Versión del servidor: 5.6.25
-- Versión de PHP: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `campito`
--
CREATE DATABASE IF NOT EXISTS `campito` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE `campito`;

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `gestionar_clientes`(
	in accion varchar(20),
    in _id_cliente int,
    in _nombre varchar(35),
    in _apellido varchar(35),
    in _dni varchar(10),
    in _passw varchar(15),
    in _telefono varchar(10),
    in _correo varchar(30), 
    in _fecha_nac date,
	in _categoria  varchar(30)
)
BEGIN
	case accion
    when 'traer_todos' then
		select * from cliente where estado='a';
	when 'traer_id' then
		select * from cliente where correo=_correo;
	when 'insertar' then
		insert into cliente(nombre, apelldio, dni, passw, telefono, correo, fecha_nac, categoria)
			values(_nombre, _apellido, _dni, _passw, _telefono, _correo, _fecha_nac, _categoria);
	when 'eliminar' then
		update cliente set
			estatus='b'
		where correo=_correo;
	when 'actualizar' then
		update cliente set
			nombre=_nombre, apellido=_apellido, dni=_dni, passw=_passw, telefono=_telefono, correo=_correo, fecha_nac=_fecha_nac, categoria=_categoria
		where correo=_correo;
	end case;
END$$

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
in _correo varchar(30)
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquiler`
--

CREATE TABLE IF NOT EXISTS `alquiler` (
  `alquiler` int(11) NOT NULL,
  `correo_due` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `correo_cli` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `comision` float NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `alquiler`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nombre` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dni` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `passw` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `correo` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `categoria` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` char(1) COLLATE utf8_spanish2_ci DEFAULT 'a'
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `cliente`:
--

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nombre`, `apellido`, `dni`, `passw`, `telefono`, `correo`, `fecha_nac`, `categoria`, `estado`) VALUES
(1, 'jose', 'hernandez', '22091876', '1111', '12312334', 'jh@yahoo.com.ar', '1989-11-26', '', 'a'),
(2, 'juan', 'roman', '22091812', '1112', '1762334', 'jr@hotmail.com.ar', '1990-02-15', '', 'a'),
(3, 'cliente', 'cliente', '88000000', 'cliente', '1111111', 'cliente@cliente.com.ar', '1988-03-22', '', 'a'),
(4, 'sebastian', 'gerez', '92038931', 'gty453', '113400980', 'sgerez@yahoo.com.ar', '1989-09-14', '', 'a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pago`
--

CREATE TABLE IF NOT EXISTS `detalle_pago` (
  `id_detalle` int(11) NOT NULL,
  `num_reserva` int(11) NOT NULL,
  `cantidad_cuotas` int(11) DEFAULT NULL,
  `valor_cuota` int(11) DEFAULT NULL,
  `pagos_realizados` int(11) DEFAULT NULL,
  `pagos_faltantes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `detalle_pago`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_empleado` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL,
  `tipo_emp` varchar(13) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dni` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `sueldo` float DEFAULT NULL,
  `passw` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `correo` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` char(1) COLLATE utf8_spanish2_ci DEFAULT 'a'
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `empleados`:
--   `id_sucursal`
--       `sucursal` -> `id_sucursal`
--

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `id_sucursal`, `tipo_emp`, `nombre`, `apellido`, `dni`, `foto`, `fecha_nac`, `sueldo`, `passw`, `telefono`, `correo`, `estado`) VALUES
(2, 1, 'encargado', 'carlos', 'gutie', '99999991', NULL, '1987-01-29', 23000, '1111', '1909872651', 'encargado@encargado.com.ar', 'a'),
(3, 1, 'empleado', 'daniel', 'gomez', '88812345', NULL, '1990-04-21', 9800, '0000', '1221334433', 'empleado@empleado.com', 'a'),
(4, 1, 'administrador', 'pablo', 'perez', '33210909', NULL, '1987-09-05', 50000, '3333', '34217777', 'admin@admin.com', 'a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propiedad`
--

CREATE TABLE IF NOT EXISTS `propiedad` (
  `id_propiedad` int(11) NOT NULL,
  `tipo_prop` varchar(12) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `num_piso` int(11) DEFAULT NULL,
  `num_depto` varchar(2) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `provincia` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `localidad` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `disponibilidad_alquiler` varchar(2) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `disponibilidad_venta` varchar(2) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `precio_alquiler` float DEFAULT NULL,
  `precio_venta` float DEFAULT NULL,
  `estado` char(1) COLLATE utf8_spanish2_ci DEFAULT 'a',
  `foto1` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto2` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto3` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto4` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre_duenio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido_duenio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `dni` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `passw` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `correo` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_nac` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `propiedad`:
--

--
-- Volcado de datos para la tabla `propiedad`
--

INSERT INTO `propiedad` (`id_propiedad`, `tipo_prop`, `num_piso`, `num_depto`, `direccion`, `provincia`, `localidad`, `disponibilidad_alquiler`, `disponibilidad_venta`, `precio_alquiler`, `precio_venta`, `estado`, `foto1`, `foto2`, `foto3`, `foto4`, `nombre_duenio`, `apellido_duenio`, `dni`, `passw`, `telefono`, `correo`, `fecha_nac`) VALUES
(1, 'casa', NULL, NULL, 'AV. Sarmiento 500', 'capital federal', 'capital federal', 's', 's', 22000, 500000, 'a', NULL, NULL, NULL, NULL, 'Juan', 'Soreyra', '23009281', 'pepe', '1123456744', 'juans@hotmail.com', '1990-06-12'),
(2, 'casa', NULL, NULL, 'Av. Hipolito Yrigoyen 8900', 'buenos aires', 'temperley', 'n', 's', NULL, 1000000, 'a', NULL, NULL, NULL, NULL, 'sebastian', 'gonzales', '34909245', '34002017', '45673092', 'sgonzals@gmail.com', '1981-12-13'),
(3, 'departemento', 3, 'A', 'Av. Sante Fe 3000', 'capital federal', 'capital federal', 's', 'n', 45000, NULL, 'a', NULL, NULL, NULL, NULL, 'hector', 'rodilla', '36777001', 'password', '1522099066', 'hrodilla@hotmail.com', '1978-05-27'),
(4, 'departemento', 1, 'D', 'Av. Belgrano 1450', 'buenos aires', 'avellaneda', 's', 'n', 17000, NULL, 'a', NULL, NULL, NULL, NULL, 'jose', 'herrera', '26997001', 'pasw', '1522049011', 'jherre@hotmail.com', '0000-00-00'),
(5, 'casa', 0, '0', 'Av. Pueyrredon 2800', 'capital federal', 'capital federal', 's', 's', 25000, 670000, 'a', NULL, NULL, NULL, NULL, 'rodrigo', 'fermis', '16779001', 'password', '1525093066', 'rfermis@yahoo.com.ar', '0000-00-00'),
(6, 'departemento', 3, '3', 'Av. Alcorta 3000', 'capital federal', 'capital federal', 's', 'n', 39000, NULL, 'a', NULL, NULL, NULL, NULL, 'adrian', 'espinosa', '36557001', 'password', '1522099001', 'aespinosa@hotmail.com', '0000-00-00'),
(7, 'departemento', 5, 'A', 'Av. Sante Fe 3000', 'capital federal', 'capital federal', 's', 'n', 45000, NULL, 'a', NULL, NULL, NULL, NULL, 'pablo', 'perez', '36777022', 'password', '1572797066', 'pperez@hotmail.com', '0000-00-00'),
(8, 'casa', 0, '0', 'Av. Sante Fe 2000', 'capital federal', 'capital federal', 's', 's', 56000, 2000000, 'a', NULL, NULL, NULL, NULL, 'jose', 'muñoz', '35723001', 'password', '1522091234', 'jmuñoz@hotmail.com', '1988-06-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE IF NOT EXISTS `sucursal` (
  `id_sucursal` int(11) NOT NULL,
  `descripcion` varchar(60) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `provincia` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `localidad` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion` varchar(40) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `foto1` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto2` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto3` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `sucursal`:
--

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id_sucursal`, `descripcion`, `provincia`, `localidad`, `direccion`, `telefono`, `foto1`, `foto2`, `foto3`, `latitud`, `longitud`) VALUES
(1, 'Sucursal en Ramos Mejía, ciudad de La Matanza', 'Buenos Aires', 'Ramos Mejía', 'av de mayo 316', '89895641', NULL, NULL, NULL, -34.643833, -58.56496),
(2, 'Inmobiliaria Rodolfo Monte, venta y alquiler ', 'buenos aires', 'capital federal', 'La Pampa 5029', '12340988', NULL, NULL, NULL, -34.579466, -58.479797),
(3, 'local ubicado en buenos aires, turdera', 'buenos aires', 'turdera', 'av. antártida argentina 202', '899033212', NULL, NULL, NULL, -34.808611, -58.22373);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE IF NOT EXISTS `venta` (
  `id` int(11) NOT NULL,
  `correo_due` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `correo_cli` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `comision` float NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `venta`:
--

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  ADD PRIMARY KEY (`alquiler`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- Indices de la tabla `detalle_pago`
--
ALTER TABLE `detalle_pago`
  ADD PRIMARY KEY (`id_detalle`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_empleado`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD KEY `fk_emp_suc` (`id_sucursal`);

--
-- Indices de la tabla `propiedad`
--
ALTER TABLE `propiedad`
  ADD PRIMARY KEY (`id_propiedad`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`id_sucursal`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  MODIFY `alquiler` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `detalle_pago`
--
ALTER TABLE `detalle_pago`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `propiedad`
--
ALTER TABLE `propiedad`
  MODIFY `id_propiedad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id_sucursal` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `fk_emp_suc` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
