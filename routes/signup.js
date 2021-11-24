var express = require('express')
var router = express.Router()
var userHelpers = require('../helpers/user-helpers')

router.get('/',(req,res)=>{
    res.render("user/usrSign")
})

router.post('/',(req,res, next)=>{
    console.log(req.body);
    var userdata = req.body;
    userHelpers.addUser(userdata).then((status)=>{
        console.log(status);
        if (status){
            res.send("login page vannu")
        } else{
            res.redirect("/signUp")
        }
    })
})

module.exports = router;