// Inside burger.js, import orm.js into burger.js
//Also inside burger.js, create the code that will call 
//the ORM functions using burger specific input for the ORM.

var orm = require('../config/orm.js');

var burgers = {

  selectAll: function(cb){
    orm.selectAll('burgers', function(res){
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb){
    orm.insertOne('burgers', cols, vals, function(res){
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb){
    var condition = 'id = ' + condition;
    var objColValsObject = {devoured: objColVals};
    orm.updateOne('burgers', objColValsObject, condition, function(res){
      cb(res);
    });
  },

  deleteOne: function(condition, cb){
    var condition = 'id = ' + condition;
    orm.deleteOne('burgers', condition, function(res){
      cb(res);
    });
  }
};


module.exports = burgers;