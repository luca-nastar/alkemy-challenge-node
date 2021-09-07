const { Router } = require("express");
const {
	getMovies,
	addMovie,
	editMovie,
	deleteMovie,
} = require("../Controllers/movies");
const { isAuthenticated } = require("../Middlewares/isAuthenticated");
const {
	addMovieValidator,
	editMovieValidator,
} = require("../Middlewares/moviesValidator");

const router = Router();

router.get("/movies", [isAuthenticated], getMovies);
router.post("/movies", [isAuthenticated, addMovieValidator], addMovie);
router.put("/movies/:id", [isAuthenticated, editMovieValidator], editMovie);
router.delete("/movies/:id", [isAuthenticated], deleteMovie);

module.exports = router;
