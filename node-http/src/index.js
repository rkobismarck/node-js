const http        = require('http');
const config      = require("./config/config")

const server = http.createServer((req,res) => {
  res.end("Hey, Welcome!");
})

server.listen(config.port);
console.log("Now you're up & running, port: ", config.port)

