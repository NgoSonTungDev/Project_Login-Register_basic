const authControllers = require("../controllers/authController")
const router = require("express").Router();

router.post("/register",authControllers.register)

module.exports = router