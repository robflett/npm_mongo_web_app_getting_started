var express = require("express")
var app = express()

app.use(require("./controllers/index.js"))

app.use(express.static("client/build"))

app.listen(3000, function(){
  console.log("Port 3000 is running")
})