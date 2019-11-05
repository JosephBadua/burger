var connection = require("./connection.js");
var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput + ";", function (err, results) {
           if(err) throw err;
           cb(results);
        });
    },
    updateBurger: function(tableInput, id,  cb){
        connection.query('UPDATE ' + tableInput + " SET devoured = true WHERE id = " + id, function (err, results) {
            if(err) throw err;
            cb(results);
         });
    },
    insertBurger: function(tableInput, value, cb){
        connection.query("INSERT INTO " + tableInput + " (burger_name, devoured) VALUES (" + ("\""+ value +"\"") + " , FALSE)", function(err, results){
            if (err) throw err;
            cb(results);
        });
    }
}

module.exports = orm;