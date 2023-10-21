const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");
require("dotenv").config();

const app = express();

app.use(express.json({ strict: false }));

const router = require("./routers");
app.use("/api/v1", router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
