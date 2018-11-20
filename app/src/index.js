'use strict'

const express    = require("express")
const app        = express();
const mongoose   = require("mongoose")
const bodyParser = require("body-parser");
const config     = require("./config/config");
const port 		 = config.port;
const todoRoutes = require("./routes/routes");

mongoose.connect(config.db)
app.use(bodyParser.json())
app.listen(port)
app.use("/api", todoRoutes)
