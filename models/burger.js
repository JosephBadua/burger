var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    updateBurger: function(id, cb){
        orm.updateBurger('burgers', id, cb);
    },
    insertBurger: function(value, cb){
        orm.insertBurger('burgers', value, cb);
    }
};

module.exports = burger;