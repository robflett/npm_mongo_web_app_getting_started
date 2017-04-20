var express = require("express")
var planetsRouter = express.Router()


planetsRouter.get("/", function(req,res){
  // USE DB OBJECT - GOT TO MONGO TO GET ALL PLANETS
  res.json({data: [ { name: "Earth" } ] } )
})

module.exports = planetsRouter