const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Genre = sequelize.define("Genre", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},

	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = Genre;
