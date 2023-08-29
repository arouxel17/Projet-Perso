const express = require("express");

const router = express.Router();

const spotsControllers = require("./controllers/spotsControllers");
const conditionsControllers = require("./controllers/conditionsControllers");

router.get("/spots", spotsControllers.browse);
router.get("/spots/rand", spotsControllers.random);
router.get("/spots/:id", spotsControllers.read);
router.get("/nbjobs", spotsControllers.getCount);
router.get("/homedata", spotsControllers.dataHome);
router.get("/difficulty", spotsControllers.difficulty);
router.get("/conditions", conditionsControllers.browse);
router.put("/spots/:id", spotsControllers.edit);
router.post("/spots", spotsControllers.add);
router.delete("/spots/:id", spotsControllers.destroy);

const usersControllers = require("./controllers/usersControllers");

const { hashedPassword } = require("./services/auth");
// const checkAuth = require("./middleware/auth");
const registrerValidate = require("./middleware/register");

router.get("/users", usersControllers.read);
router.get("/users/:id", usersControllers.readOne);
router.post("/users", hashedPassword, usersControllers.add);
router.post("/users/login", registrerValidate, usersControllers.validateUser);
router.put("/users/:id", hashedPassword, usersControllers.edit);

module.exports = router;
