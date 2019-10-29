var connection = require("./connection.js");
var orm = {
    selectAll: function(){
        connection.query("SELECT * FROM burgers"), function (err, results){
            if (err) throw err,
            console.log(results);
        }
    },
    insertOne: function(insertBurger){
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (" + insertBurger + ", FALSE)", function(err){
        if (err) throw err
        console.log("success");
        });
    },
    updateOne: function(updateBurger){
        connection.query("UPDATE burgers WHERE burger_name = " + updateBurger + "SET devoured = TRUE", function(err){
        if (err) throw err
        console.log("success")
        });
    }
}

module.exports = orm;