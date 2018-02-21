var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Poll = require("./models/votes"),
    User = require("./models/users");

// REQUIRE ROUTES
var voteRoute = require("./routes/votes"),
    indexRoute = require("./routes/index");

// CONNECT REQUIRES
mongoose.connect("mongodb://localhost/voting_app");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

// USER AUTHENTICATION
app.use(require("express-session")({
  secret: "Vote",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// ATTACH ROUTE PREFIXES
app.use("/", indexRoute);
app.use("/votes", voteRoute);

app.listen(3000);
