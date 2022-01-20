-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-10-2020 a las 18:50:20
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoaula`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

CREATE TABLE `actividad` (
  `idActividad` int(11) NOT NULL,
  `detalleActividad` varchar(200) NOT NULL,
  `fechaDesdeActividad` datetime NOT NULL,
  `fechaHastaActividad` datetime NOT NULL,
  `calificaconActividad` int(3) NOT NULL,
  `idContenido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `idAdministrador` int(11) NOT NULL,
  `usuarioAdministrador` int(15) NOT NULL,
  `contrasenaAdministrador` int(15) NOT NULL,
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion`
--

CREATE TABLE `calificacion` (
  `idCalificacion` int(11) NOT NULL,
  `numeroCalificacion` float NOT NULL,
  `observacionCalificacion` varchar(60) NOT NULL,
  `idEstudiante` int(11) NOT NULL,
  `idCurso` int(11) NOT NULL,
  `idMateria` int(11) NOT NULL,
  `idContenido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

CREATE TABLE `clase` (
  `idClase` int(11) NOT NULL,
  `tituloClase` varchar(20) NOT NULL,
  `videoClase` varchar(60) NOT NULL,
  `descripcionClase` varchar(20) DEFAULT NULL,
  `idContenido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenido`
--

CREATE TABLE `contenido` (
  `idContenido` int(11) NOT NULL,
  `archivoContenidoDocente` varchar(300) DEFAULT NULL,
  `tituloContenido` varchar(300) DEFAULT NULL,
  `descripcionContenido` varchar(600) DEFAULT NULL,
  `fechaDesdeContenido` datetime DEFAULT NULL,
  `fechaHastaContenido` datetime DEFAULT NULL,
  `calificaconContenido` float DEFAULT NULL,
  `idMateria` int(11) NOT NULL,
  `idQuimestre` int(11) NOT NULL,
  `idTipoActividad` int(11) NOT NULL,
  `idParcial` int(11) NOT NULL,
  `actualFechaContenido` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contenido`
--

INSERT INTO `contenido` (`idContenido`, `archivoContenidoDocente`, `tituloContenido`, `descripcionContenido`, `fechaDesdeContenido`, `fechaHastaContenido`, `calificaconContenido`, `idMateria`, `idQuimestre`, `idTipoActividad`, `idParcial`, `actualFechaContenido`) VALUES
(1, 'proyectoaula/clases/video1.mp4', 'Clase 1: Como actual la naturaleza', 'En el presente video se explica como actúan los diferentes seres vivos', NULL, NULL, NULL, 3, 1, 1, 1, '2020-09-23 00:48:53'),
(2, 'proyectoaula/clases/video2.mp4', 'Clase 1: La sociedad', 'La sociedad y el mundo moderno en la actualidad', NULL, NULL, NULL, 4, 1, 1, 1, '2020-09-23 00:49:14'),
(3, 'proyectoaula/clases/video3.mp4', 'Clase 1: Expresion oral', 'video de la expresión', NULL, NULL, NULL, 1, 1, 1, 1, '2020-09-23 00:49:30'),
(4, 'proyectoaula/clases/video4.mp4', 'Clase 1: Video de plano cartesiano', NULL, NULL, NULL, NULL, 2, 1, 1, 1, '2020-09-23 00:49:54'),
(5, 'proyectoaula/clases/video2.mp4', 'Clase 2: video se reoiten', NULL, NULL, NULL, NULL, 1, 1, 1, 2, '2020-09-24 00:50:09'),
(6, 'proyectoaula/clases/video4.mp4', 'Clase 3: Expresion oral', NULL, NULL, NULL, NULL, 1, 2, 1, 1, '2020-09-24 00:50:21'),
(7, 'proyectoaula/actividades/actividad1.docx', 'Análisis del video de expresión oral', 'Cumplir con todos los ítem propuesto en el archivo', '2020-10-12 21:46:45', '2020-10-30 21:46:45', 20, 1, 1, 2, 1, '2020-10-12 21:46:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `idCurso` int(11) NOT NULL,
  `nombreCurso` varchar(60) NOT NULL,
  `Paralelo` varchar(10) NOT NULL,
  `fotoCurso` varchar(60) DEFAULT NULL,
  `descripcionCurso` varchar(300) DEFAULT NULL,
  `anioLectivo` varchar(10) NOT NULL,
  `idDocente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`idCurso`, `nombreCurso`, `Paralelo`, `fotoCurso`, `descripcionCurso`, `anioLectivo`, `idDocente`) VALUES
(1, 'Decimo', 'A', 'proyectoaula/imgCurso/Decimo.png', 'El presente curso esta dirigudo por un tutor, el cual estara dispuesto a escuchar al estudiante. El curso cuenta con cuatro materias como Lengua y Literatura, Matemáticas, Ciencias Natural, Estudios Sociales', '2019', 2),
(2, 'Cuarto', 'B', 'proyectoaula/imgCurso/Cuarto.png', 'Hoy empieza una aventura digna del superHeroe que eres. El curso cuenta con cuatro materias como Lengua y Literatura, Matemáticas, Ciencias Natural, Estudios Sociale.', '2019', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE `docente` (
  `idDocente` int(11) NOT NULL,
  `usuarioDocente` varchar(15) NOT NULL,
  `contrasenaDocente` varchar(15) NOT NULL,
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`idDocente`, `usuarioDocente`, `contrasenaDocente`, `idPersona`) VALUES
(1, '0911111111', '0911111111', 1),
(2, '0922222222', '0922222222', 2),
(3, '0933333333', '0933333333', 3),
(4, '0944444444', '0944444444', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `idEstudiante` int(11) NOT NULL,
  `usuarioEstudiante` varchar(20) NOT NULL,
  `contrasenaEstudiante` varchar(20) NOT NULL,
  `idPersona` int(11) NOT NULL,
  `idCurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`idEstudiante`, `usuarioEstudiante`, `contrasenaEstudiante`, `idPersona`, `idCurso`) VALUES
(1, '0912222222', '0912222222', 5, 1),
(2, '0923333333', '0923333333', 6, 1),
(3, '0934444444', '0934444444', 7, 1),
(4, '2', '2', 8, 1),
(5, '0954444444', '0954444444', 9, 2),
(6, '1', '1', 10, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `idMateria` int(11) NOT NULL,
  `nombreMateria` varchar(50) NOT NULL,
  `fotoMateria` varchar(60) NOT NULL,
  `idCurso` int(11) NOT NULL,
  `idDocente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`idMateria`, `nombreMateria`, `fotoMateria`, `idCurso`, `idDocente`) VALUES
(1, 'Lengua y Literatura', 'proyectoaula/imgMateria/lenguayliteratura10.png', 1, 1),
(2, 'Matemáticas', 'proyectoaula/imgMateria/matematica10.png', 1, 2),
(3, 'Ciencias Natura', 'proyectoaula/imgMateria/cienciasnaturales10.png', 1, 1),
(4, 'Estudios Social', 'proyectoaula/imgMateria/estudiossociales10.png', 1, 3),
(5, 'Lengua y Literatura', 'proyectoaula/imgMateria/lenguayliteratura4.png', 2, 4),
(6, 'Matemáticas', 'proyectoaula/imgMateria/matematica4.png', 2, 4),
(7, 'Ciencias Natural', 'proyectoaula/imgMateria/cienciasnaturales4.png', 2, 4),
(8, 'Estudios Sociales', 'proyectoaula/imgMateria/estudiossociales4.png', 2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parcial`
--

CREATE TABLE `parcial` (
  `idParcial` int(11) NOT NULL,
  `nombreParcial` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `parcial`
--

INSERT INTO `parcial` (`idParcial`, `nombreParcial`) VALUES
(1, 'Primer Parcial'),
(2, 'Segundo Parcial'),
(3, 'Tercer Parcial');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `idPersona` int(11) NOT NULL,
  `cedulaPersona` varchar(10) NOT NULL,
  `fotoPersona` varchar(60) DEFAULT NULL,
  `primerNombrePersona` varchar(15) NOT NULL,
  `segundoNombrePersona` varchar(15) NOT NULL,
  `primerApellidoPersona` varchar(15) NOT NULL,
  `segundoApellidoPersona` varchar(15) NOT NULL,
  `telefonoPersona` varchar(15) DEFAULT NULL,
  `correoPersona` varchar(40) DEFAULT NULL,
  `edadPersona` datetime NOT NULL,
  `estadoPersona` varchar(2) NOT NULL,
  `idSexo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`idPersona`, `cedulaPersona`, `fotoPersona`, `primerNombrePersona`, `segundoNombrePersona`, `primerApellidoPersona`, `segundoApellidoPersona`, `telefonoPersona`, `correoPersona`, `edadPersona`, `estadoPersona`, `idSexo`) VALUES
(1, '0911111111', 'proyectoaula/imgPersona/0911111111.png', 'Gabriela', 'Ariana', 'Castro', 'Panchana', '0987675432', 'gabrielacastro12@gmail.com', '1990-11-28 00:00:00', 'A', 2),
(2, '0922222222', 'proyectoaula/imgPersona/0922222222.png', 'Carlos', 'Marcos', 'Gonzales', 'Balon', '0978954321', 'carlosgonzales43@gmail.com', '1982-09-29 00:00:00', 'A', 1),
(3, '0933333333', 'proyectoaula/imgPersona/0933333333.png', 'Vicente', 'Juan', 'Peña', 'Urresta', '0989876564', 'vicentepenia5@gmail.com', '1970-06-29 00:00:00', 'A', 1),
(4, '0944444444', 'proyectoaula/imgPersona/0944444444.png', 'Kerly', 'Angi', 'Polinesia', 'Domínguez', '0978954321', 'kerlypolinesia54@gmail.com', '1990-09-29 00:00:00', 'A', 2),
(5, '0912222222', 'proyectoaula/imgPersona/0912222222.png', 'Pedro', 'Pepe', 'Gonzales', 'Colon', '0999893421', 'pegropeper@gmail.com', '2008-10-09 00:00:00', 'A', 1),
(6, '0923333333', 'proyectoaula/imgPersona/0923333333.png', 'Jimena', 'Gema', 'Artiaga', 'Reyes', '0984512654', 'jimenagema1@gmail.com', '2008-02-12 00:00:00', 'A', 2),
(7, '0934444444', 'proyectoaula/imgPersona/0934444444.png', 'Pedro', 'Yandri', 'Balon', 'Catagua', '0987125412', 'pedrobalon6@gmail.com', '2008-02-15 00:00:00', 'A', 1),
(8, '0945555555', 'proyectoaula/imgPersona/0945555555.png', 'Fernanda', 'Ana', 'Torres', 'Montalban', '0989876754', 'fernanatorresk@gmail.com', '2009-07-17 00:00:00', 'A', 2),
(9, '0954444444', 'proyectoaula/imgPersona/0954444444.png', 'Anibal', 'Angel', 'Gonzales', 'Colon', '0987125412', 'anibalgonzalez23@gmai.com', '2012-02-10 00:00:00', 'A', 1),
(10, '0964444444', 'proyectoaula/imgPersona/0964444444.png', 'Anabel', 'zulay', 'Balon', 'Panchana', '0909098767', 'anabelbalon7@gmail.com', '2012-09-29 00:00:00', 'A', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quimestre`
--

CREATE TABLE `quimestre` (
  `idQuimestre` int(11) NOT NULL,
  `nombreQuimestre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `quimestre`
--

INSERT INTO `quimestre` (`idQuimestre`, `nombreQuimestre`) VALUES
(1, 'Primer Quimestre'),
(2, 'Segundo Quimestre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resolucioncontenidoestudiante`
--

CREATE TABLE `resolucioncontenidoestudiante` (
  `idresolucioncontenidoestudiante` int(11) NOT NULL,
  `archivoEstudiante` varchar(300) DEFAULT NULL,
  `fechaEntrega` datetime NOT NULL,
  `idEstudiante` int(11) NOT NULL,
  `idContenido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sexo`
--

CREATE TABLE `sexo` (
  `idSexo` int(11) NOT NULL,
  `detalleSexo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sexo`
--

INSERT INTO `sexo` (`idSexo`, `detalleSexo`) VALUES
(1, 'Masculino'),
(2, 'Femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoactividad`
--

CREATE TABLE `tipoactividad` (
  `idTipoActividad` int(11) NOT NULL,
  `nombreTipoActividad` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipoactividad`
--

INSERT INTO `tipoactividad` (`idTipoActividad`, `nombreTipoActividad`) VALUES
(1, 'Clase'),
(2, 'Tarea'),
(3, 'Taller'),
(4, 'Proyecto'),
(5, 'Leccion'),
(6, 'Examen');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD PRIMARY KEY (`idActividad`),
  ADD KEY `idContenido` (`idContenido`);

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`idAdministrador`),
  ADD KEY `idPersona` (`idPersona`);

--
-- Indices de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  ADD PRIMARY KEY (`idCalificacion`),
  ADD KEY `idEstudiante` (`idEstudiante`),
  ADD KEY `idActividad` (`idContenido`),
  ADD KEY `idCurso_2` (`idCurso`);

--
-- Indices de la tabla `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`idClase`),
  ADD KEY `idContenido` (`idContenido`);

--
-- Indices de la tabla `contenido`
--
ALTER TABLE `contenido`
  ADD PRIMARY KEY (`idContenido`),
  ADD KEY `idMateria` (`idMateria`),
  ADD KEY `idQuimestre` (`idQuimestre`),
  ADD KEY `idUnidad` (`idTipoActividad`),
  ADD KEY `idParcial` (`idParcial`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`idCurso`),
  ADD KEY `idDocente` (`idDocente`);

--
-- Indices de la tabla `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`idDocente`),
  ADD KEY `idPersona` (`idPersona`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`idEstudiante`),
  ADD KEY `idPersona` (`idPersona`),
  ADD KEY `idCurso` (`idCurso`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`idMateria`),
  ADD KEY `idDocente` (`idDocente`),
  ADD KEY `idCurso` (`idCurso`);

--
-- Indices de la tabla `parcial`
--
ALTER TABLE `parcial`
  ADD PRIMARY KEY (`idParcial`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`idPersona`),
  ADD KEY `idSexo` (`idSexo`);

--
-- Indices de la tabla `quimestre`
--
ALTER TABLE `quimestre`
  ADD PRIMARY KEY (`idQuimestre`);

--
-- Indices de la tabla `resolucioncontenidoestudiante`
--
ALTER TABLE `resolucioncontenidoestudiante`
  ADD PRIMARY KEY (`idresolucioncontenidoestudiante`),
  ADD KEY `idActividad` (`idEstudiante`),
  ADD KEY `idTipoActividad` (`idContenido`);

--
-- Indices de la tabla `sexo`
--
ALTER TABLE `sexo`
  ADD PRIMARY KEY (`idSexo`);

--
-- Indices de la tabla `tipoactividad`
--
ALTER TABLE `tipoactividad`
  ADD PRIMARY KEY (`idTipoActividad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividad`
--
ALTER TABLE `actividad`
  MODIFY `idActividad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  MODIFY `idCalificacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clase`
--
ALTER TABLE `clase`
  MODIFY `idClase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contenido`
--
ALTER TABLE `contenido`
  MODIFY `idContenido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `idCurso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `docente`
--
ALTER TABLE `docente`
  MODIFY `idDocente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `idEstudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `parcial`
--
ALTER TABLE `parcial`
  MODIFY `idParcial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `idPersona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `quimestre`
--
ALTER TABLE `quimestre`
  MODIFY `idQuimestre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `resolucioncontenidoestudiante`
--
ALTER TABLE `resolucioncontenidoestudiante`
  MODIFY `idresolucioncontenidoestudiante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sexo`
--
ALTER TABLE `sexo`
  MODIFY `idSexo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipoactividad`
--
ALTER TABLE `tipoactividad`
  MODIFY `idTipoActividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `calificacion`
--
ALTER TABLE `calificacion`
  ADD CONSTRAINT `calificacion_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante` (`idEstudiante`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `calificacion_ibfk_2` FOREIGN KEY (`idContenido`) REFERENCES `contenido` (`idContenido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `contenido`
--
ALTER TABLE `contenido`
  ADD CONSTRAINT `contenido_ibfk_1` FOREIGN KEY (`idMateria`) REFERENCES `materia` (`idMateria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contenido_ibfk_2` FOREIGN KEY (`idQuimestre`) REFERENCES `quimestre` (`idQuimestre`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contenido_ibfk_4` FOREIGN KEY (`idParcial`) REFERENCES `parcial` (`idParcial`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contenido_ibfk_5` FOREIGN KEY (`idTipoActividad`) REFERENCES `tipoactividad` (`idTipoActividad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`idDocente`) REFERENCES `docente` (`idDocente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `docente`
--
ALTER TABLE `docente`
  ADD CONSTRAINT `docente_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `estudiante_ibfk_2` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `materia`
--
ALTER TABLE `materia`
  ADD CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`idDocente`) REFERENCES `docente` (`idDocente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `materia_ibfk_2` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`idSexo`) REFERENCES `sexo` (`idSexo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `resolucioncontenidoestudiante`
--
ALTER TABLE `resolucioncontenidoestudiante`
  ADD CONSTRAINT `resolucioncontenidoestudiante_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante` (`idEstudiante`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `resolucioncontenidoestudiante_ibfk_2` FOREIGN KEY (`idContenido`) REFERENCES `contenido` (`idContenido`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
