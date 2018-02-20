var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    User = require("../models/users");

// ROOT ROUTE
router.get("/", function(req, res) {
  res.render("landing");
});

// SHOW LOGIN FORM
router.get("/login", function(req, res) {
  res.render("login");
});

// LOGIN LOGIC
router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/votes",
    failureRedirect: "/login"

}), function(req, res) {

});

// SHOW SIGNUP FORM
router.get("/register", function(req, res) {
  res.render("register");
});

// SIGNUP LOGIC
router.post("/register", function(req, res) {
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      return res.render("register", {error: err.message});
    }
    passport.authenticate("local")(req, res, function() {
      req.flash("success", "Welcome to the Voting App, " + user.username);
      res.redirect("/votes");
    });
  });
});

// LOGOUT ROUTE
router.get("/logout", function(req, res) {
  req.logout();
  req.flash("success", "Logged out!");
  res.redirect("/votes");
});

module.exports = router;
