var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    passportLocal = require("passport-local"),
    methodOverride = require("method-override"),
    Poll = require("./models/votes"),
    User = require("./models/users");

// REQUIRE ROUTES
var voteRoute = require("./routes/votes"),
    indexRoute = require("./routes/index");

mongoose.connect("mongodb://localhost/voting_app");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// USER AUTHENTICATION
app.use(require("express-session")({
  secret: "Vote",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));

app.use("/", indexRoute);
app.use("/votes", voteRoute);

app.listen(3000);
