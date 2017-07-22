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
router.get('/amenities', function(req, res) {
    res.render('pages/knowYourArea/amenities', { title: 'Maps' });
});
router.get('/commercial', function(req, res) {
    res.render('pages/knowYourArea/commercial', { title: 'Maps' });
});
router.get('/industrial', function(req, res) {
    res.render('pages/knowYourArea/industrial', { title: 'Maps' });
});
router.get('/infrastructure', function(req, res) {
    res.render('pages/knowYourArea/infrastructure', { title: 'Maps' });
});
router.get('/open', function(req, res) {
    res.render('pages/knowYourArea/open', { title: 'Maps' });
});
router.get('/residential', function(req, res) {
    res.render('pages/knowYourArea/residential', { title: 'Maps' });
});
router.get('/transport', function(req, res) {
    res.render('pages/knowYourArea/transport', { title: 'Maps' });
});

module.exports = router;