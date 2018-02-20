var mongoose = require("mongoose");

var pollSchema = new mongoose.Schema({
  question: String,
  option1: String,
  option2: String
});

module.exports = mongoose.model("Poll", pollSchema);
