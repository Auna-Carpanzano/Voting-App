var express = require("express");
var router = express.Router();

// INDEX ROUTE- SHOW ALL VOTES
router.get("/", function(req, res) {
  res.render("votes/index");
});

module.exports = router;
