const orm = require("../config/orm.js");
console.log(orm);

const burger = {
    findAll: function(callback){
        orm.findAll("burgers", function(res){
            callback(res);
        })
    },
    create: function(callback){
        orm.create("burgers", function(res){
            callback(res);
        })
    },
    update: function(callback){
        orm.update("burgers",function(res){
            callback(res);
        })
    },
    delete: function(callback){
        orm.delete("burgers", function(res){
            callback(res);
        });
    }
};

module.exports = burger;