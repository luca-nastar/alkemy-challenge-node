const { Op } = require("sequelize");
const Character = require("../Models/characters");
const Genre = require("../Models/genres");
const Movie = require("../Models/movies");

const getMovies = async (req, res) => {
	const { title = "", order = "ASC" } = req.query;

	if (title) {
		try {
			const movies = await Movie.findAll({
				attributes: ["id", "title", "release_date", "rating", "cover_img"],
				order: [["release_date", order]],
				include: [
					{
						model: Character,
						attributes: ["name"],
						through: { attributes: [] },
					},
					{
						model: Genre,
						attributes: ["name"],
						through: { attributes: [] },
					},
				],
				where: {
					[Op.or]: {
						title: { [Op.like]: `%${title}%` },
					},
				},
			});

			if (movies.length === 0) {
				return res.status(200).json({ ok: false, msg: "No hay datos" });
			}

			return res.status(200).json({ ok: true, movies });
		} catch (error) {
			return res.status(500).json({ ok: false, msg: "Error del servidor" });
		}
	}

	try {
		const movies = await Movie.findAll({
			attributes: ["cover_img", "title", "release_date"],
			where: {
				isActive: true,
			},
		});

		if (!movies) {
			return res.status(200).json({ ok: false, msg: "No hay datos" });
		}
		return res.status(200).json({ ok: true, movies });
	} catch (error) {
		return res.status(500).json({ ok: false, msg: "Error del servidor" });
	}
};

const addMovie = async (req, res) => {
	const movieData = req.body;

	try {
		await Movie.create(movieData);

		return res
			.status(200)
			.json({ ok: true, msg: "Pelicula creada correctamente!" });
	} catch ({ errors }) {
		let msg = "";
		errors.forEach((error) => {
			if (error.type === "notNull Violation") {
				msg = "Todos los campos son requeridos.";
			}

			if (error.type === "unique violation") {
				msg = "Esa pelicula ya existe.";
			}
		});

		if (msg !== "") {
			return res.status(400).json({ ok: false, msg });
		}

		return res
			.status(500)
			.json({ ok: false, msg: "Error al registrar la pelicula." });
	}
};

const editMovie = async (req, res) => {
	const { id } = req.params;
	const newMovieData = req.body;

	try {
		const updatedMovie = await Movie.update(newMovieData, {
			where: { id },
		});

		if (updatedMovie.includes(0)) {
			return res
				.status(400)
				.json({ ok: false, msg: "No se pudo editar la pelicula." });
		}
		return res
			.status(200)
			.json({ ok: true, msg: "Pelicula editada correctamente" });
	} catch ({ errors }) {
		return res
			.status(500)
			.json({ ok: false, msg: "Error al editar la pelicula.", errors });
	}
};

const deleteMovie = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedMovie = await Movie.update(
			{ isActive: false },
			{ where: { id } }
		);
		if (deletedMovie.includes(0)) {
			return res
				.status(400)
				.json({ ok: false, msg: "No se pudo eliminar la pelicula." });
		}
		return res
			.status(200)
			.json({ ok: true, msg: "Pelicula eliminada correctamente" });
	} catch ({ errors }) {
		return res
			.status(500)
			.json({ ok: false, msg: "Error al eliminar la pelicula." });
	}
};

module.exports = {
	getMovies,
	addMovie,
	editMovie,
	deleteMovie,
};
