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

// LOGIN LOGIC
router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/votes",
    failtureRedirect: "/login"

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

module.exports = router;
