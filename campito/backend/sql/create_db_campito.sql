-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-05-2017 a las 18:35:26
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
		select * from empleados where id_empleado=_id;
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
  `estatus` char(1) COLLATE utf8_spanish2_ci DEFAULT 'a'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nombre`, `apellido`, `dni`, `passw`, `telefono`, `correo`, `fecha_nac`, `estatus`) VALUES
(1, 'jose', 'hernandez', '22091876', '1111', '12312334', 'jh@yahoo.com.ar', '1989-11-26', 'a'),
(2, 'juan', 'roman', '22091812', '1112', '1762334', 'jr@hotmail.com.ar', '1990-02-15', 'a');

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `duenio`
--

CREATE TABLE IF NOT EXISTS `duenio` (
  `id_duenio` int(11) NOT NULL,
  `nombre` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dni` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `id_propiedad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

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
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `id_sucursal`, `tipo_emp`, `nombre`, `apellido`, `dni`, `foto`, `fecha_nac`, `sueldo`, `passw`, `telefono`, `correo`, `estado`) VALUES
(2, 1, 'encargado', 'carlos', 'gutie', '99999991', NULL, '1987-01-29', 23000, '1111', '1909872651', 'cg@gmail.com', 'a'),
(3, 1, 'empleado', 'daniel', 'gomez', '88812345', NULL, '1990-04-21', 9800, 'dfre', '1221334433', 'dgomez@hotmail.com', 'a'),
(4, 1, 'administrador', 'pablo', 'perez', '33210909', NULL, '1987-09-05', 50000, '3333', '34217777', 'pperez@hotmail.com', 'a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propiedad`
--

CREATE TABLE IF NOT EXISTS `propiedad` (
  `id_propiedad` int(11) NOT NULL,
  `id_sucursal` int(11) DEFAULT NULL,
  `id_duenio` int(11) DEFAULT NULL,
  `id_reserva` int(11) DEFAULT NULL,
  `tipo_prop` varchar(12) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `num_piso` int(11) DEFAULT NULL,
  `num_depto` int(11) DEFAULT NULL,
  `direccion` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `provincia` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `localidad` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `disponibilidad` varchar(8) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `precio_alquiler` float DEFAULT NULL,
  `precio_venta` float DEFAULT NULL,
  `estado` char(1) COLLATE utf8_spanish2_ci DEFAULT 'a',
  `foto1` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto2` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto3` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto4` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE IF NOT EXISTS `reserva` (
  `num_reserva` int(11) NOT NULL,
  `id_propiedad` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `cancelado` char(1) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_reserva` date DEFAULT NULL,
  `deposito_inicial` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas_aceptadas`
--

CREATE TABLE IF NOT EXISTS `reservas_aceptadas` (
  `id` int(11) NOT NULL,
  `num_reserva` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas_canceladas`
--

CREATE TABLE IF NOT EXISTS `reservas_canceladas` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `num_reserva` int(11) NOT NULL,
  `fecha_cancel` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE IF NOT EXISTS `sucursal` (
  `id_sucursal` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `provincia` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `localidad` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `foto1` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto2` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto3` varchar(25) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id_sucursal`, `descripcion`, `provincia`, `localidad`, `direccion`, `telefono`, `foto1`, `foto2`, `foto3`) VALUES
(1, 'Sucursal en Ramos Mejía, ciudad de La Matanza', 'Buenos Aires', 'Ramos Mejía', 'av de mayo 316', '89895641', NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

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
-- Indices de la tabla `duenio`
--
ALTER TABLE `duenio`
  ADD PRIMARY KEY (`id_duenio`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD KEY `fk_duenio_propiedad` (`id_propiedad`);

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
  ADD PRIMARY KEY (`id_propiedad`),
  ADD KEY `fk_propiedad_suc` (`id_sucursal`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`num_reserva`),
  ADD KEY `fk_reserva_propiedad` (`id_propiedad`),
  ADD KEY `fk_reserva_cliente` (`id_cliente`),
  ADD KEY `fk_reserva_empleado` (`id_empleado`);

--
-- Indices de la tabla `reservas_aceptadas`
--
ALTER TABLE `reservas_aceptadas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reservas_canceladas`
--
ALTER TABLE `reservas_canceladas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`id_sucursal`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `detalle_pago`
--
ALTER TABLE `detalle_pago`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `duenio`
--
ALTER TABLE `duenio`
  MODIFY `id_duenio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `propiedad`
--
ALTER TABLE `propiedad`
  MODIFY `id_propiedad` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `reservas_aceptadas`
--
ALTER TABLE `reservas_aceptadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `reservas_canceladas`
--
ALTER TABLE `reservas_canceladas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id_sucursal` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `duenio`
--
ALTER TABLE `duenio`
  ADD CONSTRAINT `fk_duenio_propiedad` FOREIGN KEY (`id_propiedad`) REFERENCES `propiedad` (`id_propiedad`);

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `fk_emp_suc` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`);

--
-- Filtros para la tabla `propiedad`
--
ALTER TABLE `propiedad`
  ADD CONSTRAINT `fk_propiedad_suc` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`);

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `fk_reserva_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`),
  ADD CONSTRAINT `fk_reserva_empleado` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id_empleado`),
  ADD CONSTRAINT `fk_reserva_propiedad` FOREIGN KEY (`id_propiedad`) REFERENCES `propiedad` (`id_propiedad`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
