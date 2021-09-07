const { DataTypes } = require("sequelize");
const sequelize = require("../Database/connection");
const Movie = require("./movies");
const Movie_Genre = require("./movie_genre");

const Genre = sequelize.define("Genre", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

Movie.belongsToMany(Genre, { through: Movie_Genre, foreignKey: "id_movie" });
Genre.belongsToMany(Movie, { through: Movie_Genre, foreignKey: "id_genre" });

module.exports = Genre;
