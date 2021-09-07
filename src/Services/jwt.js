const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const createAccessToken = (data) => {
	const { id, full_name, email, username } = data;

	const payload = {
		id,
		full_name,
		email,
		username,
	};

	return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

const createRefreshToken = (data) => {
	const { id, full_name, email, username } = data;

	const payload = {
		id,
		full_name,
		email,
		username,
	};

	return jwt.sign(payload, secretKey, { expiresIn: "12h" });
};

const decodeToken = (token) => {
	return jwt.decode(token, secretKey);
};

module.exports = {
	createAccessToken,
	createRefreshToken,
	decodeToken,
};
