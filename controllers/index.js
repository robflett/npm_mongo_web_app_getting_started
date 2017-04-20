var express = require("express")
var router = express.Router()
var path = require("path")

router.use("/api/planets", require("./planets_router.js"))

router.get("/", function(req,res){
  // SEND INDEX.HTML FROM HERE
  res.json({data: "Hello from my API"})
})

module.exports = router