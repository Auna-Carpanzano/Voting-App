var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    passportLocal = require("passport-local"),
    methodOverride = require("method-override");

// REQUIRE ROUTES
var voteRoute = require("./routes/votes");

mongoose.connect("mongodb://localhost/voting_app");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
