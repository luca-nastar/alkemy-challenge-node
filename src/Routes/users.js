const { Router } = require("express");
const { refreshAccessToken } = require("../Controllers/auth");
const { login, addUser } = require("../Controllers/users");
const {
	loginValidator,
	registerValidatior,
} = require("../Middlewares/userValidator");

const router = Router();

router.post("/login", [loginValidator], login);
router.post("/register", [registerValidatior], addUser);

router.post("/refreshToken", refreshAccessToken);

module.exports = router;
