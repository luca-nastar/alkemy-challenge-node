const { Op } = require("sequelize");
const Character = require("../Models/characters");
const Movie = require("../Models/movies");

const getCharacters = async (req, res) => {
	const { name = null, age = null, weight = null } = req.query;

	if (name || age || weight) {
		try {
			const characters = await Character.findAll({
				attributes: ["id", "name", "age", "weight", "history", "image"],
				include: {
					model: Movie,
					attributes: ["title"],
					through: { attributes: [] },
				},
				where: {
					[Op.or]: {
						name: { [Op.like]: `%${name}%` },
						age,
						weight,
					},
				},
			});

			if (characters.length === 0) {
				return res.status(200).json({ ok: false, msg: "No hay datos" });
			}

			return res.json({ characters });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ ok: false, msg: "Error del servidor" });
		}
	}

	try {
		const characters = await Character.findAll({
			attributes: ["name", "image"],
			where: { isActive: true },
		});

		if (!characters) {
			return res.status(200).json({ ok: true, msg: "No hay datos" });
		}

		return res.status(200).json({ ok: true, characters });
	} catch (error) {
		return res.status(500).json({ ok: false, msg: "Error del servidor." });
	}
};

const addCharacter = async (req, res) => {
	const characterData = req.body;
	try {
		await Character.create(characterData);
		return res
			.status(200)
			.json({ ok: true, msg: "Personaje agregado correctamente" });
	} catch ({ errors }) {
		let msg = "";
		errors.forEach((error) => {
			if (error.type === "notNull Violation") {
				msg = "Todos los campos son requeridos.";
			}

			if (error.type === "unique violation") {
				msg = "Ese personaje ya existe.";
			}
		});

		if (msg !== "") {
			return res.status(400).json({ ok: false, msg });
		}

		return res
			.status(500)
			.json({ ok: false, msg: "Error al registrar al usuario." });
	}
};

const editCharacter = async (req, res) => {
	const { id } = req.params;
	const newCharacterData = req.body;

	try {
		const updatedCharacter = await Character.update(newCharacterData, {
			where: { id },
		});

		if (updatedCharacter.includes(0)) {
			return res
				.status(400)
				.json({ ok: false, msg: "No se pudo editar el personaje." });
		}

		return res.status(200).json({
			ok: true,
			msg: "Personaje editado correctamente.",
		});
	} catch ({ errors }) {
		let msg = "";
		errors.forEach((error) => {
			if (error.type === "unique violation") {
				msg = "Ya existe otro personaje con ese nombre";
			}
		});

		if (msg !== "") {
			return res.status(400).json({ ok: false, msg });
		}

		return res
			.status(500)
			.json({ ok: false, msg: "Error al registrar al usuario." });
	}
};

const deleteCharacter = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedCharacter = await Character.update(
			{ isActive: false },
			{
				where: { id },
			}
		);

		if (deletedCharacter.includes(0)) {
			return res
				.status(400)
				.json({ ok: false, msg: "No se pudo eliminar el personaje." });
		}

		return res.status(200).json({
			ok: true,
			msg: "Personaje eliminado.",
		});
	} catch (error) {
		return res
			.status(500)
			.json({ ok: false, msg: "Error al eliminar al usuario." });
	}
};

module.exports = {
	getCharacters,
	addCharacter,
	editCharacter,
	deleteCharacter,
};
