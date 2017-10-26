var express = require('express');
var router = express.Router();
var root = { root: 'views' }; //{ root: 'public/app/views' };

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', root);
});

/* GET sign up page. */
router.get('/signup', function(req, res) {
  res.render('signup', root);
});

/* GET terms of use page. */
router.get('/terms-of-use', function(req, res) {
  res.render('termsOfUse', root);
});

/* GET privacy policy page. */
router.get('/privacy-policy', function(req, res) {
  res.render('privacyPolicy', root);
});

/* GET password reset page. */
router.get('/requestPasswordReset', function(req, res) {
  res.render('passwordReset', root);
});

module.exports = router;