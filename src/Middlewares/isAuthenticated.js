const dayjs = require("dayjs");
const { decodeToken } = require("../Services/jwt");

exports.isAuthenticated = (req, res, next) => {
	const authorization = req.headers.authorization;

	if (!authorization) {
		return res
			.status(401)
			.json({ ok: false, msg: "Falta token de autenticacion." });
	}

	const token = authorization.replace(/['"]+/g, "");

	try {
		const payload = decodeToken(token);

		if (payload.exp <= dayjs().unix()) {
			return res.status(401).json({ ok: false, msg: "El token ha expirado." });
		}
	} catch (error) {
		return res.status(401).json({ ok: false, msg: "Token invalido" });
	}

	next();
};
