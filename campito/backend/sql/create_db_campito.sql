-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-07-2017 a las 10:30:15
-- Versión del servidor: 5.6.25
-- Versión de PHP: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `campito`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquiler`
--

CREATE TABLE IF NOT EXISTS `alquiler` (
  `id` int(11) NOT NULL,
  `correo_due` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `correo_cli` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `comision` float NOT NULL,
  `fecha` date NOT NULL,
  `dias` int(11) DEFAULT NULL,
  `id_propiedad` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `alquiler`:
--

--
-- Volcado de datos para la tabla `alquiler`
--

INSERT INTO `alquiler` (`id`, `correo_due`, `correo_cli`, `precio`, `comision`, `fecha`, `dias`, `id_propiedad`, `id_sucursal`) VALUES
(1, 'jmuñoz@hotmail.com', 'cliente@cliente.com.ar', 12980, 454.3, '2017-06-02', 22, 8, 1),
(2, 'rfermis@yahoo.com.ar', 'cliente@cliente.com.ar', 30000, 1050, '2017-06-05', 60, 5, 1),
(3, 'jherre@hotmail.com', 'sgerez@yahoo.com.ar', 15000, 525, '2017-06-10', 15, 4, 2),
(4, 'jmuñoz@hotmail.com', 'sgerez@yahoo.com.ar', 20060, 702.1, '2017-07-09', 34, 8, 2),
(5, 'hrodilla@hotmail.com', 'sgerez@yahoo.com.ar', 32300, 1130.5, '2017-07-14', 19, 3, 2),
(6, 'pperez@hotmail.com', 'jnav@gmail.com', 47250, 1653.75, '2017-07-22', 27, 7, 3),
(10, 'rfermis@yahoo.com.ar', 'jh@yahoo.com.ar', 9000, 315, '2017-07-04', 18, 5, 3),
(14, 'hrodilla@hotmail.com', 'cliente@cliente.com.ar', 204000, 7140, '2017-07-10', 120, 3, 3),
(16, 'aespinosa@hotmail.com', 'cliente@cliente.com.ar', 801000, 28035, '2017-07-14', 890, 6, 3),
(17, 'juans@hotmail.com', 'cliente@cliente.com.ar', 350000, 3570, '2016-04-09', 20, 1, 1),
(18, 'juans@hotmail.com', 'cliente@cliente.com.ar', 500000, 11436, '2016-11-19', 190, 1, 1);

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
  `perfil` varchar(7) COLLATE utf8_spanish2_ci NOT NULL DEFAULT 'cliente',
  `estado` char(1) COLLATE utf8_spanish2_ci DEFAULT 'a'
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `cliente`:
--

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nombre`, `apellido`, `dni`, `passw`, `telefono`, `correo`, `perfil`, `estado`) VALUES
(1, 'jose', 'hernandez', '22091876', 'abcd', '12312334', 'jh@yahoo.com.ar', 'cliente', 'a'),
(2, 'juan', 'roman', '22091812', '1112', '1762334', 'jr@hotmail.com.ar', 'cliente', 'a'),
(3, 'cliente', 'cliente', '88000000', 'cliente', '1111111', 'cliente@cliente.com.ar', 'cliente', 'a'),
(4, 'sebastian', 'gerez', '92038931', 'gty453', '113400980', 'sgerez@yahoo.com.ar', 'cliente', 'a'),
(5, 'jose', 'jose', '9876876', '897', '987687', 'jose@jose.com', 'cliente', 'a'),
(8, 'juan', 'naveira', '34908776', '1010', '45678890', 'jnav@gmail.com', 'cliente', 'a'),
(10, 'aaaa', 'aaaaa', '234343', 'sdfdsdfd', '45454543', 'sss@yahoo.com.ar', 'cliente', 'a'),
(11, 'www', 'ffff', '324324', '2123', '2112112', 'sdasd@yahoo.com.ar', 'cliente', 'b'),
(12, 'ggg', 'gggg', '234323232', '23432', '23423432', 'ggg', 'cliente', 'b'),
(13, 'otro', 'otro', '123232', '213', '987665', 'otro', 'cliente', 'b'),
(17, '', '', '', '', '', '', 'cliente', 'a'),
(18, NULL, NULL, NULL, NULL, NULL, NULL, 'cliente', 'a'),
(20, 'juan', NULL, NULL, NULL, NULL, NULL, 'cliente', 'a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_empleado` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL,
  `perfil` varchar(13) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido` varchar(35) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dni` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `sueldo` float DEFAULT NULL,
  `passw` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `correo` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` char(1) COLLATE utf8_spanish2_ci DEFAULT 'a'
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `empleados`:
--   `id_sucursal`
--       `sucursal` -> `id_sucursal`
--

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `id_sucursal`, `perfil`, `nombre`, `apellido`, `dni`, `foto`, `fecha_nac`, `sueldo`, `passw`, `telefono`, `correo`, `estado`) VALUES
(2, 1, 'encargado', 'carlos', 'gutie', '99999991', '../../../assets/fotos/empleados/99999991.jpg', '1987-01-29', 23000, '1111', '1909872651', 'encargado@encargado.com.ar', 'a'),
(3, 1, 'empleado', 'daniel', 'gomez', '88812345', '../../../assets/fotos/empleados/88812345.jpg', '1990-04-21', 9800, '0000', '1221334433', 'empleado@empleado.com', 'a'),
(4, 1, 'administrador', 'pablo', 'perez', '33210909', '../../../assets/fotos/empleados/33210909.jpg', '1987-09-05', 50000, '3333', '34217777', 'admin@admin.com', 'a'),
(6, 1, 'empleado', 'javier', 'lombs', '34909221', '../../../assets/fotos/empleados/34909221.jpg', '1991-05-19', 23500, '4555', '89990012', 'jlombs@hotmail.com', 'a'),
(8, 1, 'empleado', 'lucas', 'minetti', '3490966666', 'empleado', '1988-09-27', 30000, '00000', '45697777', 'lminet@gmail.com', 'b'),
(10, 3, 'encargado', 'jose', 'pereyra soler', '22900001', '../../../assets/fotos/empleados/22900001.jpg', '1983-03-05', 40000, 'akil89', '149008765', 'jpereysoler@yahoo.com.ar', 'a'),
(11, 3, 'empleado', 'matias', 'perez', '449999023', '../../../assets/fotos/empleados/449999023.jpg', '1994-12-11', 17890, '34560yahoo', '56789999', 'mattperez@hotmail.com', 'a'),
(12, 3, 'encargado', 'maría eugenia', 'montero', '99000111', '../../../assets/fotos/empleados/99000111.jpg', '1993-09-10', 38000, '78hyte', '42563900', 'mmontero@hotmail.com', 'a'),
(13, 3, 'empleado', 'luciana', 'santos', '77766110', '../../../assets/fotos/empleados/77766110.jpg', '1994-05-18', 22780, 'santeso1234', '76530000', 'lsantos@gmail.com', 'a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propiedad`
--

CREATE TABLE IF NOT EXISTS `propiedad` (
  `id_propiedad` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL,
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
  `foto1` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto2` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto3` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto4` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre_duenio` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido_duenio` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dni` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `passw` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `correo` varchar(40) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `dias_alquiler` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `propiedad`:
--

--
-- Volcado de datos para la tabla `propiedad`
--

INSERT INTO `propiedad` (`id_propiedad`, `id_sucursal`, `tipo_prop`, `num_piso`, `num_depto`, `direccion`, `provincia`, `localidad`, `disponibilidad_alquiler`, `disponibilidad_venta`, `precio_alquiler`, `precio_venta`, `estado`, `foto1`, `foto2`, `foto3`, `foto4`, `nombre_duenio`, `apellido_duenio`, `dni`, `passw`, `telefono`, `correo`, `fecha_nac`, `dias_alquiler`) VALUES
(1, 2, 'casa', NULL, NULL, 'AV. Sarmiento 500', 'capital federal', 'capital federal', 'sí', 'sí', 950, 500000, 'a', '../../../assets/fotos/propiedades/casa1/1.jpg', '../../../assets/fotos/propiedades/casa1/2.jpg', '../../../assets/fotos/propiedades/casa1/3.jpg', NULL, 'Juan', 'Soreyra', '23009281', 'pepe', '1123456744', 'juans@hotmail.com', '1990-06-12', NULL),
(2, 2, 'casa', NULL, NULL, 'Av. Hipolito Yrigoyen 8900', 'buenos aires', 'temperley', 'no', 'sí', NULL, 1000000, 'a', '../../../assets/fotos/propiedades/casa2/1.jpg', '../../../assets/fotos/propiedades/casa2/2.jpg', '../../../assets/fotos/propiedades/casa2/3.jpg', NULL, 'sebastian', 'gonzales', '34909245', '34002017', '45673092', 'sgonzals@gmail.com', '1981-12-13', NULL),
(3, 1, 'departemento', 3, 'A', 'Av. Sante Fe 3000', 'capital federal', 'capital federal', 'sí', 'no', 1700, NULL, 'a', '../../../assets/fotos/propiedades/dpto1/1.jpg', '../../../assets/fotos/propiedades/dpto1/2.jpg', '../../../assets/fotos/propiedades/dpto1/3.jpg', NULL, 'hector', 'rodilla', '36777001', 'password', '1522099066', 'hrodilla@hotmail.com', '1978-05-27', NULL),
(4, 3, 'departemento', 1, 'D', 'Av. Belgrano 1450', 'buenos aires', 'avellaneda', 'sí', 'no', 1000, NULL, 'a', '../../../assets/fotos/propiedades/dpto2/1.jpg', '../../../assets/fotos/propiedades/dpto2/2.jpg', '../../../assets/fotos/propiedades/dpto2/3.jpg', '../../../assets/fotos/propiedades/dpto2/4.jpg', 'jose', 'herrera', '26997001', 'pasw', '1522049011', 'jherre@hotmail.com', '0000-00-00', NULL),
(5, 1, 'casa', 0, '0', 'Av. Pueyrredon 2800', 'capital federal', 'capital federal', 'sí', 'sí', 500, 670000, 'b', '../../../assets/fotos/propiedades/casa3/1.jpg', '../../../assets/fotos/propiedades/casa3/2.jpg', '../../../assets/fotos/propiedades/casa3/3.jpg', NULL, 'rodrigo', 'fermis', '16779001', 'password', '1525093066', 'rfermis@yahoo.com.ar', '0000-00-00', NULL),
(6, 3, 'departemento', 3, '3', 'Av. Alcorta 3000', 'capital federal', 'capital federal', 'sí', 'no', 900, NULL, 'a', '../../../assets/fotos/propiedades/dpto3/1.jpg', '../../../assets/fotos/propiedades/dpto3/2.jpg', '../../../assets/fotos/propiedades/dpto3/3.jpg', '../../../assets/fotos/propiedades/dpto3/4.jpg', 'adrian', 'espinosa', '36557001', 'password', '1522099001', 'aespinosa@hotmail.com', '0000-00-00', NULL),
(7, 1, 'departemento', 5, 'A', 'Av. Sante Fe 3100', 'capital federal', 'capital federal', 'sí', 'no', 1750, NULL, 'a', '../../../assets/fotos/propiedades/dpto4/1.jpg', '../../../assets/fotos/propiedades/dpto4/2.jpg', '../../../assets/fotos/propiedades/dpto4/3.jpg', '../../../assets/fotos/propiedades/dpto4/4.jpg', 'pablo', 'perez', '36777022', 'password', '1572797066', 'pperez@hotmail.com', '0000-00-00', NULL),
(8, 2, 'casa', 0, '0', 'Av. Sante Fe 2000', 'capital federal', 'capital federal', 'sí', 'sí', 590, 2000000, 'a', '../../../assets/fotos/propiedades/casa4/1.jpg', '../../../assets/fotos/propiedades/casa4/2.jpg', '../../../assets/fotos/propiedades/casa4/3.jpg', NULL, 'jose', 'muñoz', '35723001', 'password', '1522091234', 'jmuñoz@hotmail.com', '1988-06-23', NULL),
(9, 0, 'casa', 1, '', 'soler 333', 'soler', 'soler', NULL, 'sí', 444, 5000000, 'a', 'Array', '', '', '', 'juan', 'solis', '8888888', NULL, '898989', 'jsoler@yahoo,com.ar', '1991-11-12', NULL);

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
(2, 'Inmobiliaria Rodolfo Monte, venta y alquiler ', 'capital federal', 'capital federal', 'La Pampa 5029', '12340988', NULL, NULL, NULL, -34.579466, -58.479797),
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
  `fecha` date NOT NULL,
  `id_propiedad` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- RELACIONES PARA LA TABLA `venta`:
--

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`id`, `correo_due`, `correo_cli`, `precio`, `comision`, `fecha`, `id_propiedad`, `id_sucursal`) VALUES
(2, 'rfermis@yahoo.com.ar', 'jose@jose.com', 670000, 32160, '2017-07-14', 5, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`),
  ADD UNIQUE KEY `dni` (`dni`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `propiedad`
--
ALTER TABLE `propiedad`
  MODIFY `id_propiedad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id_sucursal` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
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
