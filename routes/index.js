var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/blog-post-1', function(req, res, next){
  res.render('blog');
});

router.get('/blog-post-2', function(req, res, next){
  res.render('blogPage2')
})

router.get('/blog-post-3', function(req, res, next){
  res.render('blogPage3')
})
module.exports = router;
