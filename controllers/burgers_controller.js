//Inside the burgers_controller.js file, import the following:
//Express, burger.js
//Create the router for the app, and export the router at the end of your file.

var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

    

    router.get('/', function(req, res){
        burger.selectAll(function(data){
            var burgerObject = {
            burgers: data
    };
            console.log(burgerObject);
            res.render('index', burgerObject);
        });
    });

    router.post('/burgers/create', function(req, res){
            burger.insertOne(['burger_name'], [req.body.burger], function(){
            res.redirect('/');
        });
    });

    router.put('/burgers/update/:id', function(req, res){

        burger.updateOne(req.body.devoured, req.params.id, function(){
            res.redirect('/');
        });
    });

    router.delete('/burgers/delete/:id', function (req, res){
        burger.deleteOne(req.params.id, function(){
            res.redirect('/');
        });
    });

module.exports = router;