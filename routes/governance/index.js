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
router.get('/', function(req, res) {
    res.render('pages/governance/governance', { title: 'Maps' });
});
router.get('/general', function(req, res) {
    res.render('pages/governance/general', { title: 'Maps' });
});

module.exports = router;