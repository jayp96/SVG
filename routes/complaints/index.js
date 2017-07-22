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
router.get('/drainage', function(req, res) {
    res.render('pages/complaints/drainage', { title: 'Maps' });
});
router.get('/electricity', function(req, res) {
    res.render('pages/complaints/electricity', { title: 'Maps' });
});
router.get('/greenAreas', function(req, res) {
    res.render('pages/complaints/greenAreas', { title: 'Maps' });
});
router.get('/plotAreas', function(req, res) {
    res.render('pages/complaints/plotAreas', { title: 'Maps' });
});
router.get('/roadNetworks', function(req, res) {
    res.render('pages/complaints/roadNetwork', { title: 'Maps' });
});
router.get('/sewageDisposal', function(req, res) {
    res.render('pages/complaints/sewageDisposal', { title: 'Maps' });
});
router.get('/social', function(req, res) {
    res.render('pages/complaints/social', { title: 'Maps' });
});
router.get('/waterSupply', function(req, res) {
    res.render('pages/complaints/waterSupply', { title: 'Maps' });
});

module.exports = router;