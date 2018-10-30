const mongoose = require("../lib/mongoose");

const modelName = "world";

const worldSchema = mongoose.Schema({
  user: { type: String, unique: true },
  map: Object,
  events: [],

});

exports.World = mongoose.model(modelName, worldSchema);
