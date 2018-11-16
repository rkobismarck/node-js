const express = require("express");
const config  = require("./config/config");
const place   = require("./model/model");
const app     = express();

app.get("/",(req,res) => {
  res.send("Hey, Welcome to Express!")
});

app.get("/place",(req,res) => {
  res.send("Hey, Welcome to Express from /places")
});

app.get("/place/:id", (req,res) => {
  res.send("Hey, Welcome to Express your placeId it's " + req.params.id)
});

app.put("/place", (req,res) => {
  res.send("Let's proceed to save data");
})

app.listen(config.port)
console.log("Now you're up & running, port: ", config.port)

