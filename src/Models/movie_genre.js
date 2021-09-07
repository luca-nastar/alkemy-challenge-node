const { DataTypes } = require("sequelize");
const sequelize = require("../Database/connection");
const Genre = require("./genres");
const Movie = require("./movies");

const Movie_Genre = sequelize.define("Movie_Genre", {
	id_movie: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: { model: Movie, key: "id" },
	},
	id_genre: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: { model: Genre, key: "id" },
	},
});

module.exports = Movie_Genre;
