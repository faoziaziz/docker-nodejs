var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kalista Wacan' });
});

router.get('/tentang', function(req, res, next){
  res.render('index', {title: 'Tentang'});
}
);
module.exports = router;
