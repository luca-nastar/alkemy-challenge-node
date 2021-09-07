exports.addMovieValidator = (req, res, next) => {
	const { title, release_date, rating, cover_img } = req.body;

	const urlRegexp =
		/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

	if (!title || !cover_img || !release_date || !rating) {
		return res.status(400).json({ ok: false, msg: "Faltan datos requeridos" });
	}

	if (cover_img && !urlRegexp.test(cover_img)) {
		return res
			.status(400)
			.json({ ok: false, msg: "La URL de la imagen ingresada no es valida" });
	}

	next();
};

exports.editMovieValidator = (req, res, next) => {
	const { title, release_date, rating, cover_img } = req.body;

	const urlRegexp =
		/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

	if (!title && !rating && !cover_img && !release_date) {
		return res.status(400).json({ ok: false, msg: "Faltan datos" });
	}

	if (cover_img && !urlRegexp.test(cover_img)) {
		return res
			.status(400)
			.json({ ok: false, msg: "La URL ingresada no es valida" });
	}

	next();
};
