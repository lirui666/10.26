var express = require('express');
var router = express.Router();
var fs = require('fs')
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'xcaliruiqq666'
});
router.get('/', function(req, res, next) {
    connection.connect();

    connection.query('SELECT * FROM lirui66.lirui6', function(err, rows, fields) {
        res.header('Access-Control-Allow-Origin',"*")
        res.send(rows)

    });

    connection.end();


});

module.exports = router;
