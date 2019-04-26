var express = require("express");
var router = express.Router();

var whiteList = require("./white-list");

router.use(function(req, res, next){
  var userId = req.session.userId;
  req.user = { userId: userId };
  next();
});

router.post("/login", function(req, res){
  var userId = req.body.userId;
  var userPw = req.body.userPw;
  if (userId in whiteList){
    if (userPw == whiteList[userId]){
      req.session.userId = userId;
      res.redirect("/");
      console.log("login");
      return;
    }
    else {
      console.log("wrong-pw");
    }
  }
  else {
    console.log("wrong-id");
  }
  res.redirect("/404");
  return;
});

router.post("/logout", function(req, res){

});

module.exports = router;
