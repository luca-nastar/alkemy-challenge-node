const { Router } = require("express");
const {
	getAllCharacters,
	addCharacter,
	editCharacter,
	deleteCharacter,
} = require("../Controllers/characters");

const router = Router();

router.get("/characters", getAllCharacters);
router.post("/characters", addCharacter);
router.put("/characters/:id", editCharacter);
router.delete("/characters/:id", deleteCharacter);

module.exports = router;
