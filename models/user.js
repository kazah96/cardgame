const mongoose = require("../lib/mongoose");

const modelName = "User";

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },
});

exports.User = mongoose.model(modelName, userSchema);
