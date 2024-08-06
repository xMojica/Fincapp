const express = require("express");
const router = express.Router();

const animalesRouter = require("./animales");
const corralesRouter = require("./corrales");

router.use("/animales", animalesRouter);
router.use("/corrales", corralesRouter);

module.exports = router;
