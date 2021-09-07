const { DataTypes } = require("sequelize");

const sequelize = require("../Database/connection");

const Movie = sequelize.define("Movie", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	release_date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	rating: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	cover_img: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	isActive: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
});

module.exports = Movie;
