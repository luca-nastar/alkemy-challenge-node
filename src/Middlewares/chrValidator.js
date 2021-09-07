exports.addChrvalidator = (req, res, next) => {
	const { name, age, weight, history, image } = req.body;

	const urlRegexp =
		/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

	if (!name || !age || !weight || !history || !image) {
		return res.status(400).json({ ok: false, msg: "Faltan datos requeridos" });
	}

	if (image && !urlRegexp.test(image)) {
		return res
			.status(400)
			.json({ ok: false, msg: "La URL de la imagen ingresada no es valida" });
	}

	next();
};

exports.editChrValidator = (req, res, next) => {
	const { name, age, weight, history, image } = req.body;

	const urlRegexp =
		/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

	if (!name && !age && !weight && !history && !image) {
		return res
			.status(400)
			.json({ ok: false, msg: "No se esta editando ningun campo." });
	}

	if (image && !urlRegexp.test(image)) {
		return res
			.status(400)
			.json({ ok: false, msg: "La URL de la imagen ingresada no es valida" });
	}

	next();
};
