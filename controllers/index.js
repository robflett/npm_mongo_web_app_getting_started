var express = require("express")
var router = express.Router()
var path = require("path")

router.use("/api/planets", require("./planets_router.js"))

router.get("/", function(req,res){
  // SEND INDEX.HTML FROM HERE
  res.sendFile(path.join(__dirname + "/../client/index.html"))
})

module.exports = router