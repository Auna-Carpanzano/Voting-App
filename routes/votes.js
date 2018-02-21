var express = require("express"),
    router = express.Router(),
    Poll = require("../models/votes"),
    middleware = require("../middleware");

// INDEX ROUTE - SHOW ALL POLLS
router.get("/", function(req, res) {
  Poll.find({}, function(err, allPolls) {
    if (err) {
      console.log(err);
    } else {
     res.render("votes/index", {polls: allPolls});
    }
  });
});

// CREATE ROUTE - ADD NEW POLL
router.post("/", function(req, res) {
  var question = req.body.question;
  var option1 = req.body.option1;
  var option2 = req.body.option2;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newPoll = {question: question, option1: option1, option2: option2, author: author};
  Poll.create(newPoll, function(err, newlyCreatedPoll) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/votes");
    }
  });
});

// NEW ROUTE - SHOW FORM TO CREATE NEW POLL
router.get("/new", function(req, res) {
  res.render("votes/new");
});

// SHOW ROUTE - SHOW INFO ABOUT ONE POLL
router.get("/:id", function(req, res) {
  Poll.findById(req.params.id).exec(function(err, foundPoll) {
    if (err || !foundPoll) {
      console.log(err);
      res.redirect("back");
    } else {
      res.render("votes/show", {poll: foundPoll});
    }
  });
});

// EDIT ROUTE - SHOW FORM TO EDIT
router.get("/:id/edit", function(req, res) {
  Poll.findById(req.params.id, function(err, foundPoll) {
    res.render("votes/edit", {poll: foundPoll});
  });
});

// UPDATE ROUTE - SHOW UPDATED POLL
router.put("/:id", function(req, res) {
  Poll.findByIdAndUpdate(req.params.id, req.body.poll, function(err, updatedPoll) {
    if (err) {
      res.redirect("/votes");
    } else {
      res.redirect("/votes/" + req.params.id);
    }
  });
});

// DESTROY ROUTE - DELETE A POLL
router.delete("/:id", function(req, res) {
  Poll.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect("/votes");
    } else {
      res.redirect("/votes");
    }
  });
});

module.exports = router;
