var Poll = require("../models/votes");
var middleware = {};

middleware.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
};

module.exports = middleware;
