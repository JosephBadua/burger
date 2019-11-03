const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();
//explain

router.get("/", function(req, res){
    burger.findAll(function(data){
    console.log(data);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
     "burger_name", "devoured"   
    ], [
      req.body.burger_name, req.body.devoured  
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
});

router.delete("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
});

module.exports = router;