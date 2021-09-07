-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-09-2021 a las 14:43:11
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db-disney`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `weight` float NOT NULL,
  `history` longtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` timestamp NULL DEFAULT curtime(),
  `updatedAt` timestamp NULL DEFAULT curtime()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `characters`
--

INSERT INTO `characters` (`id`, `name`, `age`, `weight`, `history`, `image`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Buzz Lightyear', 26, 2, 'Buzz Lightyear es un personaje ficticio de la franquicia Toy Story de Pixar. Ejerce el rol de un superhéroe espacial de juguete y el de una figura de acción. Junto con el Sheriff Woody, es uno de los dos personajes principales en las cuatro películas de Toy Story.', 'https://static.wikia.nocookie.net/disney/images/d/d5/BuzzLightyear.png/revision/latest/scale-to-width-down/288?cb=20150227192829&path-prefix=es', 1, NULL, NULL),
(2, 'Sheriff Woody', 26, 3, 'El Sheriff Woody Pride, también conocido como Woody, es un personaje ficticio y protagonista principal de la franquicia Toy Story de Pixar. Sus rasgos faciales están basados en Tone Thyne, un ex animador de Disney.​', 'https://static.wikia.nocookie.net/disney/images/a/ab/Woody_4.png/revision/latest/scale-to-width-down/300?cb=20161125135228&path-prefix=es', 1, NULL, NULL),
(3, 'Stitch', 19, 4, 'El experimento 626, más conocido como Stitch, es un personaje ficticio, el protagonista de la serie animada Lilo & Stitch: The Series y las películas Lilo & Stitch, Stitch! The Movie, Lilo & Stitch 2: Stitch Has a Glitch y Leroy & Stitch.', 'https://static.wikia.nocookie.net/disney/images/5/5f/Stitch.png/revision/latest?cb=20140703072656&path-prefix=es', 1, NULL, NULL),
(4, 'Simba', 27, 5, 'Simba es el personaje protagonista de la clásica trilogía de Disney El rey león, The Lion King II: Simba\'s Pride y El rey león 3: Hakuna Matata. Se trata de la personificación de un león africano.', 'https://static.wikia.nocookie.net/disney/images/9/95/Simba.png/revision/latest?cb=20121008182056&path-prefix=es', 1, NULL, NULL),
(5, 'Rayo McQueen', 15, 6, 'Rayo McQueen es un automóvil prosopopéyico protagonista de las películas producidas por Pixar: Cars, Cars 2 y Cars 3, así como en los cortos de televisión Cars Toons, creado por John Lasseter para la última producción de Pixar antes de entrar a formar parte de Disney.', 'https://static.wikia.nocookie.net/disney/images/4/44/Rayo_McQueen.png/revision/latest?cb=20140204155911&path-prefix=es', 1, NULL, NULL),
(6, 'Mike Wazowski', 10937, 7, 'Mike Wazowski es un personaje de ficción que aparece en las películas de Disney Pixar Monsters, Inc. y Monsters University. Es un monstruo verde redondo de baja estatura con un solo ojo y patas flacas.', 'https://static.wikia.nocookie.net/disney/images/0/08/MikeWazowski.png/revision/latest?cb=20111209194806&path-prefix=es', 1, '2021-09-06 01:45:27', '2021-09-06 01:45:27'),
(7, 'Lilo Pelekai', 5, 8, 'Lilo Pelekai es un personaje ficticio, una de los protagonistas de la película Lilo & Stitch y sus secuelas. Reside en Kokawa, Hawaii.', 'https://static.wikia.nocookie.net/disney/images/2/29/LiloPelekai.png/revision/latest?cb=20130724165230&path-prefix=es', 1, '2021-09-06 01:45:34', '2021-09-06 02:41:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `character_movies`
--

CREATE TABLE `character_movies` (
  `id` int(11) NOT NULL,
  `id_character` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `createdAt` datetime DEFAULT curdate(),
  `updatedAt` datetime DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `character_movies`
--

INSERT INTO `character_movies` (`id`, `id_character`, `id_movie`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(2, 1, 2, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(3, 1, 3, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(4, 1, 4, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(5, 1, 5, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(6, 2, 1, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(7, 2, 2, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(8, 2, 3, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(9, 2, 4, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(10, 3, 6, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(11, 3, 7, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(12, 4, 8, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(13, 4, 9, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(14, 4, 10, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(15, 5, 11, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(16, 5, 12, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(17, 5, 13, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(18, 7, 6, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(19, 7, 7, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(20, 6, 14, '2021-09-06 00:00:00', '2021-09-06 00:00:00'),
(21, 6, 15, '2021-09-06 00:00:00', '2021-09-06 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Animacion'),
(2, 'Aventura'),
(7, 'Ciencia Ficcion'),
(4, 'Comedia'),
(6, 'Drama'),
(3, 'Familia'),
(5, 'Fantasia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `release_date` date NOT NULL,
  `rating` int(11) NOT NULL,
  `cover_img` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT curdate(),
  `updatedAt` timestamp NULL DEFAULT curdate(),
  `isActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `release_date`, `rating`, `cover_img`, `createdAt`, `updatedAt`, `isActive`) VALUES
(1, 'Toy Story', '1995-11-22', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/GdMDcacJra4ZmDaBIRASIpzjmU.jpg', NULL, NULL, 1),
(2, 'Toy Story 2', '1999-11-24', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mDrNOFAnDsZZdP0HIUbzeMEToYU.jpg', NULL, NULL, 1),
(3, 'Toy Story 3', '2010-06-17', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4cpGytCB0eqvRks4FAlJoUJiFPG.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(4, 'Toy Story 4', '2010-06-21', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yF1vPDuHVrAUMX5dy1tVMbAjkEL.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(5, 'Buzz Lightyear: La pelicula', '2000-08-08', 3, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bXMPdUMCiZhGvIRS0IvOBrPVrWo.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(6, 'Lilo & Stitch', '2002-06-21', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9EkzzLf3TxYrhGmEo2ZTmH49KLE.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(7, 'Lilo & Stitch 2: Stitch has a Glitch', '2005-08-29', 3, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rOUaDi6UQWhGPj33aZEQIgdKyBx.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(8, 'El Rey Leon', '1994-06-23', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(9, 'El Rey leon 2: El reino de Simba', '1998-10-24', 3, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yEALL6E8nESoI4a5SaMjnFJAXHi.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(10, 'El rey león 3: Hakuna Matata', '2004-02-09', 3, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x2SAEOXURbKDgKfdHdZ49VhPGrB.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(11, 'Cars', '2006-06-09', 3, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nCg0QukAwOJ6BFnitO3fVJrA3TT.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(12, 'Cars 2', '2011-06-16', 3, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eQo1LQs5Vo9RHVHYUhNSfMZa3VB.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(13, 'Cars 3', '2017-06-16', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4tp9W3QAbQcpanBtBceZtHD10UT.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(14, 'Monster, Inc.', '2001-11-01', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTE3BLVCpYaR71L2U8SHV22HvEr.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1),
(15, 'Monster University', '2013-06-21', 4, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4rLfeHGIyDEQsqR22iajGSLFNME.jpg', '2021-09-06 03:00:00', '2021-09-06 03:00:00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movie_genres`
--

CREATE TABLE `movie_genres` (
  `id` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_genre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movie_genres`
--

INSERT INTO `movie_genres` (`id`, `id_movie`, `id_genre`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 2, 1),
(6, 2, 4),
(7, 2, 3),
(8, 3, 1),
(9, 3, 3),
(10, 3, 4),
(11, 4, 3),
(12, 4, 2),
(13, 4, 1),
(14, 4, 4),
(15, 4, 5),
(16, 4, 6),
(17, 5, 1),
(18, 5, 3),
(19, 5, 4),
(20, 5, 2),
(21, 5, 7),
(22, 6, 1),
(23, 6, 3),
(24, 7, 1),
(25, 7, 3),
(26, 7, 4),
(27, 7, 7),
(28, 8, 3),
(29, 8, 1),
(30, 8, 6),
(31, 9, 3),
(32, 9, 2),
(33, 9, 1),
(34, 10, 3),
(35, 10, 1),
(36, 10, 4),
(37, 11, 1),
(38, 11, 2),
(39, 11, 4),
(40, 11, 3),
(41, 12, 1),
(42, 12, 2),
(43, 12, 3),
(44, 12, 4),
(45, 13, 1),
(46, 13, 2),
(47, 13, 4),
(48, 13, 3),
(49, 14, 1),
(50, 14, 4),
(51, 14, 3),
(52, 15, 1),
(53, 15, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Primer Usuario', 'primer@usuario.com', 'usuario1', '$2b$10$QZIlzIEEPnXwp/bdS7wPjuTr9j5c4GFQQx4ZwSPQCF1C87DIZgp9S', '2021-09-06 23:08:58', '2021-09-06 23:08:58');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `characters_un` (`name`);

--
-- Indices de la tabla `character_movies`
--
ALTER TABLE `character_movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `character_movie_FK` (`id_character`),
  ADD KEY `character_movie_FK_1` (`id_movie`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `genres_un` (`name`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `movies_un` (`title`);

--
-- Indices de la tabla `movie_genres`
--
ALTER TABLE `movie_genres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_genre_FK` (`id_movie`),
  ADD KEY `movie_genre_FK_1` (`id_genre`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_unique` (`email`),
  ADD UNIQUE KEY `username_unique` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `character_movies`
--
ALTER TABLE `character_movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `movie_genres`
--
ALTER TABLE `movie_genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `character_movies`
--
ALTER TABLE `character_movies`
  ADD CONSTRAINT `character_movie_FK` FOREIGN KEY (`id_character`) REFERENCES `characters` (`id`),
  ADD CONSTRAINT `character_movie_FK_1` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`);

--
-- Filtros para la tabla `movie_genres`
--
ALTER TABLE `movie_genres`
  ADD CONSTRAINT `movie_genre_FK` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`),
  ADD CONSTRAINT `movie_genre_FK_1` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
