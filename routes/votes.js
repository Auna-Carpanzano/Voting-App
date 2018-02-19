var express = require("express");
var router = express.Router();
var Vote = require("../models/votes");

// INDEX ROUTE - SHOW ALL VOTES
router.get("/", function(req, res) {
  res.render("votes/index");
});

// CREATE ROUTE - ADD NEW VOTE
router.post("/", function(req, res) {
  var question = req.body.question;
  var option1 = req.body.option1;
  var option2 = req.body.option2;
  var newPoll = {question: question, option1: option1, option2: option2};
  Vote.create(newPoll, function(err, newlyCreatedPoll) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/votes");
    }
  });
});

// NEW ROUTE - SHOW FORM TO CREATE NEW VOTE
router.get("/new", function(req, res) {
  res.render("votes/new");
});

// READ ROUTE - SHOW INFO ABOUT ONE VOTE
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

// DESTROY ROUTE - DELETE A VOTE
router.delete(":/id", function(req, res) {
  res.redirect("/votes");
});

module.exports = router;
