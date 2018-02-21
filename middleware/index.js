var Poll = require("../models/votes");
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You must be logged in to make a new poll");
  res.redirect("/login");
};

module.exports = middlewareObj;
