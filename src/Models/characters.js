const { DataTypes } = require("sequelize");
const sequelize = require("../Database/connection");
const Chr_Movie = require("./chr_movie");
const Movie = require("./movies");

const Character = sequelize.define("Character", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	age: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	weight: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	history: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	isActive: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
});

Character.belongsToMany(Movie, {
	through: Chr_Movie,
	foreignKey: "id_character",
});

Movie.belongsToMany(Character, {
	through: Chr_Movie,
	foreignKey: "id_movie",
});

module.exports = Character;
