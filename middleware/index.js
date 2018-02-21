var Poll = require("../models/votes");
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You must be logged in to make a new poll");
  res.redirect("/login");
};

middlewareObj.checkPollOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Poll.findById(req.params.id, function(err, foundPoll) {
      if (err || !foundPoll) {
        req.flash("error", "Poll not found");
        res.redirect("back");
      }
    });
  }
}

module.exports = middlewareObj;
