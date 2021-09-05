const { Sequelize } = require("sequelize");

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
	host: DB_HOST,
	dialect: DB_DIALECT,
	// logging: false, //TODO: remove comment
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected!");
	})
	.catch((err) => {
		console.log("Failed to connect to database");
		console.log(err);
	});

module.exports = sequelize;
