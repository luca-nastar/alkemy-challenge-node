const bcrypt = require("bcrypt");
const User = require("../Models/users");
const { createAccessToken, createRefreshToken } = require("../Services/jwt");

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const userStored = await User.findOne({
			attributes: ["id", "full_name", "email", "username", "password"],
			where: {
				username,
			},
		});

		if (!userStored) {
			return res
				.status(401)
				.json({ ok: false, msg: "Usuario y/o contraseña incorrectos." });
		}

		bcrypt.compare(password, userStored.password, (err, check) => {
			if (err) {
				return res.status(500).json({ ok: false, msg: "Error del servidor." });
			}
			if (!check) {
				return res
					.status(401)
					.json({ ok: false, msg: "Usuario y/o contraseña incorrectos." });
			}

			return res.status(200).json({
				ok: true,
				accessToken: createAccessToken(userStored),
				refreshToken: createRefreshToken(userStored),
			});
		});
	} catch (error) {
		return res.status(500).json({ ok: false, msg: "Error del servidor." });
	}
};

const addUser = async (req, res) => {
	const { full_name, email, username, password } = req.body;

	const userData = {
		full_name,
		email,
		username,
		password: password ? bcrypt.hashSync(password, 10) : null,
	};

	try {
		await User.create(userData);

		res.status(200).json({ ok: true, msg: "Usuario creado correctamente." });
	} catch ({ errors }) {
		let msg = "";
		errors.forEach((error) => {
			if (error.type === "notNull Violation") {
				msg = "Todos los campos son requeridos.";
			}

			if (error.type === "unique violation") {
				msg = "El usuario ya existe.";
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

module.exports = {
	login,
	addUser,
};
