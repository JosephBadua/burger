const orm = require("../config/orm.js");
console.log(orm);

const burger = {
    findAll: function(callback){
        orm.findAll("burgers", function(res){
            callback(res);
        })
    },
    create: function(cols, vals, callback){
        orm.create("burgers", cols, vals, function(res){
            callback(res);
        })
    },
    update: function(objColVals, condition, callback){
        orm.update("burgers", objColVals, condition, function(res){
            callback(res);
        })
    },
    delete: function(condtion, callback){
        orm.delete("burgers", condtion, function(res){
            callback(res);
        });
    }
};

module.exports = burger;