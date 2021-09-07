const { Router } = require("express");
const {
	getCharacters,
	addCharacter,
	editCharacter,
	deleteCharacter,
} = require("../Controllers/characters");

const {
	addChrvalidator,
	editChrValidator,
} = require("../Middlewares/chrValidator");

const { isAuthenticated } = require("../Middlewares/isAuthenticated");

const router = Router();

router.get("/characters", [isAuthenticated], getCharacters);
router.post("/characters", [isAuthenticated, addChrvalidator], addCharacter);
router.put(
	"/characters/:id",
	[isAuthenticated, editChrValidator],
	editCharacter
);
router.delete("/characters/:id", [isAuthenticated], deleteCharacter);

module.exports = router;
