var express = require("express");
var router = express.Router();

// ROOT ROUTE
router.get("/", function(req, res) {
  res.render("landing");
});

// SHOW LOGIN FORM
router.get("/login", function(req, res) {
  res.render("login");
});

// SHOW SIGNUP FORM
router.get("/register", function(req, res) {
  res.render("register");
});

// SIGNUP LOGIC
router.post("/register", function(req, res) {
  var newUser = new User({username: req.body.username});
});

module.exports = router;
