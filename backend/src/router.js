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

module.exports = router;
