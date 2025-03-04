const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./public");

let renderRouter = require("../routes/routes");
let indexRouter = require("../routes/index.routes");

app.use("/", renderRouter);
app.use("/api/v1/index", indexRouter);
module.exports = app;
