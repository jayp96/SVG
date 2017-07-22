/**
 * Created by jayant on 21/7/17.
 */
var router = require('express').Router();

// router/downloads
/*router.get('/', function(req, res) {
    res.json({ products: [] });
});*/

// api/products/:id
//equivalent to: router/downloads/maps
router.get('/maps', function(req, res) {
    res.render('pages/downloads/maps', { title: 'Maps' });
});
router.get('/colonies', function(req, res) {
    res.render('pages/downloads/colonies', { title: 'Maps' });
});
router.get('/doctors', function(req, res) {
    res.render('pages/downloads/doctors', { title: 'Maps' });
});
router.get('/eating-joints', function(req, res) {
    res.render('pages/downloads/EatingJoints', { title: 'Maps' });
});
router.get('/emergency-helpline', function(req, res) {
    res.render('pages/downloads/emergencyHelpline', { title: 'Maps' });
});
router.get('/industrial-association', function(req, res) {
    res.render('pages/downloads/IndustrialAssociation', { title: 'Maps' });
});
router.get('/petrolpumps', function(req, res) {
    res.render('pages/downloads/doctors', { title: 'Maps' });
});
router.get('/RWAs', function(req, res) {
    res.render('pages/downloads/RWAs', { title: 'Maps' });
});
router.get('/schools', function(req, res) {
    res.render('pages/downloads/schools', { title: 'Maps' });
});
module.exports = router;