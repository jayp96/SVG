var express = require('express');
var router = express.Router();
var root = require('app-root-path');
//var PROJECT_DIR = router.PROJECT_DIR;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render( 'pages/login', { title: 'Express' });
});

router.get('/governance', function(req, res, next) {
    res.render( 'pages/governance', { title: 'Express' });

});

router.get('/know-your-area', function(req, res, next) {
    res.render( 'pages/KNA', { title: 'Express' });
});

router.get('/complaints', function(req, res, next) {
    res.render( 'pages/complaint', { title: 'Express' });
});

router.get('/downloads', function(req, res, next) {
    res.render( 'pages/downloads', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render( 'pages/contact', { title: 'Express' });
});

router.get('/dev-projects', function(req, res, next) {
    res.render( 'pages/dev-projects', { title: 'Express' });
});

router.get('/suggestions', function(req, res, next) {
    res.render( 'pages/suggestions', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render( 'pages/about', { title: 'Express' });
});

router.get('/overview', function(req, res, next) {
    res.render( 'pages/overview', { title: 'Express' });
});
module.exports = router;
