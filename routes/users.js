var express = require('express');
const {render} = require('../app');
var router = express.Router();
var userHelpers = require('../helpers/user-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/usrLogin');
});

router.get('/home',function(req,res,next){
  res.render('user/userHome')
});





module.exports = router;
