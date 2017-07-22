/**
 * Created by jayant on 21/7/17.
 */
var router = require('express').Router();
/*const MongoClient = require('mongodb').MongoClient;
var db;
var delhiZone = "";*/
// router/downloads
/*router.get('/', function(req, res) {
 res.json({ products: [] });
 });*/

// api/products/:id
//equivalent to: router/downloads/maps
/*
MongoClient.connect('mongodb://broker:imbroker@ds153732.mlab.com:53732/stock-quotes', function(err, database) {
    // ... start the server
    if (err) return console.log(err);
    db = database;
    db.collection('zones').find().toArray(function (err, results) {
        if (err) return console.log(err);
        //console.log(JSON.stringify(results));
        delhiZone = JSON.stringify(results);
    });
/!*    db.collection('innerZone').find().toArray(function (err, results) {
        if (err) return console.log(err);
        //console.log(results);
        innerZone = JSON.stringify(results);
    });*!/
});*/

router.get('/about', function(req, res) {
    res.render('pages/home/about', { title: 'Maps' });
});
router.get('/overview', function(req, res) {
    res.render('pages/home/overview', { title: 'Maps' });
});

module.exports = router;