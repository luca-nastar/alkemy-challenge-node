const { DataTypes } = require("sequelize");
const sequelize = require("../Database/connection");
const Character = require("./characters");
const Movie = require("./movies");

const Chr_Movie = sequelize.define("Character_Movie", {
	id_character: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: { model: Character, key: "id" },
	},
	id_movie: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: { model: Movie, key: "id" },
	},
});

module.exports = Chr_Movie;
