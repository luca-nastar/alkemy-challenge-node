const { decodeToken, createAccessToken } = require("../Services/jwt");
const dayjs = require("dayjs");
const User = require("../Models/users");

const isExpired = (token) => {
	const { exp } = decodeToken(token);

	const currentDate = dayjs().unix();

	if (currentDate > exp) {
		return true;
	} else {
		return false;
	}
};

const refreshAccessToken = async (req, res) => {
	const { refreshToken } = req.body;

	const isTokenExpired = isExpired(refreshToken);

	if (isTokenExpired) {
		return res.status(400).json({ ok: false, msg: "El token ha expirado" });
	}

	try {
		const { id } = decodeToken(refreshToken);
		const user = await User.findByPk(id);

		if (!user) {
			return res.status(404).json({ ok: false, msg: "Usuario no encontrado." });
		}

		return res
			.status(200)
			.json({ ok: true, accessToken: createAccessToken(user), refreshToken });
	} catch (error) {
		return res.status(500).json({ ok: false, msg: "Error del servidor" });
	}
};

module.exports = {
	refreshAccessToken,
};
