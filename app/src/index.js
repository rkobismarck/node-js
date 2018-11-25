'use strict'

const express    = require("express")
const app        = express();
const mongoose   = require("mongoose")
const bodyParser = require("body-parser");
const config     = require("./config/config");
const todoRoutes = require("./routes/routes");
const port 		 = config.port;


mongoose.connect(config.db)
app.use(bodyParser.json())
app.listen(port)
app.use("/api", todoRoutes)
