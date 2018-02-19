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
