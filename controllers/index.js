var express = require("express")
var router = express.Router()
var path = require("path")

router.get("/", function(req,res){
  res.json({data: "Hello from my API"})
})

module.exports = router