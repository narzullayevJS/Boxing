const express = require("express");
const { addIndex } = require("../controller/index.controller.js");
let router = express.Router();
router.post("/", addIndex);

module.exports = router;
