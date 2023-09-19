const { default: Login } = require("../../src/pages/Login");
const{register} =require("../controllers/usersControllers");
const router = require("express").Router();
router.post("/register",register);
router.post("/login",Login);
module.exports = router;
