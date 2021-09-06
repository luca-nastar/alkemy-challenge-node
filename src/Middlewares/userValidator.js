exports.loginValidator = (req, res, next) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res
			.status(401)
			.json({ ok: false, msg: "Usuario y/o Contraseña incorrecta." });
	}
	if (username.length < 5 || password.length < 5) {
		return res
			.status(401)
			.json({ ok: false, msg: "Usuario y/o Contraseña incorrecta." });
	}

	next();
};

exports.registerValidatior = (req, res, next) => {
	const { full_name, email, username, password } = req.body;

	if (!full_name || !email || !username || !password) {
		return res
			.status(400)
			.json({ ok: false, msg: "Todos los campos son requeridos" });
	}

	if (
		typeof full_name !== "string" ||
		typeof email !== "string" ||
		typeof username !== "string"
	) {
		return res
			.status(400)
			.json({ ok: false, msg: "Verifique los datos e intente nuevamente" });
	}
	if (username.length < 5 || password.length < 5) {
		return res.status(400).json({
			ok: false,
			msg: "El usuario y/o la contraseña son demaciado cortos",
		});
	}

	next();
};
