var mongoose = require("mongoose");

var pollSchema = new mongoose.Schema({
  question: String,
  option1: String,
  option2: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
});

module.exports = mongoose.model("Poll", pollSchema);
