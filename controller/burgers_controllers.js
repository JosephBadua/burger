var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(burgers){
        console.log(burgers);
        res.render("index", {burgers});
    });
});

router.put("/burgers/update", function(req,res){
    burger.updateBurger(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
})

router.post("/burgers/create", function(req,res){
    burger.insertBurger(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
})


module.exports = router;