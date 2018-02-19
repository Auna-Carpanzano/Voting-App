var express = require("express");
var router = express.Router();

// INDEX ROUTE - SHOW ALL VOTES
router.get("/", function(req, res) {
  res.render("votes/index");
});

// CREATE ROUTE - ADD NEW VOTE
router.post("/", function(req, res) {
  res.redirect("/votes");
});

// NEW ROUTE - SHOW FORM TO CREATE NEW VOTE
router.get("/new", function(req, res) {
  res.render("votes/new");
});

// SHOW ROUTE - SHOW INFO ABOUT ONE VOTE
router.get("/:id", function(req, res) {
  res.render("votes/show");
});

// EDIT ROUTE - SHOW FORM TO EDIT
router.get("/:id/edit", function(req, res) {
  res.render("votes/edit");
});

// UPDATE ROUTE - SHOW UPDATED VOTE
router.put("/:id", function(req, res) {
  if (err) {
    res.redirect("/votes");
  } else {
    res.redirect("/votes/" + req.params.id);
  }
});

module.exports = router;
