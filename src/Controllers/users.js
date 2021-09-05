const bcrypt = require("bcrypt");
const User = require("../Models/users");

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const userStored = await User.findOne({
			attributes: ["id", "full_name", "email", "username", "password"],
		});
	} catch (error) {}

	res.json();
};

const addUser = (req, res) => {
	res.send("register");
};

module.exports = {
	login,
	addUser,
};
