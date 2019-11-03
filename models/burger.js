const orm = require("../config/orm.js");
console.log(orm);

const burger = {
    findAll: function(){
        orm.findAll("burgers", function(res){
            console.log(res);
        })
    },
    create: function(){
        orm.create("burgers", function(res){
            console.log(res);
        })
    },
    update: function(){
        orm.update("burgers",function(res){
            console.log(res);
        })
    },
    delete: function(){
        orm.delete("burgers", function(res){
            console.log(res);
        });
    }
};

module.exports = burger;
console.log(burger.findAll);