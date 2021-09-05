const { Router } = require("express");
const { login, addUser } = require("../Controllers/users");

const router = Router();

router.post("/login", login);
router.post("/register", addUser);

module.exports = router;
