const express = require("express");
let router = express.Router();

const renderController = require("../controller/render.controller");
router.get("/", renderController.renderIndex);
router.get("/index", renderController.renderIndex);
router.get("/class", renderController.renderClass);
router.get("/blog", renderController.renderBlog);
router.get("/about", renderController.renderAbout);

module.exports = router;
