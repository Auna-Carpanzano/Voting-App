var express = require("express");
var router = express.Router();

// INDEX ROUTE- SHOW ALL VOTES
router.get("/", function(req, res) {
  res.render("votes/index");
});

// NEW ROUTE- SHOW FORM TO CREATE NEW VOTE
router.get("/new", function(req, res) {
  res.render("votes/new");
});

module.exports = router;
