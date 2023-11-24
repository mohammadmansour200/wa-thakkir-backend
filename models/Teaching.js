const mongoose = require("mongoose");

const TeachingSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "أضف شيئا في هذه الخانة"],
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Teaching", TeachingSchema);
