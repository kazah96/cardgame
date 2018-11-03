const mongoose = require("../lib/mongoose");

const modelName = "User";

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  year: Number,
});

exports.User = mongoose.model(modelName, userSchema);
