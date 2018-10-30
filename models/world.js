const mongoose = require("../lib/mongoose");

const modelName = "world";

const worldSchema = mongoose.Schema({
  user: String,
  map: String,
  time: String,
  temperature: Number,
  event: {
    cataclysm: String,
  },
});

exports.World = mongoose.model(modelName, worldSchema);
